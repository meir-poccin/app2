import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import data from './data'
import Cards from './Cards'
import Nav from './Nav'

export default function Aap(){
     return(
      <>
      <div className='app'>
      <Nav/>
      <Cards/>
      </div>
     </>
     	)
}
