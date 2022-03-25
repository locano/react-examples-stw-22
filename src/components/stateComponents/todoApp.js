import React from "react";
import "./todoApp.css";
import TodoList from "./todoList";

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
    this.deleteElement = this.deleteElement.bind(this);
  }

  changeText($eventInput) {
    const newValue = $eventInput.target.value;
    console.log(newValue);
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
    console.log(this.state);
  }

  deleteElement(index) {
    let updateTasks = this.state.tasks;
    updateTasks.splice(index, 1);
    console.log(index);
    console.log(updateTasks);
    this.setState({
      text: "",
      tasks: updateTasks,
    });
  }

  componentDidMount() {
    console.log("inicio");
  }

  componentDidUpdate() {
    console.log("actualizar");
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
          <button onClick={this.addElement}>
            {" "}
            Add new Task # {this.state.tasks.length + 1}
          </button>
        </form>
        <TodoList tasks={this.state.tasks} deleteElement={this.deleteElement} />
      </>
    );
  }
}



export default TodoApp;
