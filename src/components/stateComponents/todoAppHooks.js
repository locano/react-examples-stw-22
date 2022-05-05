import React, { useState, useEffect } from 'react';

export default function TodoAppHooks() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    console.log('cambio');
  });

  function addElement($event) {
    $event.preventDefault();
    if (text.length === 0) {
      return;
    }

    const newItem = {
      text,
      date: Date.now(),
    };

    const newTasks = tasks;
    newTasks.push(newItem);
    setText(text);
    setTasks([...newTasks]);
  }

  function deleteElement(index) {
    const updateTasks = tasks;
    updateTasks.splice(index, 1);
    console.log(index);
    console.log(updateTasks);
    setText('');
    setTasks([...updateTasks]);
  }
  return (
    <>
      <h3>Add new Task: </h3>
      <form>
        <label>What do you need?</label>
        <input
          id="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addElement}>
          {' '}
          Add new Task #
          {' '}
          {tasks.length + 1}
        </button>
      </form>
      <ul>
        {tasks.map((element, index) => (
          <li
            key={index}
            onClick={() => {
              deleteElement(index);
            }}
          >
            {element.text}
          </li>
        ))}
      </ul>
    </>
  );
}
