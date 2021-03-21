import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = props => {
  // children property will always exist in props
  // it's the content between component's opening & closing tag in parent component
  return (
    <div className='card-list'>
      {
        // return an array of HTML block
        // React will auto display those elements
        props.monsters.map(monster => (
          <Card key={ monster.id } monster={ monster } />
        ))
      }
    </div>
  )
};