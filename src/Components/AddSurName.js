import React, { Component } from "react";

export class AddSurName extends Component {
  handleChange = event => {
    this.props.onChangeHandle({ surName: event.target.value });
  };

  render() {
    return (
      <div>
        <div>Surname:</div>
        <input
          placeholder="Enter the surname"
          value={this.props.surNameValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
