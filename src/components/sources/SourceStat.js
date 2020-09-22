import React from "react";
import {useSelector} from "react-redux";

export default function SourceStat() {
  const items = useSelector(state => state.sources);
  return <div>
    Sources: {items.length}
  </div>
}