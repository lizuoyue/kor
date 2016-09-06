wApp.utils = {
  shorten: (str, n = 15) ->
    if str && str.length > n
      str.substr(0, n - 1) + '&hellip;'
    else
      str
  in_groups_of: (per_row, array, dummy = null) ->
    result = []
    current = []
    for i in array
      if current.length == per_row
        result.push(current)
        current = []
      current.push(i)
    if current.length > 0
      if dummy
        while current.length < per_row
          current.push(dummy)
      result.push(current)
    result
  to_integer: (value) ->
    if $.isNumeric(value)
      parseInt(value)
    else
      value
  translate: (input, options = {}) ->
    try
      options.count ||= 1
      parts = input.split(".")
      result = wApp.data.translations[wApp.data.session.locale]
      
      for part in parts
        result = result[part]
      
      count = if options.count == 1 then 'one' else 'other'
      result = result[count] || result
      
      for key, value of options.interpolations
        regex = new RegExp("%\{#{key}\}", "g")
        tvalue = wApp.utils.translate(value)
        value = tvalue if tvalue && (tvalue != value)
        result = result.replace regex, value
        
      result
    catch error
      console.log error
      ""
}