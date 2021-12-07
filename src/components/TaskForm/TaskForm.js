import { useState, useEffect } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { useTodoContext } from '../../contexts/TodoContext';

import style from './TaskForm.module.scss';

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

    if (!editItem) {
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
    <form onSubmit={onSubmitHandler} className={`${style['form']}`}>
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder='e.g. Shopping'
        value={taskEntry}
        required
        className={`${style['input']}`}
        maxLength={25}
      />
      <button className={`${style['btn']}`}>
        <MdOutlineAddCircleOutline className={`${style['btn-text']} ${'pointer'}`} />
      </button>
    </form>
  );
};

export default TaskForm;
