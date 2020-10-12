import React from "react";
import { useSelector } from "react-redux";

export default function User() {
  const user = useSelector(({ auth }) => auth);
  console.log("user index", user);
  return <div>{user && user.displayName}</div>;
}
