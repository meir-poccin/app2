import React from 'react';
import ReactDOM from 'react-dom';
import m from './m.png'
import Icon from './Icon.png'

export default function Info (){
     return(
      <>
        <div className='space'></div>
        <div className='image'>
        <img src={m} />
        <h1>John Smith</h1>
        <p className='a'>Frontend Developer</p>
        <p className='b'>johnsmith@gmail.com</p>
        
        <button className='email'>
        <img className='icon' src={Icon}/>
        <a href="meirpotchin@gmail.com">
        
        <p className='text'>EMAIL</p>
        </a>

         </button>
        
        </div>
        </>
     	)
        }

