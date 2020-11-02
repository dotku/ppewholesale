export default function postfiles(state = [], { type, payload }) {
  switch (type) {
    case "FILES_GET":
      return payload;
    case "FILES_ADD":
      return [...state, payload];
    default:
      return state;
  }
}
