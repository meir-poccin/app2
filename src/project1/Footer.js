import React from 'react';
import ReactDOM from 'react-dom';
import Twitter from './Twitter.png'
import Instagram from './Instagram.png'
import GitHub from './GitHub.png'
import Linkedin from './Linkedin.png'
import Facebook from './Facebook.png'

export default function Info (){
     return(
        <div className='image2'>
        <a href="meirpotchin@gmail.com">
        <img className='ic' src={Twitter} /></a>
        <a href="meirpotchin@gmail.com">
        <img className='ic' src={Facebook} /></a>
        <a href="meirpotchin@gmail.com">
        <img className='ic' src={Instagram} /></a>
        <a href="meirpotchin@gmail.com">
        <img className='ic' src={Linkedin} /></a>
        <a href="meirpotchin@gmail.com">
        <img className='ic' src={GitHub} /></a>
       
        </div>
     	)
        }

