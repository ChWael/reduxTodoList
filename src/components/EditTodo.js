import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editHandler } from "../redux/Action";
import Modal from "react-modal";

export default function EditTodo({ task }) {
Modal.setAppElement("#root");
const customStyles = {
    content: {
    backgroundColor: "rgba(253, 251, 251, 0.712)",
    border: "solid 1px gray",
    borderRadius: "10px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    },
};
const [show, setshow] = useState(false);
const toggle = () => {
    setshow(!show);
};
const [input, setInput] = useState(task.text);

const dispatch = useDispatch();
const submissionHandler = (e) => {
    e.preventDefault();
    dispatch(editHandler(task.id, input));
    toggle();
};

return (
    <div>
    <button onClick={toggle} className="toggle">
        {" "}
        edit
    </button>
    <Modal isOpen={show} style={customStyles}>
        <h1 className="title"> Are You Sure? </h1>
        <form>
        <input
            className='input'
            id="edit"
            type="text"
            value={input}
            autoFocus
            onChange={(e) => setInput(e.target.value)}
        />
        <div className="btns-edit">
            <button onClick={submissionHandler}>Submit</button>
            <button onClick={toggle}>CNCL</button>
        </div>
        </form>
    </Modal>
    </div>
);
}