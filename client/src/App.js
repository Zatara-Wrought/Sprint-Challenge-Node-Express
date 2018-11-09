import React, { Component } from "react";
import axios from "axios";
import Projects from "./Projects";
import Actions from "./Actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      actions: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:9000/api/project/")
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:9000/api/action/")
      .then(response => {
        this.setState({
          actions: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Projects projects={this.state.projects} />
        <Actions actions={this.state.actions} />
      </div>
    );
  }
}

export default App;
