import { useState } from 'react';
import { useTodoContext } from '../../contexts/TodoContext';

const TaskForm = () => {

  const {
    addTask,
  } = useTodoContext();

  const [taskEntry, setTaskEntry] = useState("");

  const onChangeHandler = (e) => {
    setTaskEntry(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTask(taskEntry);
    setTaskEntry('');
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
