import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import styles from "./CharacterProfile.module.css";

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
			<Container fluid className={styles.Container}>
				<Row className="justify-content-center">
					<Col>
						<Card
							className={styles.CharacterProfile}
							bg="dark"
							text="white"
						>
							<Card.Body>
								<Card.Img
									src={this.state.character.image}
								></Card.Img>
								<Card.Title>
									{this.state.character.name}
								</Card.Title>

								<article>
									<div>
										<div className={styles.TextWrapper}>
											<span>Name</span>
											<span>
												{this.state.character.name}
											</span>
										</div>
										<div className={styles.TextWrapper}>
											<span>Status</span>
											<span>
												{this.state.character.status}
											</span>
										</div>
									</div>
								</article>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}
