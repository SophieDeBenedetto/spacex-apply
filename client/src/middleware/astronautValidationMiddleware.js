import { astronautValidationError }          from '../actions/astronautActions';
import { validateAstronaut, astronautValid } from '../utils/validateAstronaut';

const astronautValidationMiddleware = ({ dispatch, getState}) => next => action => {
  if (action.type !== "API") {
    return next(action)
  }
  const { astronaut } = action;
  let errors          = validateAstronaut(astronaut)
  if (astronautValid(errors)) {
    dispatch(astronautValidationError(errors))
  } else {
    next(action)
  }

};

export default astronautValidationMiddleware;
