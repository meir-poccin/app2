import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Hero from './Hero'
import Card from './Card'
//import Footer from './Footer'
import image12 from './image 12.png'

export default function App(){
     return(
      <>
     	<Nav/>
      <Hero/>
      <Card
       img={image12}
       rating='5.0'
       revCount={`(${6})`}
       country='USA'
       title='Life Lessons with Katie Zaferes'
       price={136}
      />
      </>
     	)
}
