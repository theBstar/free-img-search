import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <section id="searchBar">
                <input 
                    type="text"
                    value={this.props.inputVal}
                    onChange={this.props.handleInput}
                />
                <button 
                    onClick={this.props.handleSearch}
                >
                    Search
                </button>
        </section>
        );
        
    }
}