import React, { Component } from 'react';
import Card from '../components/card';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="CardList">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        )
    }
}

export default CardList;