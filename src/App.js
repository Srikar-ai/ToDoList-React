import React,{useEffect, useState} from 'react';
import './App.css';
import {Form} from './components/forms/forms.component';
import {TodoList} from './components/Todolist/Todolist.component';


function App() {
  // use effect for the sake of local storage
  useEffect(()=>{
    Show();
  },[])
  // inputText
  const [inputText,setinputText]=useState('');
  // Store the input text in todos
  const [todos,setTodos]=useState([]);
  // drop down state
  const [status,setStatus]=useState('all');
  //filtering the todos based on status
  const [filterTodo,setFilterTodo]=useState([]);
  // used effect
  useEffect(()=>{
    FilterHandler();
    Save();
  },[todos,status])
  // switch case for filtering 
  const FilterHandler=()=>{
    switch(status){
      case 'completed':
        setFilterTodo(todos.filter((todo)=>todo.completed===true))
        break;
      case 'uncompleted':
        setFilterTodo(todos.filter((todo)=>todo.completed===false))
        break;
      default:
        setFilterTodo(todos)
        break; 
    }
  }
  //save the todos to the local storage
  const Save=()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  
  const Show=()=>{
    if (localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]))
    }
    else{
      const a=JSON.parse(localStorage.getItem("todos"))
      setTodos(a);
    }
  }
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <Form setinputText={setinputText} todos={todos} setTodos={setTodos} inputText={inputText} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filterTodo={filterTodo}/>
    </div>
  );
}

export default App;
