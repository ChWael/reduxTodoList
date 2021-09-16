import { ADD, DELETE, DONE, EDIT, FILTER, FILTERTODO } from "./ActionTypes";

const initialState = {
  todos: [],
  filter:'All',
  filterTodo:[]
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };
    case DONE:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case EDIT:
      return{
        ...state,
        todos:state.todos.map(el => el.id==action.payload.ID? {...el,text:action.payload.textInput}:el )
      }
    case FILTER:
      return{
        ...state, filter:action.payload.status
      }
    case FILTERTODO:
      return{
        ...state,filterTodo:state.filter === "Completed"? state.todos.filter(el=>el.isDone===true):
                            state.filter === "Uncompleted"? state.todos.filter(el=>el.isDone===false):
                            state.filter === "All"? state.todos:
        null}
      
    default:
      return state;
  }
};
