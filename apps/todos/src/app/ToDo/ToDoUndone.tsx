import React from 'react';

import Check from '../Icons/Check';
import { MARK_TO_DO_DONE } from '../../gql/ToDos';
import { useMutation } from '@apollo/client';

import ToDoSpinner from './ToDoSpinner';

interface ToDoUndoneProps {
  id: number;
}

function ToDoUndone({ id }: ToDoUndoneProps) {
  const [markDone, { loading }] = useMutation(MARK_TO_DO_DONE, {
    variables: { id },
  });

  return loading ? (
    <ToDoSpinner />
  ) : (
    <button
      className="border-l w-10 flex items-center justify-center text-gray-400"
      type="button"
      onClick={() => markDone()}
    >
      <Check className="w-6 h-6" />
    </button>
  );
}

export default ToDoUndone;
