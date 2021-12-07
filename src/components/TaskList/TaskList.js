import { useTodoContext } from '../../contexts/TodoContext';
import TaskItem from "./TaskItem.js/TaskItem";

import style from './TaskList.module.scss';

const TaskList = () => {

  const { tasks } = useTodoContext();

  return (
    <div className={`${style['TaskList']}`}>
      {tasks.length === 0 && <p className={`${style['no-task']}`}>+++ Task List is Empty +++</p>}
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
