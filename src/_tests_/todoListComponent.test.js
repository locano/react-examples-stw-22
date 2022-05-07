/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import TodoList from '../components/stateComponents/todoList';

describe('TodoApp', () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });
  it('Render Component', () => {
    render(<TodoList tasks={[]} />);
    const todoListElement = screen.getByTestId('ultest');
    expect(todoListElement).toBeInTheDocument();
  });

  it('Click Button', () => {
    const newItem = {
      text: 'item to delete',
      date: Date.now(),
    };
    const tasks = [newItem];
    const deleteElementFn = jest.fn();
    const appTodoList = render(<TodoList tasks={tasks} deleteElement={deleteElementFn} />);
    const itemLi = appTodoList.getByTestId('item-0');
    fireEvent.click(itemLi);
    expect(deleteElementFn).toHaveBeenCalled();
  });
});
