import React from 'react';

const List = ({ todos, removeTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => removeTodo(todo.id)}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
