import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoLIist({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}
