import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CharacterList from "./components/CharacterList/CharacterList";
import Character from "./components/Character/Character";
import CharacterProfile from "./components/CharacterProfile/CharacterProfile";

function App() {
    return (
        <div className="app">
            <Router>
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
