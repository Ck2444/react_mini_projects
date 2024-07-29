import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import React from 'react';
import styles from './Todo.module.css';

export default function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    // with ?
    // <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>

    // wiht &&
    <div className={`${styles.todo} ${todo.isCompleted && styles.completedTodo}`}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)} />
      <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todo.id)} />

      <div>SFFSFS;</div>
    </div>
  );
}
