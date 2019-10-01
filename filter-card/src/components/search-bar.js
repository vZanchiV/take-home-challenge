import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchText:"",
            placeHolder:"Que recherchez-vous ?",
            intervalBeforRequest:1000,
            lockRequest:false
         };
    }
    render() {
        return (          
            <form role="search" className="SearchBar">
                <div className="SearchBar__btnSearch"></div>
                <input type="text"  className="SearchBar__input" onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
            </form>           
        );
    }
   
     handleChange(e) {
        this.setState({searchText:e.target.value});
        if(!this.state.lockRequest) {
            this.setState({lockRequest: true});
            setTimeout(() => {
                this.search()
            }, this.state.intervalBeforRequest);
        }
    }

    search() {
        this.props.callback(this.state.searchText)
        this.setState({lockRequest:false})
    }
}

export default SearchBar;