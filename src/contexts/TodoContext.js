import { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

  const [task, setTask] = useState('');

  return (
    <TodoContext.Provider
      value={{
        task,
        setTask
      }}
    >
      {children}
    </TodoContext.Provider>
  );

};

export default TodoContextProvider;