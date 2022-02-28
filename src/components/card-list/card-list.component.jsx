import React from 'react';
//Bringing in the CSS
import './card-list.styles.css';

import {Card} from '../card/card.component';

export const CardList = props => (
    
    <div className='card-list'>
    
    {
        //This uses map (which iterates over each element and runs the function on each object)
        props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
          ))

    }
    
    </div>

)