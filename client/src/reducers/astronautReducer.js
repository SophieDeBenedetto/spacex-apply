import defaultState from '../store/initialStates/astronaut.js'
export default function astronautReducer(state=defaultState, action) {
  switch(action.type) {
    case "UPDATE_ASTRONAUT_ATTRIBUTES":
      if (action.errors) {
        return {
          ...state,
          ...action.newAttributes,
          errors: {
            ...state.errors,
            ...action.errors
          }
        }
      }
      return {...state, ...action.newAttributes}
    case "SAVE_ASTRONAUT_SUCCESS":
      return { ...state, ...action.astronaut};
    case "SAVE_ASTRONAUT_FAILURE":
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors
        }
      }
    case "ASTRONAUT_VALIDATION_ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors
        }
      }
    case "CLEAR_ASTRONAUT":
      return defaultState;
    default:
     return state;
  }
}
