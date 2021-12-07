import { useState, useContext, useEffect, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';


const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialState);
  const [editItem, setEditItem] = useState(null);

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
    const confirm = window.confirm('Are you sure you want to delete this task?');
    if (confirm) {
      setTasks(
        tasks.filter((task) => {
          return task.id !== id;
        })
      );
    }
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const findItem = (id) => {
    const item = tasks.find((task) => {
      return task.id === id;
    });
    setEditItem(item);
  };


  const editTask = (taskEntry, id) => {
    const updatedTasks = tasks.map((task) => (
      task.id === id ? { taskEntry, id } : task
    ));
    setTasks(updatedTasks);
    setEditItem(null);
  };

  return (
    <TodoContext.Provider
      value={{
        addTask,
        tasks,
        deleteTask,
        editTask,
        deleteAllTasks,
        findItem,
        editItem
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