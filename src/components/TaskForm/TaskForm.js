import { useState, useEffect } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { useTodoContext } from '../../contexts/TodoContext';

const TaskForm = () => {

  const {
    addTask,
    editTask,
    editItem
  } = useTodoContext();

  const [taskEntry, setTaskEntry] = useState("");

  const onChangeHandler = (e) => {
    setTaskEntry(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!editTask) {
      addTask(taskEntry);
      setTaskEntry('');
    } else {
      editTask(taskEntry, editItem.id);
    }

  };


  useEffect(() => {
    if (editItem) {
      setTaskEntry(editItem.taskEntry);
    } else {
      setTaskEntry('');
    }
  }, [editItem]);


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
        <MdOutlineAddCircleOutline />
      </button>
    </form>
  );
};

export default TaskForm;
