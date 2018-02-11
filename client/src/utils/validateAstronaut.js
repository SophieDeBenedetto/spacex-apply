import { validationFunctions } from './validationFunctions';

export function validateAstronaut(astronaut) {
  let errors          = {...astronaut.errors};
  Object.keys(errors).forEach(attrName => {
    populateErrors(astronaut, attrName, errors)
  })
  return errors;
}

export function validateAstronautAttribute(astronaut, attribute) {
  let errors = {...astronaut.errors};
  populateErrors(astronaut, attribute, errors)
  return errors;
}

export function populateErrors(astronaut, attribute, errors) {
  errors[attribute] = !validationFunctions[attribute](astronaut)
}

export function astronautValid(errors) {
  return Object.values(errors).some(el => el)
}

