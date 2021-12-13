import { useState, useEffect } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { useTodoContext } from '../../contexts/TodoContext';

import style from './TaskForm.module.scss';

const TaskForm = () => {

  const [text, setText] = useState("");

  const {
    addTask,
    editTask,
    // editItem,
    taskToEdit
  } = useTodoContext();


  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title: text
    };

    if (!taskToEdit.edit) {
      addTask(newTask);
      setText('');
    } else {
      editTask(taskToEdit.task.id, newTask);
      // console.log(text, taskToEdit.task.id);
    }

  };


  useEffect(() => {
    if (taskToEdit.edit) {
      setText(taskToEdit.task.title);
    } else {
      setText('');
    }
  }, [taskToEdit]);


  return (
    <form onSubmit={onSubmitHandler} className={`${style['form']}`}>
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder='e.g. Shopping'
        value={text}
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
