import { useTodoContext } from '../../../contexts/TodoContext';
import { MdOutlineEdit, MdOutlineDelete } from 'react-icons/md';
import style from './TaskItem.module.scss';

const TaskItem = ({ task }) => {

  const { deleteTask, findItem } = useTodoContext();

  const onDeleteTask = () => {
    deleteTask(task.id);
  };

  const onFindItem = () => {
    findItem(task.id);
  };

  return (
    <li className={`${style['TaskItem']}`}>
      <span className={`${style['task-name']}`}>
        {task.taskEntry}
      </span>
      <MdOutlineEdit onClick={onFindItem} className={`${'pointer'} ${style['item-btn']}`} />
      <MdOutlineDelete onClick={onDeleteTask} className={`${'pointer'} ${style['item-btn']}`} />
    </li>
  );
};



export default TaskItem;
