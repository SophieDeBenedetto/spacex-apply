import astronautAttribueIsValid from '../utils/astronautAttributeIsValid'

const ValidateAttributeUpdateMiddleware = ({ dispatch, getState}) => next => action => {
  if (action.type !== "UPDATE_ASTRONAUT_ATTRIBUTES") {
    return next(action)
  }
  const { newAttributes } = action;
  const { astronaut }     = getState();
  let updatedAstronaut    = {...astronaut, ...newAttributes}
  const attrName          = Object.keys(newAttributes)[0]
  action.errors = {
    [attrName]: !astronautAttribueIsValid(updatedAstronaut, attrName)
  }
  next(action)
};

export default ValidateAttributeUpdateMiddleware;
