import React from 'react';
import Todo from './Todo';


function TodoList({todo, toggle}) {
  return (
    
      todo.map(item => {
       return <Todo  key={item.id}togg={toggle}ite={item}/>
      })
    
    ) 
}

export default TodoList;
