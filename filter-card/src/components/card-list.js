import React, { Component } from 'react';
import Card from './card';

class CardList extends Component {

    renderCard(){
        const {cards} = this.props;
        let arrayCards;
 
        if(cards && cards.length > 0) {
            arrayCards  = cards
            return  arrayCards.map( (card)=>{
                return  <Card key={card._id} card={card} />
            })
         
        }
    }
    render() {
        return (
            <div className="CardList">
               {this.renderCard()}
            </div>
        )
    }
}

export default CardList;