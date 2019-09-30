import React, { Component } from 'react';
import SearchBar from '../components/search-bar';
import CardList from '../container/card-list';
import {readAllCard, filterCard } from "../actions/index";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {
   constructor(props) {
      super(props)
      this.props.readAllCard();
   }
   
  render() {
    return (
      <div className="container">
        <header>
          <SearchBar callback={this.onClickSerch.bind(this)}/>
        </header>
        <section >
          <CardList cards={ this.props.cards }/>
        </section>    
      </div>
    );
  }

  onClickSerch(terms) {
    this.props.filterCard(terms,this.props.cards)
  }
}


function mapStateToProps(state){
  return {
      cards : state.cards
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({readAllCard,filterCard},dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
