import React, { Component } from "react";
import { Player } from "./Player";

export class PlayerList extends Component {
  render() {
    return this.props.playerList.map(playerInfo => (
      <Player
        key={playerInfo.userName}
        info={playerInfo}
        hideCount={this.props.hideCount}
      />
    ));
  }
}
