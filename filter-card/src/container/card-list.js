import React, { Component } from 'react';
import {readAllCard } from "../actions/index";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from '../components/card';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.props.readAllCard();
    }

    renderCard(){
        const {cards} = this.props;
        let arrayCards;
 
        if(cards.length > 0) {
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

function mapStateToProps(state){
    return {
        cards : state.cards
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({readAllCard},dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(CardList)