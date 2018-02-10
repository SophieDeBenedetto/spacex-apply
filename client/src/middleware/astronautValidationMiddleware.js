import { astronautValidationError } from '../actions/astronautActions';
import validateAstronaut            from '../utils/validateAstronaut';
import astronautValid               from '../utils/astronautValid';

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
