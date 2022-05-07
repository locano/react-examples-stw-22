import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <ul data-testid={`ultest`}>
        {this.props.tasks.map((element, index) => (
          <li
            key={index}
            data-testid={`item-${index}`}
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
