/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import TodoApp from '../components/stateComponents/todoApp';

//https://jestjs.io/docs/snapshot-testing
describe('TodoApp', () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });
  it('Render Component', () => {
    render(<TodoApp />);
    const TodoElement = screen.getByTestId('input-test');
    expect(TodoElement).toBeInTheDocument();
  });

  it('Snapshot', () => {
    const newItem = {
      text: 'new task 1',
      date: Date.now(),
    };
    const tasks = [newItem];
    const { asFragment } = render(<TodoApp tasks={tasks} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Snapshot InLine', () => {
    const newItem = {
      text: 'new task 1',
      date: Date.now(),
    };
    const tasks = [newItem];
    const { asFragment } = render(<TodoApp tasks={tasks} />);
    expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <h3>
        Add new Task: 
      </h3>
      <form>
        <label
          data-testid="label-test"
        >
          What do you need?
        </label>
        <input
          data-testid="input-test"
          id="todo-input"
          value=""
        />
        <button
          data-testid="button-test"
        >
          Add new Task #2
        </button>
      </form>
      <ul
        data-testid="ultest"
      >
        <li
          data-testid="item-0"
        >
          new task 1
        </li>
      </ul>
    </DocumentFragment>
    `);
  });

  it('Snapshot RandomValues', () => {
    const newItem = {
      text: 'new task 1',
      date: new Date(),
    };
    // const tasks = [newItem];
    // const { asFragment } = render(<TodoApp tasks={tasks} />);
    expect(newItem).toMatchSnapshot({
      text: 'new task 1',
      date: expect.any(Date),
    });
  });
});
