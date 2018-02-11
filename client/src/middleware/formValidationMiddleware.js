import { astronautValidationError } from '../actions/astronautActions';
import astronautValidationErrors    from '../utils/astronautValidationErrors';
import astronautIsValid             from '../utils/astronautIsValid';

const formValidationMiddleware = ({ dispatch, getState}) => next => action => {
  if (action.type !== "API") {
    return next(action)
  }
  const { astronaut } = action;
  let errors          = astronautValidationErrors(astronaut)
  if (!astronautIsValid(errors)) {
    dispatch(astronautValidationError(errors))
  } else {
    next(action)
  }
};

export default formValidationMiddleware;
