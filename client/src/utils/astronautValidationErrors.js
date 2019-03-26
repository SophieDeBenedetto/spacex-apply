import { attributeValidators } from './attributeValidators';

export default function astronautValidationErrors(astronaut) {
  let collectedErrors
  Object.keys(attributeValidators).reduce((errors, validator) => {
    errors[validator] = !attributeValidators[validator](astronaut)
    collectedErrors = errors
    return errors
  }, {})
  return collectedErrors;
}