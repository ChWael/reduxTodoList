import { DELETE, DONE, ADD, EDIT, FILTER, FILTERTODO } from "./ActionTypes";


export const deleteHandler=(ID)=>{
    return{
        type:DELETE,
        payload:ID
    }
};


export const doneHandler=(ID)=>{
    return{
        type:DONE,
        payload:ID
    }
};


export const addHandler=(newTodo)=>{
    return{
        type:ADD,
        payload:newTodo
    }
};


export const editHandler=(ID, textInput)=>{
    return{
        type:EDIT,
        payload:{ID, textInput}
    }
}

export const Filtering =(status)=>{
    return {
        type: FILTER,
        payload:{status}

    }
}

export const FilterHandler =()=>{
    return {
        type: FILTERTODO
        
    }
}

