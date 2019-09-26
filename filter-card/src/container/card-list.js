import React, { Component } from 'react';
import Card from '../components/card';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <section>
                <Card/>
            </section>
        )
    }
}

export default CardList;