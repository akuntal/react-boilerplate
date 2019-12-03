import React from 'react';
import { PropTypes } from 'prop-types';

export const Todos = ({ todos }) => (
  <div>
    Todos
    <ul>
      {todos.map(todo => (
        <li key={`key-${todo.id}`}>{todo.title}</li>
      ))}
    </ul>
  </div>
);
Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.any).isRequired
};
