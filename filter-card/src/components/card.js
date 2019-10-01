import React from 'react';
import Tag from './tag';


const Card  = ({card}) => { 
        return (
            <article className="Card">
                <h2 className="Card__title">{card.name}</h2>
                <ul className="Card__content">
                    {card.tags.map((tagName, i) => {
                        return <li className="Card__content__elem" key={i}><Tag  tag={tagName}/></li>
                    })}
                </ul>              
            </article>          
        )
}

export default Card;