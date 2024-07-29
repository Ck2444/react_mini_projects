import React from 'react';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodoActions.module.css';

export default function TodoActions({ resetTodos, deleteCompletedTodos, comletedTodosExist }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!comletedTodosExist}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
