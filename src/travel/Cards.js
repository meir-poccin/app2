import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import data from './data'

const sss= data.map(item=>{
     return(
       <Card
        title={item.title}
     location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}
              />
          )
})
export default function Cards(){
     return(
      <>
      <div className='cards'>
      {sss}
      </div>
     </>
     	)
}
