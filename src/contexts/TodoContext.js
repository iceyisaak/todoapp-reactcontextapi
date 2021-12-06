import { useState, useContext, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';


const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);

  const addTask = (taskEntry) => {

    // console.log() works
    console.log(taskEntry);

    // setTasks() Not adding new items
    setTasks([
      ...tasks,
      {
        taskEntry,
        id: uuidv4()
      }
    ]);
  };
  console.log(tasks);

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