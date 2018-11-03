import React, { Component } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { PlayerGames } from "./Components/PlayerGames";

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

/*
<PlayerGames>
    <PlayerGamesMenu>
        <AddNewPlayer>
            <AddUsername>
            <AddFirstName>
            <AddSurname>
        <OtherOptions>
    <ListPlayers>
        <SummaryList>
        <PlayerList>
            <Player>
 */

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PlayerGames />
      </div>
    );
  }
}

export default App;
