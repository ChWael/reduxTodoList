import React, { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { FilterHandler } from "../redux/Action";
import Todo from "./Todo";




export default function TodoList() {
  const dispatch = useDispatch()
  const todo = useSelector(state => state.todo)
  const filterTodo = useSelector(state =>state.filterTodo )
  const filter = useSelector(state => state.filter )

useEffect(() =>{ dispatch(FilterHandler()) }, [filter.todo] )

  return (
    <div className="todoList-container">
      {filterTodo.map((el) => (<Todo el={el} key={el.id}/>))}
      
    </div>
  );
}