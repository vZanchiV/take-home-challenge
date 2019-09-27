import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchText:"",
            placeHolder:"Que recherchez-vous ?",
         };
    }
    render() {
        return (
            <div className="SearchBar">
                <button className="SearchBar__btnSearch" onClick={this.handleOnClick.bind(this)}></button>
                <input tye="text"  className="SearchBar__input" onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
            </div> 
        );
    }
    handleOnClick(e) {
        
     }    
     handleChange(e) {
         this.setState({searchText:e.target.value});
         
     }
}

export default SearchBar;