import React, { Component } from 'react';
import CocktailList from '../components/CocktailList'
import CocktailDetails from '../components/CocktailDetails'
import SearchBar from '../components/SearchBar'
import { Link, Switch, Route } from 'react-router-dom'

export default class CocktailsContainer extends Component {

  constructor(){
    super()
    this.state = {
      initialCocktails: [],
      cocktails: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/cocktails')
      .then( res => res.json() )
      .then( data => this.setState({ initialCocktails: data}) )
  }

  search(searchTerm){
    let initCocktails = this.state.initialCocktails
    let filteredDrinks = initCocktails.filter((cocktail) => cocktail.name.toLowerCase().includes(searchTerm.toLowerCase()))
      this.setState({
        cocktails: filteredDrinks
      })
  }

  render(){
    return(
      <div className="container">
        < SearchBar search={this.search.bind(this)}/>
        <div className="row">
          <div className="col s3">
          < CocktailList cocktails={this.state.initialCocktails} filteredCocktails={this.state.cocktails}/>
          </div>
          <div className="col s9">
            <Route path='/cocktails/:id' render={(routerProps) => {
              const id = routerProps.match.params.id
              const cocktail = this.state.initialCocktails.find(c => c.id === parseInt(id))
              return <CocktailDetails cocktail={cocktail} />
            }}
            />
          </div>
        </div>
      </div>
    )
  }

}
