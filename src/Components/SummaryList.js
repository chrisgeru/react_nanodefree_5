import React, { Component } from "react";

export class SummaryList extends Component {
  render() {
    return this.props.playerCount === 0 ? (
      <h1>No players registered.</h1>
    ) : (
      <h1>{this.props.playerCount} player(s) saved.</h1>
    );
  }
}
