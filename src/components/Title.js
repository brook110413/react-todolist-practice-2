import React from 'react';

const Title = ({ todos }) => {
  return (
    <div>
      <h2>代辦事項清單({todos.length})</h2>
    </div>
  );
};

export default Title;
