require 'rails_helper'

describe Api::OaiPmh::RelationsController, :type => :controller do

  include XmlHelper

  render_views

  before :each do
    FactoryGirl.create :admin

    FactoryGirl.create :has_created
    FactoryGirl.create :is_equivalent_to
  end

  it "should respond to 'Identify'" do
    get :identify, :format => :xml
    expect(response).to be_success
    expect{Hash.from_xml response.body}.not_to raise_error

    post :identify, :format => :xml
    expect(response).to be_success
    expect{Hash.from_xml response.body}.not_to raise_error
  end

  it "should respond to 'ListMetadataFormats'" do
    get :list_metadata_formats, :format => :xml
    expect(response).to be_success
    expect{Hash.from_xml response.body}.not_to raise_error

    post :list_metadata_formats, :format => :xml
    expect(response).to be_success
    expect{Hash.from_xml response.body}.not_to raise_error
  end

  it "should respond to 'ListIdentifiers'" do
    get :list_identifiers, :format => :xml

    identifiers = parse_xml(response.body).xpath("//xmlns:identifier")

    expect(identifiers.count).to eq(2)
  end

  it "should respond to 'ListRecords'" do
    get :list_records, format: :xml, metadataPrefix: 'kor'

    items = parse_xml(response.body).xpath("//kor:relation")

    expect(items.count).to eq(2)
  end


  it "should respond to 'GetRecord'" do
    has_created = Relation.where(:name => "has created").first

    get(:get_record, 
      format: :xml,
      identifier: has_created.uuid,
      metadataPrefix: 'kor'
    )
    expect(response).to be_success

    items = parse_xml(response.body).xpath("//kor:relation")

    expect(items.count).to eq(1)
    expect(items.first.xpath("//kor:name").text).to eq("has created")
    expect(items.first.xpath("//kor:reverse-name").text).to eq("has been created by")
  end

  it "should return XML that validates against the OAI-PMH schema" do
    relation = Relation.where(:name => "has created").first

    # yes this suck, check out 
    # https://mail.gnome.org/archives/xml/2009-November/msg00022.html
    # for a reason why it has to be done like this
    xsd = Nokogiri::XML::Schema(File.read "#{Rails.root}/tmp/oai_pmh_validator.xsd")
    get(:get_record,
      format: :xml,
      identifier: relation.uuid,
      metadataPrefix: 'kor'
    )
    doc = parse_xml(response.body)

    expect(xsd.validate(doc)).to be_empty
  end

  it "should disseminate oai_dc and kor metadata formats on GetRecord requests" do
    has_created = Relation.where(:name => "has created").first

    get(:get_record,
      :format => :xml,
      :identifier => has_created.uuid,
      :metadataPrefix => "oai_dc"
    )
    doc = parse_xml(response.body)
    expect(doc.xpath("//xmlns:metadata/oai_dc:dc").count).to eq(1)

    get(:get_record,
      :format => :xml,
      :identifier => has_created.uuid,
      :metadataPrefix => "kor"
    )
    doc = parse_xml(response.body)
    expect(doc.xpath("//xmlns:metadata/kor:relation").count).to eq(1)
  end

  it "should disseminate oai_dc and kor metadata formats on ListRecords requests" do
    get(:list_records, 
      :format => :xml, 
      :metadataPrefix => "oai_dc"
    )
    doc = parse_xml(response.body)
    expect(doc.xpath("//xmlns:metadata/oai_dc:dc").count).to eq(2)

    get(:list_records, 
      :format => :xml, 
      :metadataPrefix => "kor"
    )
    doc = parse_xml(response.body)
    expect(doc.xpath("//xmlns:metadata/kor:relation").count).to eq(2)
  end

  it "should return 'idDoesNotExist' if the identifier given does not exist" do
    get(:get_record, 
      format: :xml, 
      identifier: '1234', 
      metadataPrefix: 'kor'
    )

    verify_oaipmh_error 'idDoesNotExist'
  end

  it "should return 'noRecordsMatch' if the criteria do not yield any records" do
    Relation.all.each{|r| r.really_destroy!}
    admin = User.admin

    get :list_identifiers, format: :xml
    verify_oaipmh_error 'noRecordsMatch'

    get(:list_records,
      format: :xml, 
      api_key: admin.api_key,
      metadataPrefix: 'kor'
    )
    verify_oaipmh_error 'noRecordsMatch'
  end

  it 'should include deleted records' do
    admin = User.admin
    has_created = Relation.find_by(name: 'has created')
    has_created.destroy

    get(:list_records,
      format: :xml, 
      api_key: admin.api_key,
      metadataPrefix: 'kor'
    )
    doc = parse_xml(response.body)
    expect(doc.xpath("//xmlns:header[@status='deleted']").count).to eq(1)
    expect(doc.xpath("//xmlns:header[not(@status)]").count).to eq(1)
    expect(doc.xpath("//xmlns:metadata").count).to eq(1)

    get(:list_identifiers,
      format: :xml, 
      api_key: admin.api_key
    )
    doc = parse_xml(response.body)
    expect(doc.xpath("//xmlns:header[@status='deleted']").count).to eq(1)
    expect(doc.xpath("//xmlns:header[not(@status)]").count).to eq(1)
    expect(doc.xpath("//xmlns:metadata").count).to eq(0)

    get(:get_record,
      format: :xml,
      identifier: has_created.uuid,
      metadataPrefix: 'kor'
    )
    doc = parse_xml(response.body)
    expect(doc.xpath("//xmlns:header[@status='deleted']").count).to eq(1)
    expect(doc.xpath("//xmlns:metadata").count).to eq(0)
  end

end