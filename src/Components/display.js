import React from 'react';

export default class Display extends React.Component {

    render() {
        return (
            <section id="images">
                <h1>Showing Results for: {this.props.resultFor}</h1>
                {this.props.images.map((image, index)=>{
                    return (
                        <div key={index} className="image">
                            <a href={image.pageURL} target="_blank">
                                <img 
                                    src={image.webformatURL}
                                    alt={image.tags}
                                />
                            </a>
                        </div>
                    ) 
                })}
            </section>

        )
    }

}