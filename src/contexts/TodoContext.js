import { useState, useContext, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';


const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

  const [tasks, setTasks] = useState([
    { taskEntry: 'Painting', id: 1 },
    { taskEntry: 'Jogging', id: 2 },
  ]);

  const addTask = (taskEntry) => {
    console.log(taskEntry);
    setTasks([
      ...tasks,
      {
        taskEntry,
        id: uuidv4()
      }
    ]);
    console.log(tasks);
  };

  return (
    <TodoContext.Provider
      value={{
        addTask,
        tasks
      }}
    >
      {children}
    </TodoContext.Provider >
  );

};

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export { TodoContext, TodoContextProvider };