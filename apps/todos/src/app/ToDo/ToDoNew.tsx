import { useMutation } from '@apollo/client';
import React, { KeyboardEventHandler, useState } from 'react';
import { CREATE_TO_DO, GET_TO_DOS } from '../../gql/ToDos';

function ToDoNew() {
  const [inputValue, setInputValue] = useState('');
  const [createToDo] = useMutation(CREATE_TO_DO, {
    refetchQueries: [GET_TO_DOS],
  });

  const onKeyDown: KeyboardEventHandler = async (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    e.preventDefault();
    await createToDo({ variables: { body: inputValue } });
    setInputValue('');
  };

  return (
    <div className="border-t">
      <input
        className="bg-transparent w-full py-3 px-4 outline-none focus:shadow-inner"
        type="text"
        placeholder="Create a new to-do..."
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default ToDoNew;
