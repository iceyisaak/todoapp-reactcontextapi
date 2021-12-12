import { useState, useContext, useEffect, createContext } from 'react';
// import { v4 as uuidv4 } from 'uuid';



const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);



  const fetchTasks = async () => {
    setIsLoading(true);
    const response = await fetch(`/tasks`);
    const data = await response.json();
    setTasks(data);
    setIsLoading(false);
  };



  const addTask = async (newTask) => {

    const response = await fetch(`/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    });
    const data = await response.json();
    setTasks([...tasks, data]);
  };

  const deleteTask = async (id) => {
    const confirm = window.confirm('Delete this task?');
    if (confirm) {
      await fetch(`/tasks/`);
      setTasks(
        tasks.filter((task) => {
          return task.id !== id;
        })
      );
    }
  };

  const deleteAllTasks = () => {

    const confirm = window.confirm('Delete All Tasks?');

    if (confirm) {
      setTasks([]);
    }
  };

  const findItem = (id) => {
    const item = tasks.find((task) => {
      return task.id === id;
    });
    setEditItem(item);
  };


  const editTask = (title, id) => {
    const updatedTasks = tasks.map((task) => (
      task.id === id ? { title, id } : task
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
        editItem,
        isLoading
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