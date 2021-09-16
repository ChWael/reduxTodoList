import { useDispatch } from "react-redux";
import { addHandler } from "../redux/Action";
import { useState } from "react";
import Filter from "./Filter";
export default function AddTodo() {

    const dispatch = useDispatch()
    const [input, setinput] = useState('')
    const newTodo = () => {
        input &&
        dispatch(
            addHandler({
                id:Math.random(),
                text:input,
                isDone: false
            })
        )
        setinput('')
    }
    
    return (
        <div className='addTodo' >
        <input
        type='text'
        id='myInput'
        placeholder='another one...'
        value={input} 
        onChange={(e)=> setinput(e.target.value)}
        /> 
        <button className='btn-add' onClick={newTodo} >ADD </button>
        <Filter />
        </div>
    )
}