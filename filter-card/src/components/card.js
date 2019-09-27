import React, { Component } from 'react';
import Tag from './tag';
const Card  = (props) => {   
        return (
            <article class="Card">
                <h2 class="Card__title">titre card</h2>
                <div class="Card__content">
                    <Tag/>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                </div>
               
            </article>
           
        )

}

export default Card;