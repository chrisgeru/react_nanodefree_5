import React, { Component } from "react";
import { AddUserName } from "./AddUserName";
import { AddFirstName } from "./AddFirstName";
import { AddSurName } from "./AddSurName";

export class AddNewPlayer extends Component {
  hasEnterAllData = () => {
    return !(
      this.state.firstName !== "" &&
      this.state.userName !== "" &&
      this.state.surName !== ""
    );
  };

  hasUniqueUserName = () => {
    for (let player of this.props.playerList) {
      if (player.userName === this.state.userName) {return true};
    }
    return false;
  };

  state = {
    firstName: "",
    surName: "",
    userName: "",
    playCount: 0
  };

  updateFormData = payload => {
    this.setState(payload);
  };

  addToList = event => {
    this.props.onClickHandler(this.state);
    this.setState({
      firstName: "",
      surName: "",
      userName: "",
      playCount: 0
    });
  };

  render() {
    return (
      <div className="option-box">
        <h1>Add New Player</h1>
        <AddUserName
          className={this.hasUniqueUserName() ? "formError" : null}
          userNameValue={this.state.userName}
          onChangeHandle={this.updateFormData}
        />
        <AddFirstName
          firstNameValue={this.state.firstName}
          onChangeHandle={this.updateFormData}
        />
        <AddSurName
          surNameValue={this.state.surName}
          onChangeHandle={this.updateFormData}
        />
        <button
          onClick={this.addToList}
          disabled={this.hasEnterAllData() || this.hasUniqueUserName()}
        >
          Add Player
        </button>
      </div>
    );
  }
}
