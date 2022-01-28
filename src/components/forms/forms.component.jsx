import React from "react";
import './forms.styles.css';

export const Form=({inputText,setinputText,setTodos,todos,setStatus})=>{
    const InputTextHandler=(e)=>{
        setinputText(e.target.value);
    }
    const SubmitHandler=(e)=>{
      e.preventDefault()
      setTodos([

        ...todos,{text:inputText,completed:false,id:Math.random()*1000}
      ])
      setinputText('');

    }
    const StatusHandler=(e)=>{
      console.log(e.target.value);
      setStatus(e.target.value);
    }

    return (
        <form className="form">
        <input  value={inputText} type='text' placeholder="Type Here" onChange={InputTextHandler}></input>
        <button className="addbutton" type='submit' onClick={SubmitHandler}>ADD</button>
        <select onChange={StatusHandler} className='filter'>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </form>
    )
}
