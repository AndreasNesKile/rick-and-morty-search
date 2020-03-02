// Write a function component
// Simply display a character in the form of a card: https://www.w3schools.com/howto/howto_css_cards.asp
// Style the card however you like.
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Character.module.css";

function Character(character) {
    return (
        <Card key={character.id} className={styles.Character}>
            <Card.Img src={character.image}></Card.Img>
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>{character.status}</Card.Text>
                <Link to={`/characters/profile/${character.id}`}>
                    <Button className="primary"> More Info</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default Character;
