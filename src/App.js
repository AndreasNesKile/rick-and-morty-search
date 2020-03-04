import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import styles from "./App.modules.css";
import CharacterList from "./components/CharacterList/CharacterList";
import Character from "./components/Character/Character";
import CharacterProfile from "./components/CharacterProfile/CharacterProfile";

function App() {
    return (
        <div className={styles.App}>
            <Router>
                <Route>
                    <Navbar bg="dark">
                        <Link to="/">
                            <div>
                                <h1 className="text-light textr-center">
                                    Rick &amp; Morty{" "}
                                </h1>
                            </div>
                        </Link>
                    </Navbar>
                </Route>
                <Switch>
                    <Route exact path="/" component={CharacterList} />
                    <Route exact path="/characters" component={Character} />
                    <Route
                        path="/characters/profile/:id"
                        component={CharacterProfile}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
