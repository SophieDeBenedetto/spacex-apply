export const validationFunctions = {
  name: nameValid,
  date_of_birth: dateOfBirthValid,
  terraform_planet: terraformPlanetValid
}

export const validateOnChange = ["name", "date_of_birth", "terraform_planet"]

function nameValid(astronaut){
  return astronaut.name && astronaut.name.length > 0;
}

function dateOfBirthValid(astronaut) {
  if (astronaut.date_of_birth && astronaut.date_of_birth._isAMomentObject) {
    return true
  } else {
    return astronaut.date_of_birth && astronaut.date_of_birth.length > 0
  }
}

function terraformPlanetValid(astronaut) {
  if (astronaut.terraform_experience) {
    return astronaut.terraform_planet && astronaut.terraform_planet.length > 0;
  } else {
    return true
  }
}
