import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component'

import './App.css';
import { SearchBox } from './components/searchBox/search-box.component';




class App extends Component{

  //Creating a State
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  //Adding a handleChange method to the App to make it more generic
  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  //Actually Render the content
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
    <div className="App">
    <h1>Monsters Rolodex</h1>
      <SearchBox placeholder = 'Search Monsters' handleChange = {this.handleChange} />
      <CardList monsters = {filteredMonsters} />  
    </div>
    )
  }

}

export default App;
