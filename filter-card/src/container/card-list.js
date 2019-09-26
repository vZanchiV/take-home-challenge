import React, { Component } from 'react';
import Card from '../components/card';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <header>
                    header
                </header>
                <section>
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