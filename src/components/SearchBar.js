import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';

export default class SearchBar extends Component {
  constructor(){
    super()
    this.state = {
      searchTerm: ""
    }
  }

  onInputChange(term){
    this.setState({
      searchTerm: term
    },() => this.props.search(this.state.searchTerm))
  }

  render(){
    return(
      <div>
        <Row>
          <Input s={12} label="Search for a Drink" value={this.state.searchTerm} onChange={event => this.onInputChange(event.target.value)}/>
        </Row>
      </div>
    )
  }
}
