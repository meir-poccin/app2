import React from 'react';
import ReactDOM from 'react-dom';
import data from './data'
import RootBeer from './RootBeer.bmp'
export default function Card(props){
     return(
      <>
      
      <div className='card'>
      
      <img className='image' src={RootBeer}/>
      <div className='text'>
      <div className='top'>
     <p className='location'> {props.location}</p>    
      <a className='googl' href={props.googleMapsUrl} >
                                     View on Google Maps</a>
        </div>                             
       <p className='title'>{props.title}</p> 
       <div className='date' >                             
      <p className='startDate'>{props.startDate}</p>
      -
      <p className='endDate'>{props.endDate}</p>
      </div>
      <p className='desc'>{props.description}</p>

      </div>
      
      
      </div>

      
     </>
     	)
}
