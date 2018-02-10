export function saveAstronaut(astronaut) {
  return {
    type: "API",
    astronaut
  };
}

export function updateAstronautAttributes(newAttributes) {
  return {
    type: "UPDATE_ASTRONAUT_ATTRIBUTES",
    newAttributes
  }
}

export function saveAstronautSuccess(astronaut) {
  return {
    type: "SAVE_ASTRONAUT_SUCCESS",
    astronaut
  }
}

export function saveAstronautFailure(astronaut)  {
  return {
    type: "SAVE_ASTRONAUT_FAILURE",
    astronaut
  }
}

export function astronautValidationError(errors) {
  return {
    type: "ASTRONAUT_VALIDATION_ERROR",
    errors
  }
}
