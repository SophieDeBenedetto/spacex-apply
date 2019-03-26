import { attributeValidators } from './attributeValidators';

export default function astronautValidationErrors(astronaut) {
  const validators = Object.keys(attributeValidators);
  const errors = {};

  for (const validator of validators) {
    errors[validator] = !attributeValidators[validator](astronaut);
  }

  return errors;
}