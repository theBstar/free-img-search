import React from 'react';
import './SearchBar.css';

export default function (props) {
    return (
        <form id="searchBar" onSubmit={props.handleSubmit}>
            <input
                className="input"
                type="text"
                value={props.query}
                onChange={props.handleInput}
            />
            <button className="button"> Search </button>
        </form>
    );
}