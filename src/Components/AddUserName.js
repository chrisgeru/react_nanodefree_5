import React, { Component } from "react";

export class AddUserName extends Component {
  handleChange = event => {
    this.props.onChangeHandle({ userName: event.target.value });
  };

  render() {
    return (
      <div>
        <div>Username:</div>
        <input
          className={this.props.className}
          placeholder="Enter the username"
          value={this.props.userNameValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
