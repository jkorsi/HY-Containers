import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos
        .map((todo, index) => {
          return (
            <Todo
              key={index}
              todo={todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          );
        })
        .reduce(
          (acc, cur, index) => [...acc, <hr key={`hr-${index}`} />, cur],
          []
        )}
    </>
  );
};

export default TodoList;
