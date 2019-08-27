import React from 'react';
import ImageCard from '../../Components/ImageCard/ImageCard';
import './ImageCards.css';

export default function (props) {
    return (
        <section id="images">
            <h1 className="h1">Showing Results for: {props.lastQuery}</h1>
            {
                props.images.map((image, index) => {
                    return (
                        <ImageCard
                            key={index}
                            image={image}
                        />
                    )

                })
            }
        </section>

    )
}