import { attributeValidators } from './attributeValidators';

export default function astronautAttributeIsValid(astronaut, attribute) {
  if (attributeValidators[attribute]) {
    return attributeValidators[attribute](astronaut);
  } else {
    return true;
  }
}
