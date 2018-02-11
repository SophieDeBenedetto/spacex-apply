import { validateAstronautAttribute,  } from '../utils/validateAstronaut';
import { validateOnChange } from '../utils/validationFunctions';
export default function astronautReducer(state={}, action) {
  switch(action.type) {
    case "UPDATE_ASTRONAUT_ATTRIBUTES":
      if (action.errors) {
        return {...state, ...action.newAttributes, errors: action.errors}
      }
      return {...state, ...action.newAttributes}
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
