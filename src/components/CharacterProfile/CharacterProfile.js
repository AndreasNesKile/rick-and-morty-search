import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character/";

export default class CharacterProfile extends Component {
    state = {
        character: {}
    };

    async componentDidMount() {
        await axios
            .get(`${API_URL}/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ character: response.data });
            });
    }

    render() {
        return (
            <Container className="container">
                <Row>
                    <Col>
                        <h1 className="text-center">
                            {this.state.character.name}
                        </h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}
