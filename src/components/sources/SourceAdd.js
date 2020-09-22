import { TextField } from "@material-ui/core";
import React, {useState}from "react";
import {useDispatch} from "react-redux";
import {addSource} from "../../actions";

export default function SourceAdd() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSource(title));
    setTitle("");
  }
  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <TextField value={title} onChange={handleChange} label="Add New Source" fullWidth/>
    </form>
  </div>
}