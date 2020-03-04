import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import styles from "./CharacterProfile.module.css";

const API_URL = "https://rickandmortyapi.com/api/character/";

export default class CharacterProfile extends Component {
    state = {
        character: Object,
        origin: Object,
        location: Object
    };

    async componentDidMount() {
        await axios
            .get(`${API_URL}/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ character: response.data });
                this.setState({ origin: response.data.origin });
                this.setState({ location: response.data.location });
            });
    }

    render() {
        return (
            <Container className={styles.Container}>
                <Row className="justify-content-center">
                    <Col>
                        <Card
                            className={styles.CharacterProfile}
                            border="primary"
                            bg="dark"
                            text="white"
                        >
                            <Card.Body>
                                <Card.Img
                                    src={this.state.character.image}
                                ></Card.Img>
                                <Card.Title className="text-center pt-3">
                                    <h2>{this.state.character.name} </h2>
                                </Card.Title>
                                <Card
                                    bg="info"
                                    border="primary"
                                    key={this.state.character.id}
                                >
                                    <table className="table table-hover">
                                        <tbody className="width-inherit">
                                            <tr>
                                                <th scope="row">Status</th>
                                                <td>
                                                    {
                                                        this.state.character
                                                            .status
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Species</th>
                                                <td>
                                                    {
                                                        this.state.character
                                                            .species
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Gender</th>
                                                <td>
                                                    {
                                                        this.state.character
                                                            .gender
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Origin</th>
                                                <td>
                                                    {this.state.origin.name}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Location</th>
                                                <td>
                                                    {this.state.location.name}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Card>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
