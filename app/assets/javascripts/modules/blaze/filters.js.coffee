kor.filter('translate', ["korTranslate", (korTranslate) ->
  filter = (input, options = {}) -> korTranslate.translate(input, options)
  filter.$stateful = true
  filter
])

kor.filter('capitalize', [ ->
  return (input) ->
    try
      input[0..0].toUpperCase() + input[1..-1]
    catch erro
      ""
])

kor.filter('strftime', [ ->
  return (input, format) ->
    try
      if !(input instanceof Date)
        input = new Date(input)
        
      result = new FormattedDate(input)
      result.strftime format
    catch error
      ""
])

kor.filter('human_bool', [ ->
  return (input) ->
    if input then 'ja' else 'nein'
])

kor.filter('human_size', [ ->
  return (input) ->
    if input < 1024
      return "#{input} B"
    if input < 1024 * 1024
      return "#{Math.round(input / 1024 * 100) / 100} KB"
    if input < 1024 * 1024 * 1024
      return "#{Math.round(input / (1024 * 1024) * 100) / 100} MB"
    if input < 1024 * 1024 * 1024 * 1024
      return "#{Math.round(input / (1024 * 1024 * 1024) * 100) / 100} GB"
])

kor.filter('image_size', [ ->
  return (input, size) ->
    if input then input.replace(/preview/, size) else ""
])

kor.filter 'human_date', ["korTranslate", (kt) ->
  (input) -> kt.localize input
]

kor.filter 'trust_as_url', ["$sce", (sce) ->
  (input) -> if input then sce.trustAsUrl(input) else ""
]

kor.filter 'human_user', [->
  (input) ->
    try
      input.full_name || input.name
    catch error
      ""
]

kor.filter 'entity_display_name', [->
  (input) ->
    if input
      if input.name
        return if input.distinct_name
          "#{input.name} (#{input.distinct_name}"
        else
          input.name
    
    return ""
]

kor.filter 'entity_kind_name', [
  "kinds_service",
  (ks) ->
    kinds = {}
    ks.index().success (data) -> kinds[kind.id] = kind for kind in data
    result = (input) -> 
      try
        kinds[input.kind_id].name
      catch e
        ""
    result.$stateful = true
    result
]