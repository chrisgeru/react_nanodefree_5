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
  state = {
    playerList: [
      { userName: "chrismaille", firstName: "Chris", surName: "Maillefaud" }
    ]
  };

  render() {
    return (
      <div className="list-player-box">
        <SummaryList playerCount={this.state.playerList.length} />
        <PlayerList playerList={this.state.playerList} />
      </div>
    );
  }
}

class SummaryList extends Component {
  render() {
    return this.props.playerCount === 0 ? (
      <h1>No players registered.</h1>
    ) : (
      <h1>
        {this.props.playerCount} player(s) saved.
      </h1>
    );
  }
}

class PlayerList extends Component {
  render() {
    return this.props.playerList.map(playerInfo => (
      <Player info={playerInfo} />
    ));
  }
}

class Player extends Component {
  render() {
    return <p>{this.props.info.userName} played 0 games.</p>;
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
  canAddPlayer = () => {
    return !(
      this.state.firstName !== "" &&
      this.state.userName !== "" &&
      this.state.surName !== ""
    );
  };

  state = {
    firstName: "",
    surName: "",
    userName: ""
  };

  updateForm = payload => {
    this.setState(payload);
  };

  render() {
    return (
      <div class="option-box">
        <h1>Add New Player</h1>
        <AddUserName onChangeHandle={this.updateForm} />
        <AddFirstName onChangeHandle={this.updateForm} />
        <AddSurName onChangeHandle={this.updateForm} />
        <button disabled={this.canAddPlayer()}>Add Player</button>
      </div>
    );
  }
}

class AddUserName extends Component {
  state = {
    userName: ""
  };

  handleChange = event => {
    this.setState({ userName: event.target.value }, () =>
      this.props.onChangeHandle(this.state)
    );
  };

  render() {
    return (
      <div>
        <div>Username:</div>
        <input
          placeholder="Enter the username"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

class AddFirstName extends Component {
  state = {
    firstName: ""
  };

  handleChange = event => {
    this.setState({ firstName: event.target.value }, () =>
      this.props.onChangeHandle(this.state)
    );
  };

  render() {
    return (
      <div>
        <div>First Name:</div>
        <input
          placeholder="Enter the first name"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

class AddSurName extends Component {
  state = {
    surName: ""
  };

  handleChange = event => {
    this.setState({ surName: event.target.value }, () =>
      this.props.onChangeHandle(this.state)
    );
  };

  render() {
    return (
      <div>
        <div>Surname:</div>
        <input
          placeholder="Enter the surname"
          value={this.state.value}
          onChange={this.handleChange}
        />
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
