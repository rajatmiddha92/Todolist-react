import logo from './logo.svg';
import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';


function App() {

  const [inputList,setInputList] = useState()
  const [Items,setItems] = useState([]);

  const itemEvents = (e) =>{
     setInputList(e.target.value)
  }
  const listOfItems = () =>{
      setItems ((preValue)=>{
        return [...preValue,inputList]
      })
      setInputList('')
  }
  const deleteItems = (id) =>{
    setItems((preValue)=>{
      return preValue.filter((arrElem, index)=>{
        return index  !== id;
      })
    })
  }
 

  return (
    <>
    <div className='main_div'>
    <div className='center-div'>
    <br/>
    <h1 className=''>ToDo List</h1>
    <br/>
    <input type='text' placeholder='Add a Items' value={inputList} onChange={itemEvents}/>
    <button onClick={listOfItems}>+</button>
    <ol>
    {Items.map((itemvalue, index)=>{
      return <ToDoList key={index} id={index} text={itemvalue} onSelect={deleteItems}/>
    })}
    </ol>
    </div>
    </div>
    </>
  );
}

export default App;
