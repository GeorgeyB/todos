import React from 'react';
import { ToDo } from '../../types/ToDos';
import ToDoItem from './ToDoItem';

interface ToDoListProps {
  items: ToDo[];
}

function ToDoList({ items }: ToDoListProps) {
  return (
    <div>
      {items.map((toDo) => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
