import React from 'react'
import ReactDOM from 'react-dom'
import group from './group.png'


export default function Main () {

       return(

          <main>

            <h1>Fun facts about React</h1>
            <div className='logo'>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={group} alt=''/>
            </div>
        </main>
       	)


}