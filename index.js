var recipes = {eggs: 3, butter:'1/2 cup'}

function updateObjectWithKeyAndValue (obj, key, value){
  var updatedObject = Object.assign({}, obj, {[key]: value})
  return obj
}

