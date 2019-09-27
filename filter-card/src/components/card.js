import React from 'react';
import Tag from './tag';
const Card  = (props) => {   
        return (
            <article className="Card">
                <h2 className="Card__title">titre card</h2>
                <div className="Card__content">
                    <Tag/>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                </div>
               
            </article>
           
        )

}

export default Card;