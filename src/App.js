import React, { useEffect, useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';

const App = () => {
  const [todos, setTodos] = useState([]);

  const [id, setId] = useState(0);

  const createTodo = (text) => {
    setTodos([...todos, { id, text }]);
    setId(id + 1);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  return (
    <div>
      <Title todos={todos} />
      <Form createTodo={(text) => createTodo(text)} />
      <List todos={todos} removeTodo={(id) => removeTodo(id)} />
    </div>
  );
};

export default App;
