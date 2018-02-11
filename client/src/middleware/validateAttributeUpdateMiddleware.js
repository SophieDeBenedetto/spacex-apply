import astronautAttribueIsValid from '../utils/astronautAttributeIsValid'

const ValidateAttributeUpdateMiddleware = ({ dispatch, getState}) => next => action => {
  if (action.type !== "UPDATE_ASTRONAUT_ATTRIBUTES") {
    return next(action)
  }
  const { newAttributes, shouldValidate } = action;
  const { astronaut }     = getState();
  let updatedAstronaut    = {...astronaut, ...newAttributes}
  const attrName          = action.attrName || Object.keys(newAttributes)[0]
  if (shouldValidate) {
    action.errors = {
      [attrName]: !astronautAttribueIsValid(updatedAstronaut, attrName)
    }
    next(action)
  } else {
    next(action)
  }
};

export default ValidateAttributeUpdateMiddleware;
