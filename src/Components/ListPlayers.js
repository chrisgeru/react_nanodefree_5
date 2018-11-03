import React, { Component } from "react";
import { SummaryList } from "./SummaryList";
import { PlayerList } from "./PlayerList";

export class ListPlayers extends Component {
  render() {
    return (
      <div className="list-player-box">
        <SummaryList playerCount={this.props.playerList.length}/>
        <PlayerList
          hideCount={this.props.hideCount}
          playerList={this.props.playerList}
        />
      </div>
    );
  }
}
