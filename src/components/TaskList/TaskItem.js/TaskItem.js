import { useTodoContext } from '../../../contexts/TodoContext';
import { MdOutlineEdit, MdOutlineDelete } from 'react-icons/md';

const TaskItem = ({ task }) => {

  const { deleteTask, findItem } = useTodoContext();

  const onDeleteTask = () => {
    deleteTask(task.id);
  };

  const onFindItem = () => {
    findItem(task.id);
  };

  return (
    <li>
      {task.taskEntry} <MdOutlineEdit onClick={onFindItem} /> <MdOutlineDelete onClick={onDeleteTask} />
    </li>
  );
};



export default TaskItem;
