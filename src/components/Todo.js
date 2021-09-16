import { useDispatch } from "react-redux";
import {deleteHandler,doneHandler  } from "../redux/Action";
import EditTodo from "./EditTodo";

export default function Todo({ task }) {
    const dispatch = useDispatch()


const doneTodo=()=>{
dispatch(doneHandler(task.id))
}

  return (
    <div className="todo-container">
    <h5 className={task.isDone&& 'done' }  > {task.text} </h5>
      <div className='btns' >
        <button  onClick={doneTodo}   >Done</button>
        <button onClick={()=> dispatch(deleteHandler(task.id))  }  >DLT</button>
        <EditTodo task={task} />
      </div>
    </div>
  );
}