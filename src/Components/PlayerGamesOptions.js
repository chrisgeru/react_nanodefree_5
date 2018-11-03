import React, { Component } from "react";
import { AddNewPlayer } from "./AddNewPlayer";
import { OtherOptions } from "./OtherOptions";

export class PlayerGamesOptions extends Component {
  render() {
    return (
      <div>
        <AddNewPlayer
          playerList={this.props.playerList}
          onClickHandler={this.props.onClickHandler}
        />
        <OtherOptions
          hideStatus={this.props.hideStatus}
          onClickHandler={this.props.hideHandler}
          playerCount={this.props.playerList.length}
        />
      </div>
    );
  }
}
