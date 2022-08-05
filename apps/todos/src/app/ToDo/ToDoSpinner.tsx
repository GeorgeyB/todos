import React from 'react';

import Spinner from '../Icons/Spinner';

function ToDoSpinner() {
  return (
    <div className="w-10 flex items-center justify-center">
      <Spinner className="h-5 w-5 text-gray-300" />
    </div>
  );
}

export default ToDoSpinner;
