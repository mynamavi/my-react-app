import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{

  constructor(){
      super();

      this.state = {
        monsters:[],
        searchField:''

      };
      //this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));


  }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render (){
    
    const { monsters , searchField } = this.state;
    const filteredNames  = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My First React APP</h1>
          <p>
            <SearchBox         
              placeholder='Search Name'
              handleChange = {this.handleChange} 
            />
          </p>
          <CardList monsters={filteredNames}  />
         
          
        </header>
      </div>
    );

  }
}

export default App;
