import React from 'react';
import Tag from './tag';


const Card  = ({card}) => { 
    
        return (

            <article className="Card">
                <h2 className="Card__title">{card.name}</h2>
                <div className="Card__content">
                    {card.tags.map((tagName, i) => {
                        return <Tag key={i} tag={tagName}/>
                    })}
                </div>              
            </article>
           
        )

}

export default Card;