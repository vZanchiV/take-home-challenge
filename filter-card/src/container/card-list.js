import React, { Component } from 'react';
import Card from '../components/card';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div class="container">
                <header>
                    header
                </header>
                <section class="CardList">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </section>
                <footer>
                    footer
                </footer>
            </div>
            
            
        )
    }
}

export default CardList;