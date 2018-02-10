export default function astronautValid(errors) {
  return Object.values(errors).some(el => el)
}
