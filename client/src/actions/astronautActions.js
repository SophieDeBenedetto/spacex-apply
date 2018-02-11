export function saveAstronaut(astronaut) {
  return {
    type: "API",
    astronaut
  };
}

export function updateAstronautAttributes(newAttributes, shouldValidate, attrName) {
  return {
    type: "UPDATE_ASTRONAUT_ATTRIBUTES",
    newAttributes,
    ...shouldValidate,
    ...attrName
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

export function clearAstronaut() {
  return {
    type: "CLEAR_ASTRONAUT"
  }
}
