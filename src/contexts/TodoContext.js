import { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

  const [task, setTask] = useState('');


  const addTask = (taskEntry) => {

  };

  return (
    <TodoContext.Provider
      value={[
        task,
        setTask
      ]}
    >
      {children}
    </TodoContext.Provider >
  );

};

export default TodoContextProvider;