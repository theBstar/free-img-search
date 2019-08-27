import React from 'react';
// import CSSTransition from 'react-transition-group/CSSTransition';
import SearchBar from './containers/SearchBar/SearchBar';
import ImageCards from './containers/ImageCards/ImageCards';
import Loader from './Components/Loader/Loader';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            images: [],
            lastQuery: '',
            isLoading: false,
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.handleSearch('Table');
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
        this.setState({
            isLoading: true
        });
        let query = searchKey || this.state.query.trim();
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
                    isLoading: false,
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
                <Loader isLoading={this.state.isLoading}/>
                {
                    !(this.state.isLoading) ? (
                        <ImageCards
                            images={this.state.images}
                            lastQuery={this.state.lastQuery}
                        />
                    ) : null
                }

            </div>
        )
    }
}


// render() {
//     return (
//         <div>
//             <SearchBar
//                 handleInput={this.handleInput}
//                 handleSubmit={this.handleSubmit}
//                 query={this.state.query}
//             />
//             {
//                 this.state.isLoading ? <Loader /> : (

//                     <ImageCards
//                         images={this.state.images}
//                         lastQuery={this.state.lastQuery}
//                     />
//                 )
//             }

//         </div>
//     )
// }