import "firebase/firestore";
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

export default function posts(state = rows, { type, payload }) {
  switch (type) {
    case "CREATE_POST":
      return [payload, ...state];
    case "DELETE_POST":
      return state.filter((item) => item.id != payload.id);
    case "FETCH_POSTS":
      return [...payload];
    default:
      return state;
  }
}
