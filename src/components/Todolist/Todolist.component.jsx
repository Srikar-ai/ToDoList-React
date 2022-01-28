import React from 'react'
import {Todo} from '../Todo/Todo.component';
import './Todolist.styles.css';

export const TodoList=({todos,setTodos,filterTodo})=>{
    return (
    <div className='todolist-container'>
        <ul className='todo-list'>
            {filterTodo.map(todo=>(
                <Todo key={todo.id} text={todo.text} setTodos={setTodos} todos={todos} todo={todo}/>
            ))}
        
        </ul> 
    </div>
    
    )}