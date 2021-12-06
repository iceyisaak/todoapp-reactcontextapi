import { useTodoContext } from '../../contexts/TodoContext';
import TaskItem from "./TaskItem.js/TaskItem";


const TaskList = () => {

  const { tasks } = useTodoContext();

  return (
    <div>
      {tasks.length === 0 && <p>No Tasks</p>}
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}

      </ul>
    </div>
  );
};

export default TaskList;
