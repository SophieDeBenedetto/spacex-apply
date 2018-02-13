export const attributeValidators = {
  name: nameValid,
  email: emailValid,
  terraform_planets: terraformPlanetValid
}

function nameValid(astronaut){
  return astronaut.name && astronaut.name.length > 0;
}

function emailValid(astronaut) {
  return astronaut.email && astronaut.email.split("@")[1] === "space.ex"
}

function terraformPlanetValid(astronaut) {
  const { terraform_experience, terraform_planets } = astronaut;
  if (terraform_experience) {
    return terraform_planets &&
      terraform_planets.length > 0 &&
      !terraform_planets.toLocaleLowerCase().includes("mars");
  } else {
    return true
  }
}
