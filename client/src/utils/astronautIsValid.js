export default function astronautIsValid(errors) {
  return !Object.values(errors).some(err => err)
}
