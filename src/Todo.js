import React from 'react';



function Todo({ite, togg}) {
  function handleClick(){
    togg(ite.id)
  }
  return (
    <div>
     <label>
     <input type='checkbox' checked={ite.complete}
     onChange={handleClick}/>
      {ite.name}
      </label>
    </div>
    ) 
}

export default Todo;
