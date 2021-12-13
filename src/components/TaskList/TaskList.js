import { useTodoContext } from '../../contexts/TodoContext';
import TaskItem from "./TaskItem.js/TaskItem";

import style from './TaskList.module.scss';

const TaskList = () => {

  const { tasks, isLoading } = useTodoContext();

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className={`${style['TaskList']}`}>
      {!isLoading && tasks.length === 0 && <p className={`${style['no-task']}`}>+++ Task List is Empty +++</p>}
      <ul>

        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
