import React, { Component } from "react";
import "./App.css";
import { Header } from "./Components/Header";

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

class ListPlayers extends Component {
  render() {
    return (
      <div className="list-player-box">
        <SummaryList />
        <PlayerList />
      </div>
    );
  }
}

class SummaryList extends Component {
  render() {
    return <h1>No players registered.</h1>;
  }
}

class PlayerList extends Component {
  render() {
    return <Player />;
  }
}

class Player extends Component {
  render() {
    return <p>Username played 0 games.</p>;
  }
}

class PlayerGamesOptions extends Component {
  render() {
    return (
      <div>
        <AddNewPlayer />
        <OtherOptions />
      </div>
    );
  }
}

class OtherOptions extends Component {
  render() {
    return (
        <div className="option-box">
            <h1>Other Options</h1>
            <button>Hide Games</button>
        </div>

    );
  }
}

class AddNewPlayer extends Component {
  render() {
    return (
      <div class="option-box">
        <h1>Add New Player</h1>
        <AddUserName />
        <AddFirstName />
        <AddSurName />
        <button>Add Player</button>
      </div>
    );
  }
}

class AddUserName extends Component {
  render() {
    return (
      <div>
        <div>Username:</div>
        <input placeholder="Enter the username here" />
      </div>
    );
  }
}

class AddFirstName extends Component {
  render() {
    return (
      <div>
        <div>First Name:</div>
        <input placeholder="Enter the first name here" />
      </div>
    );
  }
}

class AddSurName extends Component {
  render() {
    return (
      <div>
        <div>Surname:</div>
        <input placeholder="Enter the surname here" />
      </div>
    );
  }
}

class PlayerGames extends Component {
  render() {
    return (
      <div className="main-container">
        <PlayerGamesOptions />
        <ListPlayers />
      </div>
    );
  }
}

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
