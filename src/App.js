import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }
  serach() {
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <Container className>
          <h1>Music Master</h1>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search for an artist"
              aria-label="Search for an artist"
              aria-describedby="basic-addon2"
              value={this.state.query}
              onChange={(event) => {
                this.setState({
                  query: event.target.value
                });
              }}
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={() => this.serach()}>
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <div className="profile">
            <div>Artis Picture</div>
            <div>Artis Name</div>
            <div className="gallery">gallery</div>
          </div>
        </Container>
      </div>
    );
  }
}
export default App;
