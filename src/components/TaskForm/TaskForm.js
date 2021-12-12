import { useState, useEffect } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { useTodoContext } from '../../contexts/TodoContext';

import style from './TaskForm.module.scss';

const TaskForm = () => {

  const [text, setText] = useState("");

  const {
    addTask,
    editTask,
    editItem
  } = useTodoContext();


  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title: text
    };

    if (!editItem) {
      addTask(newTask);
      setText('');
    } else {
      editTask(text, editItem.id);
    }

  };


  useEffect(() => {
    if (editItem) {
      setText(editItem.taskEntry);
    } else {
      setText('');
    }
  }, [editItem]);


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
