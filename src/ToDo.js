import React, { Component } from 'react';
import check from './check.png';

export class ToDo extends Component {
  state = {
    userInput: "",
    todoList: [],
  };

  onChangeEvent(e) {
    this.setState({ userInput: e });
  }

  addItem(input) {
    if (input === "") {
      alert("Please enter something");
    } else {
      let listArray = this.state.todoList;
      listArray.push(input);
      this.setState({ todoList: listArray, userInput: "" });
    }
  }

  crossWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  deleteItem() {
    let listArray = this.state.todoList;
    listArray = [];
    this.setState({ todoList: listArray });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <input
              value={this.state.userInput}
              placeholder="What do you need to do today?"
              type="text"
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
            />
          </div>
          <div className="container">
            <button
              className="btn"
              onClick={() => this.addItem(this.state.userInput)}
            >
              ADD
            </button>
          </div>
          <div className="container">
            <ul>
              {this.state.todoList.map((item, index) => (
                <li onClick={this.crossWord} key={index}>
                  <img src={check} width="25px" alt="check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="container">
            <button
              className="btn btn-delete"
              onClick={() => this.deleteItem(this.state.userInput)}
            >
              DELETE
            </button>
          </div>
        </form>
      </div>
    );
  }
}