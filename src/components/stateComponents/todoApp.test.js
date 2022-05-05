/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import TodoApp from './todoApp';

describe('TodoApp', () => {
  it('Render Component', () => {
    render(<TodoApp />);
    const TodoElement = screen.getByTestId('input-test');
    expect(TodoElement).toBeInTheDocument();
  });

  it('Render Component Button', () => {
    render(<TodoApp />);
    const TodoElement = screen.getByTestId('button-test');
    expect(TodoElement).toBeInTheDocument();
  });

  it('Render Component Label', () => {
    render(<TodoApp />);
    const TodoElement = screen.getByTestId('label-test');
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
});
