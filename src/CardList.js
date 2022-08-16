import React from 'react';
import Card from './Card';

const CardList =({user,i})=>{

     return(

         <div>
           {
            user.map( x  =>  {
              return(
                <Card
                 name={x.id}
               email={x.title} 
                k={i}
                />
                );

            })
            
           }

         </div>
     	);
}
export default CardList;