import React from 'react';
import {Collapsible, CollapsibleItem, Collection, CollectionItem, Card, Col, ProgressBar} from 'react-materialize'

export default function CocktailDetails(props){
  if (!props.cocktail){
    return null
  }
  return(
    <div className="card">
        <div className="card-content" id="header">
          <h4 id="header-text">He can whip you up a</h4>
          <h3>{props.cocktail.name}</h3>
        </div>
        <div className="card-content grey lighten-4">
        <Collapsible popout>
          <CollapsibleItem header='Description' icon='description'>
            {props.cocktail.description}
          </CollapsibleItem>
          <CollapsibleItem header='Instructions' icon='list'>
            {props.cocktail.instructions}
          </CollapsibleItem>
          <CollapsibleItem header='Proportions' icon='invert_colors'>
            <Collection>
              {props.cocktail.proportions.map((proportion) => <CollectionItem><strong>{proportion.ingredient_name}</strong>: {proportion.amount}</CollectionItem>)}
            </Collection>
          </CollapsibleItem>
          </Collapsible>
          <Col s={12}>
            <ProgressBar />
            </Col>
        </div>
      </div>
  )
}
