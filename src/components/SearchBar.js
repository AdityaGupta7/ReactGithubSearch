import React, { Component } from 'react';

export class SearchBar extends Component {
    state = {
        query: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.showRes(this.state.query);
        this.setState({ query: '' });
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : [e.target.value] });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input id="search-bar" type="text" name="query" placeholder="Search for a profile..." value={this.state.query} onChange={this.onChange}></input>
                    <input id="submit-btn" type="submit" value="Find Git profiles!"></input>
                </form>
            </div>
        )
    }
}

export default SearchBar;
