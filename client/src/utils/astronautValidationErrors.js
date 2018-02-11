import { attributeValidators } from './attributeValidators';

export default function astronautValidationErrors(astronaut) {
  let errors          = {};
  Object.keys(attributeValidators).forEach(validator => {
    errors[validator] = !attributeValidators[validator](astronaut)
  })
  return errors;
}



