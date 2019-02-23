import React, { Component } from 'react';
import ListItem from './ListItem';
import '../App.css'

export default class List extends Component 
{
  render()
  {
    return (
      <ul className="list">
        {this.props.list.map(item => 
        {
          if(item.name.match(this.props.search)) return <ListItem key={item.id} name={item.name} />
          return undefined;
        })}
      </ul>
    );
  }
}
