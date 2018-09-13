import React from 'react';
import Search from './search'; 
import Display from './display'; 

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            inputVal: "Mountain",
            images: [],
            resultFor: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentWillMount() {
        this.handleSearch();
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({
            inputVal: e.target.value
        });
    }
    handleSearch(e) {
        if(this.state.inputVal === "") return;
        let input = this.state.inputVal;
        let endPoint = `https://pixabay.com/api/?key=${this.props.apiKey}&q=`;
        let imageType = "&image_type=photo";
        let query = input.split(" ").join("+");
        let url = endPoint + query + imageType;
        //Url == endPoint + query + imageType
        fetch(url)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    images: data.hits,
                    inputVal: "",
                    resultFor: input
                })
            );
    }

    render() {
        return (
            <div>
                <Search 
                    handleInput = {this.handleInput} 
                    handleSearch = {this.handleSearch}
                    inpputVal = {this.state.inputVal}
                />
                <Display 
                    images = {this.state.images} 
                    resultFor = {this.state.resultFor}
                />
            </div>
        )
    }
}