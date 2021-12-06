import { useState, useContext, useEffect, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';


const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (taskEntry) => {

    setTasks([
      ...tasks,
      {
        taskEntry,
        id: uuidv4()
      }
    ]);

  };

  const deleteTask = (id) => {
    console.log('deleteTask()', id);
  };

  const editTask = (taskEntry, id) => {
    console.log('editTask()', taskEntry, id);
  };

  return (
    <TodoContext.Provider
      value={{
        addTask,
        tasks,
        deleteTask,
        editTask
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