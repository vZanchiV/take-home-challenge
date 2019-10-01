import React, { Component } from 'react';
import SearchBar from '../components/search-bar';
import CardList from '../components/card-list';
import {getCards, filterCard } from "../actions/index";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getCards();
  }

  render() {
    return (
      <div className="container">
        <h1 className="hideElem">list des cards</h1>
        <section>
          <SearchBar callback={this.onClickSearch.bind(this)}/>
        </section>
        <section role="main">
          <CardList cards={ this.props.cards }/>
        </section>    
      </div>
    );
  }

  onClickSearch(terms) {
    this.props.filterCard(terms,this.props.cards)
  }
}


function mapStateToProps(state){
  return {
      cards : state.cards
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({getCards,filterCard},dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
