import React from "react";
// Import the CSS file as a module.
import styles from "./CharacterList.module.css";
import Character from "../Character/Character";

// Constant To store API url.
const API_URL = "https://rickandmortyapi.com/api/character/";

class CharacterList extends React.Component {
    // Initialize the State in Class Component.
    state = {
        characters: []
    };

    // Use ASYNC/AWAIT inside lifecycle method.
    async componentDidMount() {
        try {
            const response = await fetch(API_URL).then(resp => resp.json());
            // Add the current characters to the chars array.
            let chars = [...this.state.characters];
            // Add the results from the API response.
            chars.push(...response.results);

            // ALWAYS use this.setState() in a Class Method.
            this.setState({
                characters: chars
            });
        } catch (e) {
            console.error(e);
        }
    }

    // Required render() method in Class Component.
    render() {
        // Create an array of JSX to render
        const characters = this.state.characters.map(character => {
            // This should render Character components. - Remember the key.
            return Character(character);
        });

        // Render MUST return valid JSX.

        return (
            <div>
                <h1>Rick &amp; Morty</h1>
                <div className={styles.CharacterList}>{characters}</div>
            </div>
        );
    }
}

export default CharacterList;
