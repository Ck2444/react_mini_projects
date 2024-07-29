import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoLIist({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
}
