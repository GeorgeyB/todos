import { useQuery } from '@apollo/client';

import { ToDo } from '../types/ToDos';

import { GET_TO_DOS } from '../gql/ToDos';
import ToDoList from './ToDo/ToDoList';
import ToDoNew from './ToDo/ToDoNew';

const App = () => {
  const { loading, error, data } = useQuery<{ toDos: ToDo[] }>(GET_TO_DOS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    return <p>An error occured whilst retreiving to-dos</p>;
  }

  return (
    <div className="bg-white border shadow-sm max-w-md mx-auto my-10 rounded-lg">
      <h1 className="text-3xl font-bold p-4">Todos</h1>
      <ToDoList items={data.toDos} />
      <ToDoNew />
    </div>
  );
};

export default App;
