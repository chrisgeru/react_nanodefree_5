import React, { Component } from "react";
import { PlayerGamesOptions } from "./PlayerGamesOptions";
import { ListPlayers } from "./ListPlayers";

export class PlayerGames extends Component {
  state = {
    playerList: [],
    hideCount: false
  };

  addFormData = formData => {
    this.setState(oldState => ({
      playerList: [...oldState.playerList, formData]
    }));
  };

  toggleButton = event => {
    this.setState(oldState => ({
      hideCount: !oldState.hideCount
    }));
  };

  render() {
    return (
      <div className="main-container">
        <PlayerGamesOptions
          playerList={this.state.playerList}
          onClickHandler={this.addFormData}
          hideHandler={this.toggleButton}
          hideStatus={this.state.hideCount}
        />
        <ListPlayers
          playerList={this.state.playerList}
          hideCount={this.state.hideCount}
        />
      </div>
    );
  }
}
