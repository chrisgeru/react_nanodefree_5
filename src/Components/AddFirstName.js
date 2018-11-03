import React, { Component } from "react";

export class AddFirstName extends Component {
  handleChange = event => {
    this.props.onChangeHandle({ firstName: event.target.value });
  };

  render() {
    return (
      <div>
        <div>First Name:</div>
        <input
          placeholder="Enter the first name"
          value={this.props.firstNameValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
