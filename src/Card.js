import React from 'react';

const Card = ({name,email,k}) =>{
	const mystyle = {
	  width:'300px',
     height:'200px',
     color:'blue'
    };
    

	return(  
    <div className='tc bg-light-green dib br3 pa3
     ma2 grow bw2 shadow-5  ' style={mystyle}  >
        
        
        <p>{k}</p>
    	<h2 >{name}</h2>
    	<p>{email}</p>
    	
    </div>   
  );
}
export default Card;