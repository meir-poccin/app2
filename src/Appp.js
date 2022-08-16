import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
//import uuidv4 from 'uuidv4';


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function Appp() {
  //const [todos, setTodos] = useState([{id:1, name:'Todo', complete:false}])
  
const [todos, setTodos] = useState([]);
const todoref = useRef();

useEffect (()=>{
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) )
   if(storedTodos) setTodos(storedTodos)
},[])

useEffect(() =>{
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos])

function toggle(id){
  const  newTodos = [...todos]
  const todo = newTodos.find(todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos )
}
  
  function addTo(e){
    const name = todoref.current.value
    if (name === '') return 
    setTodos(prevTodos => {
      return [...prevTodos,{id:1, name:name, complete:false}]
    })
    todoref.current.value = null
  }

  return (
    <>
    <TodoList todo = {todos} togg = {toggle}/>
    <input ref={todoref}type='text'/>
    <button onClick={addTo}>add </button>
    <button>clear </button>
    <div>0 left</div>
    </>
    ) 
}

export default Appp;
