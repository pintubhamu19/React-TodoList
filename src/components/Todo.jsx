import { batch, useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { marksAsDone } from "../features/todo/todoSlice";
import "./Todo.css"



export default function Todo() {



    const todos = useSelector((state) => state.todos);

    // console.log(todos)

    const dispatch = useDispatch();

    function deleteHandler(id) {
        dispatch(deleteTodo(id));
    }
    const markHandler = (id) => {
        dispatch(marksAsDone(id));
    }

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <div key={todo.id} className={`border border-black/10 rounded-lg px-2 py-1  mt-4 ${todo.isDone ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"} `}>
                        <li className="flex " >

                            <input
                                type="checkbox"
                                className="cursor-pointer"
                                checked={todo.isDone}
                                onClick={() => { markHandler(todo.id) }}
                            />
                            <input className="pl-4 bg-transparent border-transparent rounded-lg w-full border outline-non" style={{ textDecoration: todo.isDone && "line-through" }} value={todo.task}></input>
                            &nbsp;&nbsp;
                            <button className="flex justify-center items-center bg-[#65a30d] px-2 py-2 w-8 h-8 rounded-lg text-sm border border-black/10 bg-gray-50 hover:bg-gray-100" onClick={() => { deleteHandler(todo.id) }}>❌</button>
                        </li>
                    </div>
                ))}
            </ul >
        </>
    )

}