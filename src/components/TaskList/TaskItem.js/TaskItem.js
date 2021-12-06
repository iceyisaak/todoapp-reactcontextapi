import { useTodoContext } from '../../../contexts/TodoContext';
import { MdOutlineEdit, MdOutlineDelete } from 'react-icons/md';

const TaskItem = ({ task }) => {

  const { deleteTask, editTask } = useTodoContext();

  const onDeleteTask = () => {
    deleteTask(task.id);
  };

  const onEditTask = () => {
    editTask(task.id, task.taskEntry);
  };

  return (
    <li>
      <input type="checkbox" /> {task.taskEntry} <MdOutlineEdit onClick={onEditTask} /> <MdOutlineDelete onClick={onDeleteTask} />
    </li>
  );
};



export default TaskItem;
