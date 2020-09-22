import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSource } from "../../actions";

export default function SourceList() {
  const sourceList = useSelector((state) => state.sources);
  const dispatch = useDispatch();
  console.log(sourceList);
  return (
    <div>
      {sourceList.length ? (
        <List>
          {sourceList.map((o, k) => (
            <ListItem key={k} button>
              <ListItemText>
                {k + 1}.
                {o.title}
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton onClick={() => dispatch(deleteSource(o.id))}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      ) : (
        <div>Empty List</div>
      )}
    </div>
  );
}
