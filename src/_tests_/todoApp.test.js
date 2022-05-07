/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import TodoApp from '../components/stateComponents/todoApp';

describe('TodoApp', () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });
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

});
