import {v4 as uuid} from "uuid";
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteSource = id => ({
  type: "DELETE_SOURCE",
  id
})

export const addSource = title => ({
  type: "ADD_SOURCE",
  id: uuid(),
  title,
})