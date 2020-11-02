import { Button, Container } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { genUsers } from "../../actions/users";

export default function Thunk() {
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => {
    return users;
  });
  const handleButtonClick = () => {
    dispatch(genUsers());
  };
  return (
    <Container className="main">
      <div>
        <Button onClick={handleButtonClick}>Test Thunk Fetch</Button>
      </div>
      <>
        {users.length > 0 &&
          users.map((user, idx) => <li key={idx}>{user.name}</li>)}
      </>
    </Container>
  );
}
