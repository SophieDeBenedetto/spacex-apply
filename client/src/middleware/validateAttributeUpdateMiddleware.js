import { astronautValidationError }   from '../actions/astronautActions';
import { validateAstronautAttribute } from '../utils/validateAstronaut';
import { validateOnChange }           from '../utils/validationFunctions';

const ValidateAttributeUpdateMiddleware = ({ dispatch, getState}) => next => action => {
  if (action.type !== "UPDATE_ASTRONAUT_ATTRIBUTES") {
    return next(action)
  }
  const { newAttributes } = action;
  const { astronaut }     = getState();
  let updatedAstronaut    = {...astronaut, ...newAttributes}
  const attrName          = Object.keys(newAttributes)[0]
  if (validateOnChange.includes(attrName)) {
    const errors  = validateAstronautAttribute(updatedAstronaut, attrName)
    action.errors = errors
    next(action)
  } else {
    next(action)
  }
};

export default ValidateAttributeUpdateMiddleware;
