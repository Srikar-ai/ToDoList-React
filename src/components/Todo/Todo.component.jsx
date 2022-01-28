import React from "react";
import { TodoList } from "../Todolist/Todolist.component";
import './Todo.styles.css';

export const Todo=({text,todos,setTodos,todo})=>{
    const DeleteHandler=(e)=>{
        {setTodos(todos.filter(ele=>ele.id!==todo.id))}

    }
    const CheckHandler=(e)=>{
        setTodos(todos.map((ele)=>{
            if(ele.id===todo.id){
                return {
                    ...ele, completed:!ele.completed
                }
            }
            return ele
        }))

    }
    return (
        <div className="todo">
            <li className={`todo-item${todo.completed ? "completed" :""}`}>{text}</li>
            <button onClick={CheckHandler}  className="completed-btn">CHECK</button>
            <button onClick={DeleteHandler} className="trash-btn">REMOVE</button>
        </div>
    )
}