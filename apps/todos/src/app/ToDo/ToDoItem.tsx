import React from 'react';

import { ToDo } from '../../types/ToDos';
import ToDoBody from './ToDoBody';
import ToDoDone from './ToDoDone';
import ToDoUndone from './ToDoUndone';

type ToDoItemProps = ToDo;

function ToDoItem({ id, body, done }: ToDoItemProps) {
  return (
    <div className="border-t flex">
      <ToDoBody id={id} body={body} />
      {done ? <ToDoDone id={id} /> : <ToDoUndone id={id} />}
    </div>
  );
}

export default ToDoItem;
