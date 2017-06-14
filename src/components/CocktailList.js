import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

export default function CocktailList(props){


  let printed = null
  if (props.filteredCocktails.length > 0 ) {
    printed = props.filteredCocktails.map((cocktail) => <li className="collection-item" key={cocktail.id}><Link to={`/cocktails/${cocktail.id}`}>{cocktail.name}</Link></li>)
  } else {
    printed = props.cocktails.map((cocktail) => <li className="collection-item" key={cocktail.id}><Link to={`/cocktails/${cocktail.id}`}>{cocktail.name}</Link></li>)
  }

  return(
    <div>
      <ul className="collection">
      {printed}
      </ul>
    </div>
  )
}
