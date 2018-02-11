import { attributeValidators } from './attributeValidators';

export default function astronautAttributeIsValid(astronaut, attribute) {
  return attributeValidators[attribute](astronaut)
}
