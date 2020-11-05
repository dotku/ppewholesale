import objReducer from "reduxr-scoped-reducer";
import { store } from "../App";
const rows = [
  {
    message: "thermo gun, i know 4000 available in ny price is 51 rmb",
    type: "sale",
    location: "OTG",
    unit: 4000,
    price: 7.5,
  },
  {
    message: "Looking for 300M 3ply masks",
    type: "buy",
    unit: 300000000,
    price: 1,
  },
  {
    message: "Looking for 30M Cranberry Nitrile Exam Gloves",
    type: "buy",
    unit: 30000000,
    price: 19,
  },
  {
    message: "Looking for 1K Nitrile Exam Gloves",
    type: "buy",
    location: "Production",
    unit: 1000,
    price: 7.5,
  },
  {
    message: "Looking for 100M Cranberry Nitrile Exam Gloves",
    type: "buy",
    status: "closed",
    unit: 100000000,
    price: 21,
  },
];

objReducer([], {
  getAll: (state, payload) => [...payload, ...state],
  add: (state, payload) => [...payload, ...state],
});

export default function posts(state = rows, { type, payload }) {
  console.log("posts reducer", type, payload);
  switch (type) {
    case "CREATE_POST":
      return [payload, ...state];
    case "DELETE_POST":
      return state.filter((item) => item.id != payload.id);
    case "posts/getAll":
      console.log("POSTS_GET", payload);
      return payload;
    case "FETCH_POSTS":
      return [...payload];
    default:
      console.log("default posts", type, payload);
      // return store.getState().posts || state;
      return state;
  }
}
