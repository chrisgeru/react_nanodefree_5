import React, { Component } from "react";

export class OtherOptions extends Component {
  render() {
    return (
      <div className="option-box">
        <h1>Other Options</h1>
        <button
          disabled={this.props.playerCount === 0}
          onClick={() => this.props.onClickHandler()}
        >
          {this.props.hideStatus ? "Show" : "Hide"} Games
        </button>
      </div>
    );
  }
}
