import { useMutation } from '@apollo/client';
import React, { ChangeEventHandler, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { UPDATE_TO_DO } from '../../gql/ToDos';

interface ToDoBodyProps {
  id: number;
  body: string;
}

function ToDoBody({ id, body }: ToDoBodyProps) {
  const [inputValue, setInputValue] = useState(body);
  const [updateToDo] = useMutation(UPDATE_TO_DO);

  const debounced = useDebouncedCallback(
    (value) => updateToDo({ variables: { id, body: value } }),
    300
  );

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setInputValue(value);
    debounced(value);
  };

  return (
    <input
      className="bg-transparent w-full py-3 px-4 outline-none focus:shadow-inner"
      type="text"
      value={inputValue}
      onChange={onChange}
    />
  );
}

export default ToDoBody;
