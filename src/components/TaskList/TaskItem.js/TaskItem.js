import { useTodoContext } from '../../../contexts/TodoContext';
import { MdOutlineEdit, MdOutlineDelete } from 'react-icons/md';
import style from './TaskItem.module.scss';

const TaskItem = ({ task }) => {

  const { deleteTask, selectTaskToEdit } = useTodoContext();

  const onDeleteTask = () => {
    deleteTask(task.id);
  };

  const onSelectEditTask = () => {
    selectTaskToEdit(task);
  };

  return (
    <li className={`${style['TaskItem']}`}>
      <span className={`${style['task-name']}`}>
        {task.title}
      </span>
      <MdOutlineEdit onClick={onSelectEditTask} className={`${'pointer'} ${style['item-btn']}`} />
      <MdOutlineDelete onClick={onDeleteTask} className={`${'pointer'} ${style['item-btn']}`} />
    </li>
  );
};



export default TaskItem;
