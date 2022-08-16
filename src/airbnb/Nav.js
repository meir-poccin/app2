import React from 'react';
import ReactDOM from 'react-dom';
import Rectangle from './Rectangle 13.png'
import airbnb1 from './airbnb 1.png'



export default function Nav (){
     return(
     	<>
          <div className='nav'>
            <img className='img1' src={Rectangle} />
            <img className='img2' src={airbnb1} /> 
          </div>
          </>
     	)
}
