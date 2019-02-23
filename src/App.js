import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/layout/Header';
import List from './components/List';
import './App.css';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      nameList: [],
      search: '',
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.search = this.search.bind(this);
    this.searchInput = this.searchInput.bind(this);
  }

  componentDidMount()
  {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => this.setState({nameList: res.data}))
  }

  onChangeHandler = e => this.setState({[e.target.name]: e.target.value});

  search = pattern => this.state.nameList.filter(el => el.name.match(pattern))

  searchInput = () =>
  {
    let data = this.state.search;
    let pattern = new RegExp(data);
    this.search(pattern);
  }
  
  render() {
    return (
      <div>
        <Header />
        <input type="text" onChange={this.onChangeHandler} name="search" 
        placeholder="Search something..." className="input" onKeyUp={this.searchInput} />
        <List list={this.state.nameList} search={this.state.search} />
      </div>
    );
  }
}

export default App;
