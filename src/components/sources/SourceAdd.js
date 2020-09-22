import { SentimentSatisfied } from "@material-ui/icons";
import React, {useState}from "react";
import {useDispatch} from "react-redux";
import {addSource} from "../../actions";

export default function SourceAdd() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited", e.target.value);
    dispatch(addSource(title));
    setTitle("");
  }
  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleChange}/>
    </form>
  </div>
}