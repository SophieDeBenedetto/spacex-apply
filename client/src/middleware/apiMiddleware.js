import {
  saveAstronautSuccess,
  saveAstronautFailure
} from '../actions/astronautActions';

const apiMiddleware = ({ dispatch, getState}) => next => action => {
  if (action.type !== "API") {
    return next(action)
  }
  fetch('/api/astronauts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      astronaut: action.astronaut
    })
  }).then((response) => {
    return response.json();
  }).catch((error) => {
    dispatch(saveAstronautFailure(error));
  }).then((data) => {
    dispatch(saveAstronautSuccess(data));
  });
};

export default apiMiddleware;
