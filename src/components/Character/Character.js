// Write a function component
// Simply display a character in the form of a card: https://www.w3schools.com/howto/howto_css_cards.asp
// Style the card however you like.
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Character.module.css";

function Character(character) {
    return (
        <Card
            key={character.id}
            className={styles.Character}
            bg="dark"
            text="white"
            rounded="true"
        >
            <Card.Img src={character.image} />

            <Card.Body>
                <Card.Title className="text-center">
                    {character.name}
                </Card.Title>
                <Card.Text className="text-center">
                    <Link to={`/characters/profile/${character.id}`}>
                        <Button className="primary"> More Info</Button>
                    </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Character;
