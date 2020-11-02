export default function users(state = [], { type, payload }) {
  switch (type) {
    case "USERS_GET":
      console.log("users USERS_GET", payload);
      return payload;
    case "USERS_BLOCK":
      return payload;
    default:
      return state || [];
  }
}
