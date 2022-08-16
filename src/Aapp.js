import React, {Component} from 'react';
import logo192  from './components/logo192.png'

import CardList from './CardList';

import Scroll from './Scroll';

import Card from './Card';
import Box from './Box';
class Aapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      box:''
    }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response =>  response.json())
      .then(user => this.setState({users: user}));
      
    }

    change = (e) => {
      this.setState({box:e.target.value})
    }
  
  render() {
    /*
    const sorting = this.state.users.filter(item =>{
      return item.title.toLowerCase().includes
      (this.state.box.toLowerCase());
    })
    
    */
    const sorting = this.state.users.filter(item =>{
      return item.id.toString().includes
      (this.state.box);
    })
  	
    return (
      <div>
      <h1 className='tc grow ' style={{color:'red'}}>TODOS</h1>
       <Box search={this.change} /> 
     <Scroll>
      <CardList user={sorting}
                    i={this.state.box}/>
      </Scroll>
        <p className='tc'>{this.state.box} <img src={logo192} /></p>
      </div>
    );
  }
}
export default Aapp;





