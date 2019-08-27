import React from 'react';
import ImageCard from '../../Components/ImageCard/ImageCard';
import './ImageCards.css';

export default function ImageCards(props) {
    const capitalizedQuery = props.lastQuery.slice(0, 1).toUpperCase() + props.lastQuery.slice(1);
    return (
        <section id="images">
            <h1 className="h1">Showing Results for: {capitalizedQuery}</h1>
            {
                props.images.map((image) => {
                    return (
                        <ImageCard
                            key={image.id}
                            image={image}
                        />
                    )

                })
            }
        </section>

    )
}