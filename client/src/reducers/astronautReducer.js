import validateAstronaut from '../utils/validateAstronaut';
export default function astronautReducer(state={}, action) {
  switch(action.type) {
    case "UPDATE_ASTRONAUT_ATTRIBUTES":
      const updatedAstronaut = {...state, ...action.newAttributes}
      return {...updatedAstronaut, errors: validateAstronaut(updatedAstronaut)}
    case "SAVE_ASTRONAUT_SUCCESS":
      return { ...state, ...action.astronaut};
    case "SAVE_ASTRONAUT_FAILURE":
      return {...state, errors: action.astronaut.errors}
    case "ASTRONAUT_VALIDATION_ERROR":
      return { ...state, errors: action.errors };
    default:
     return state;
  }
}
