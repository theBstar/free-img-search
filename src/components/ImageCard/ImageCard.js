import React from 'react';
import './ImageCard.css';

export default function ImageCard(props) {
  return (
    <div className="image">
      <a href={props.image.pageURL} target="_blank" rel="noreferrer">
        <img
          src={props.image.webformatURL}
          alt={props.image.tags}
        />
      </a>
    </div>
  );
}