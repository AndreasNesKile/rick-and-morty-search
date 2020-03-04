import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

export default class SearchBar extends React.Component {
    state = {
        text: ""
    };

    onChange = searchElement => {
        this.setState({ text: searchElement.target.value });
        this.props.onChange(searchElement.target.value);
    };
    render() {
        return (
            <div>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <i className="material-icons">search</i>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        id="searchBar"
                        onChange={this.onChange}
                        placeholder="Rick Sanchez"
                    ></FormControl>
                </InputGroup>
            </div>
        );
    }
}
