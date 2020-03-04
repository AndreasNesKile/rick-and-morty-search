import React from "react";
// Import the CSS file as a module.
import styles from "./CharacterList.module.css";
import Character from "../Character/Character";
import SearchBar from "../SearchBar/SearchBar";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
// Constant To store API url.
const API_URL = "https://rickandmortyapi.com/api/character/";

class CharacterList extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.loadMoreCharacters = this.loadMoreCharacters.bind(this);
    }
    // Initialize the State in Class Component.
    state = {
        characters: [],
        searchText: "",
        characterPage: 1
    };

    onChange(props) {
        this.setState({
            searchText: props
        });
    }

    async loadMoreCharacters() {
        try {
            axios
                .get(`${API_URL}?page=${this.state.characterPage}`)
                .then(resp => {
                    this.setState({
                        characters: [
                            ...this.state.characters,
                            ...resp.data.results
                        ],
                        characterPage: this.state.characterPage + 1
                    });
                });
        } catch (e) {
            console.error(e);
        }
    }

    // Use ASYNC/AWAIT inside lifecycle method.
    async componentDidMount() {
        try {
            axios
                .get(`${API_URL}?page=${this.state.characterPage}`)
                .then(resp => {
                    this.setState({
                        characters: [
                            ...this.state.characters,
                            ...resp.data.results
                        ],
                        characterPage: this.state.characterPage + 1
                    });
                });
        } catch (e) {
            console.error(e);
        }
    }

    // Required render() method in Class Component.
    render() {
        // Create an array of JSX to render
        const characters = this.state.characters
            .filter(character =>
                character.name
                    .toLowerCase()
                    .includes(this.state.searchText.toLowerCase())
            )
            .map(character => {
                // This should render Character components. - Remember the key.
                return Character(character);
            });

        // Render MUST return valid JSX.

        return (
            <div>
                <div className={styles.SearchBar}>
                    <SearchBar
                        onChange={this.onChange.bind(this.state.characters)}
                    />
                </div>
                <InfiniteScroll
                    pageStart={1}
                    initialLoad={false}
                    loadMore={this.loadMoreCharacters}
                    loader={
                        <div className="loader" key={0}>
                            Loading ...
                        </div>
                    }
                    hasMore={true || false}
                >
                    <div className={styles.CharacterList}>{characters}</div>
                </InfiniteScroll>
            </div>
        );
    }
}

export default CharacterList;
