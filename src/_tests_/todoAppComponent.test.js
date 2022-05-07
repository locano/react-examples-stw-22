/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import TodoApp from '../components/stateComponents/todoApp';

describe('TodoApp', () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });
  it('Render Component', () => {
    render(<TodoApp tasks={[]} />);
    const todoAppElement = screen.getByTestId('input-test');
    expect(todoAppElement).toBeInTheDocument();
  });

  it('Click Button', () => {
    const newItem = {
      text: 'item 1',
      date: Date.now(),
    };
    const tasks = [newItem];
    // const addElementFn = jest.fn();
    render(<TodoApp tasks={tasks} />);
    const itemInput = screen.getByTestId('input-test');
    fireEvent.change(itemInput, { target: { value: 'item 2' } });
    const itemButton = screen.getByTestId('button-test');
    fireEvent.click(itemButton);
    expect(itemButton).toHaveTextContent('Add new Task #3');
  });
});
