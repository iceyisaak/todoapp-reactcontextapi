import { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';

const TaskItem = () => {

  const { task } = useContext(TodoContext);


  return (
    <li>
      {task}
    </li>
  );
};



export default TaskItem;
