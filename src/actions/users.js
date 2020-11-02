import Axios from "axios";
export function genUsers() {
  return (dispatch) => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((rsp) => {
      console.log("fetchUsers", { type: "USERS_GET", payload: rsp.data });
      dispatch({ type: "USERS_GET", payload: rsp.data });
    });
  };
}
