import { attributeValidators } from './attributeValidators';

export default function astronautValidationErrors(astronaut) {
  Object.keys(attributeValidators).reduce((errors, validator) => {
    errors[validator] = !attributeValidators[validator](astronaut)
  }, {})
  return errors;
}



