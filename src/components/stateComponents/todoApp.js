import React from "react";
import "./todoApp.css";

class TodoApp extends React.Component {
  // Component Constructor for TodoApp
  constructor(props) {
    super(props);

    // New Variables for item and text
    this.state = {
      tasks: [],
      text: "",
    };

    // // Handle change on data
    this.changeText = this.changeText.bind(this);
    this.addElement = this.addElement.bind(this);
  }

  changeText($event) {
    const newValue = $event.target.value;
    this.setState({ text: newValue });
  }

  addElement($event) {
    $event.preventDefault();
    if (this.state.text.length == 0) {
      return;
    }

    const newItem = {
      text: this.state.text,
      date: Date.now(),
    };

    let newTasks = this.state.tasks;
    newTasks.push(newItem);
    this.setState({
      text: "",
      tasks: newTasks,
    });
    console.log(this.state)
  }

  render() {
    return (
      <>
        <h3>Add new Task: </h3>
        <form>
          <label>What do you need?</label>
          <input
            id="todo-input"
            value={this.state.text}
            onChange={this.changeText}
          ></input>
          <button onClick={this.addElement}> Add new Task # {this.state.tasks.length + 1}</button>
        </form>
        <ul>
            {this.state.tasks.map(element => {
               return <li>{element.text}</li>
            })}            
        </ul>
      </>
    );
  }
}

export default TodoApp;
