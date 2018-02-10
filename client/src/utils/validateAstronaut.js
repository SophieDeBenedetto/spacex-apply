export default function validateAstronaut(astronaut) {
  let errors          = {...astronaut.errors};
  Object.keys(errors).forEach(attrName => {
    errors[attrName] = validationFunctions[attrName](astronaut)
  })
  return errors;
}

const validationFunctions = {
  name: nameValid
}

function nameValid(astronaut){
  return !(astronaut.name && astronaut.name.length > 0);
}
