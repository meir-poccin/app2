import React from 'react';
import ReactDOM from 'react-dom';
import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'

export default function App (){
     return(
     	<div className='card'>
       <div className='card2'>
        <Info/>
        <About/>
        <Interests/>
        </div>
        <Footer/>
        </div>
     	)
}
