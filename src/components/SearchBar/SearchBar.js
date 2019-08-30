import React from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
    return (
        <form id="searchBar" onSubmit={props.handleSubmit}>
            <input
                id="search-input"
                className="input"
                type="search"
                value={props.query}
                onChange={props.handleInput}
                placeholder="Search Free Images"
                area-label="Enter your keywords to search for free images"
                autoFocus
                required
            />
            <button className="button"> Search </button>
        </form>
    );
}