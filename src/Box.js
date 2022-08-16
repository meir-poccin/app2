import React from 'react';

const Box = ({search}) =>{
	

	return(  
    <div className='pa2 tc'  >
        
    	<input className='tc pa3 ba b--green bg-lightest-blue'
         type='search' 
         placeholder='SEARCH'
         onChange={search}/>
    </div>   
  );
}
export default Box;