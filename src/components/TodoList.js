import React, { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { FilterHandler } from "../redux/Action";
import Todo from "./Todo";




export default function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  const filterTodo = useSelector(state =>state.filterTodo )
  const filter = useSelector(state => state.filter )

useEffect(() =>{ dispatch (FilterHandler ()) }, [filter,todos] )

  return (
    <div className="todoList-container">
      {filterTodo.map((task) => (<Todo task={task} key={task.id}/>))}
      
    </div>
  );
}
