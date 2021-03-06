import { useState, useContext, useEffect, createContext } from 'react';


const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);
  // const [editItem, setEditItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({
    task: {},
    edit: false
  });

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
      await fetch(`/tasks/${id}`, {
        method: 'DELETE'
      });
      setTasks(
        tasks.filter((task) => {
          return task.id !== id;
        })
      );
    }
  };

  //////////////////////////////////////////////////////////////
  const deleteAllTasks = async () => {
    const confirm = window.confirm('Delete All Tasks?');
    if (confirm) {
      await fetch(`/tasks`, {
        method: 'DELETE'
      });
      setTasks([]);
    }
  };
  /////////////////////////////////////////////////////////////

  // const findItem = (id) => {
  //   const item = tasks.find((task) => {
  //     return task.id === id;
  //   });
  //   setEditItem(item);
  // };


  const editTask = async (id, editedTask) => {
    const response = await fetch(`/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedTask)
    });
    const data = await response.json();
    const updatedTasks = tasks.map(
      (task) => (task.id === id ? { ...task, ...data } : task)
    );
    setTasks(updatedTasks);
    setTaskToEdit({
      task: {},
      edit: false
    });
  };


  const selectTaskToEdit = (task) => {
    console.log('TodoContext.js', task);
    setTaskToEdit({
      task,
      edit: true
    });
  };

  return (
    <TodoContext.Provider
      value={{
        addTask,
        tasks,
        deleteTask,
        editTask,
        taskToEdit,
        selectTaskToEdit,
        deleteAllTasks,
        // findItem,
        // editItem,
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