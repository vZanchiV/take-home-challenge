import React, { Component } from 'react';
import SearchBar from '../components/search-bar';
import CardList from '../container/card-list';

class App extends Component {
   constructor(props) {
      super(props)
     
   }

  render() {
    return (
      <div className="container">
        <header>
          <SearchBar/>
        </header>
        <section >
          <CardList/>
        </section>    
      </div>
    );
  }
}

export default App;
