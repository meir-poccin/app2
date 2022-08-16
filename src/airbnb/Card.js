import React from 'react';
import ReactDOM from 'react-dom';
import image12 from './image 12.png'
import Star1 from './Star 1.png'



export default function Card (
     {img,rating,revCount,country,title,price}){
     return(
     	<>
          <div className='card'>
          
            <img className='img12' src={img} />

            <div className='stats'>
            <img className='star1' src={Star1} />
            <span className=''>{rating} </span>
            <span className='gray'>{revCount}</span>
            <span className='gray'>{country}</span>
            </div>
            <p>{title}</p>
            <p><span className='bold'>From ${price}</span> / person</p>
          </div>
          </>
     	)
}
