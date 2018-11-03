import React, { Component } from "react";

export class Player extends Component {
  render() {
    return (
      <p>
        {this.props.info.userName} played{" "}
        {this.props.hideCount ? "***" : this.props.info.playCount} games.
      </p>
    );
  }
}
