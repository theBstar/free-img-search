import React from 'react';
import SearchBar from './containers/SearchBar/SearchBar';
import ImageCards from './containers/ImageCards/ImageCards';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            images: [],
            lastQuery: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.handleSearch('Mountain');
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({
            query: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.query === "" ||
            (this.state.lastQuery && this.state.query === this.state.lastQuery)) {
            return;
        }
        this.handleSearch();
    }
    handleSearch(searchKey = '') {
        let query = searchKey || this.state.query;
        let endPoint = `https://pixabay.com/api/?key=${this.props.apiKey}&q=`;
        let imageType = "&image_type=photo";
        let splitedQery = query.split(" ").join("+");
        let url = endPoint + splitedQery + imageType;
        fetch(url)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    images: data.hits,
                    query: "",
                    lastQuery: query,
                })
            );
    }

    render() {
        return (
            <div>
                <SearchBar
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                    query={this.state.query}
                />
                <ImageCards
                    images={this.state.images}
                    lastQuery={this.state.lastQuery}
                />
            </div>
        )
    }
}