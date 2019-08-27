import React from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
    return (
        <form id="searchBar" onSubmit={props.handleSubmit}>
            <input
                className="input"
                type="text"
                value={props.query}
                onChange={props.handleInput}
                autoFocus
                placeholder="Search Free Images"
            />
            <button className="button"> Search </button>
        </form>
    );
}