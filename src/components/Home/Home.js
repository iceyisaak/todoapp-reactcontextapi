import { useTodoContext } from '../../contexts/TodoContext';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';

// import style from './Home.module.scss';

const Home = () => {

  const { deleteAllTasks } = useTodoContext();

  return (
    <>
      <h1>TodoApp</h1>
      <h4>React Context API</h4>
      <TaskForm />
      <div>
        <TaskList />
      </div>
      <button onClick={deleteAllTasks}>
        Delete All Tasks
      </button>
    </>
  );
};

export default Home;
