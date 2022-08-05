import React from 'react';

import Check from '../Icons/Check';
import { MARK_TO_DO_UNDONE } from '../../gql/ToDos';
import { useMutation } from '@apollo/client';

import ToDoSpinner from './ToDoSpinner';

interface ToDoDoneProps {
  id: number;
}

function ToDoDone({ id }: ToDoDoneProps) {
  const [markUndone, { loading }] = useMutation(MARK_TO_DO_UNDONE, {
    variables: { id },
  });

  return loading ? (
    <ToDoSpinner />
  ) : (
    <button
      className="border-l w-10 flex items-center justify-center bg-green-700 border-l-green-700 text-white"
      type="button"
      onClick={() => markUndone()}
    >
      <Check className="w-6 h-6" />
    </button>
  );
}

export default ToDoDone;
