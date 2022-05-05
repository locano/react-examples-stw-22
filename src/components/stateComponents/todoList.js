import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((element, index) => (
          <li
            key={index}
            onClick={(index) => {
              this.props.deleteElement(index);
            }}
          >
            {element.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
