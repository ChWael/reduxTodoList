import { useDispatch } from "react-redux";
import { Filtering } from "../redux/Action";


const Filters = () =>{
    const dispatch = useDispatch()
    const statusHandler = (e) =>{
        dispatch (Filtering(e.target.value))
    }

    return(
        <div >
            <select className='filter-btn' onChange={statusHandler}  >
                <option value='All'>All</option>
                <option value='Completed'>Completed</option>
                <option value='Uncompleted'>Uncompleted</option>
            </select>
        </div>
    )
}

export default Filters;