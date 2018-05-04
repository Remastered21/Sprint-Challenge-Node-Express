import React, { Component } from "react";
import axios from "axios";

export default class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectDetails: []
    };
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.fetchProjDetails(id);
  }

  fetchProjDetails = id => {
    axios
    .get(`http://localhost:5000/api/projects/${id}`)
    .then(response => {
      this.setState(() => ({ projectDetails: response.data }));
    })
    .catch(err => {
      console.error("server Error", err);
    });
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div>something</div>
      </div>
    );
  }
}
