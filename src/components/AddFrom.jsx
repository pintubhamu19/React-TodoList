import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./Todo.css"




export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    function updateTask(event) {
        setTask(event.target.value)
    }

    function Submithandler(event) {
        event.preventDefault();
        if (!task) return
        dispatch(addTodo(task))
        setTask("")
    }
    return (
        <>
            <form className="flex justify-center" onSubmit={Submithandler}>
                <input className="w-full px-4 py-1 bg-white/15 outline-none text-white rounded-l-lg " value={task} placeholder="Add Your Task..." type="text" onChange={updateTask} />
                <button className="add btn">Add</button>
            </form>
        </>
    )
}