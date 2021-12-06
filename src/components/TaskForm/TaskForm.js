import { useState, useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

const TaskForm = () => {

  const {
    addTask,
  } = useContext(TodoContext);

  const [taskEntry, setTaskEntry] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(task);
    addTask(taskEntry);
    setTaskEntry('');
  };

  const onChangeHandler = (e) => {
    setTaskEntry(e.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder='e.g. Shopping'
        value={taskEntry}
        required
      />
      <button>
        Add
      </button>
    </form>
  );
};

export default TaskForm;
