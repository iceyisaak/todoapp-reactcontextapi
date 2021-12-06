import { useTodoContext } from '../../contexts/TodoContext';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';

// import style from './Home.module.scss';

const Home = () => {

  const { clearTaskList } = useTodoContext();

  return (
    <>
      <h1>TodoApp</h1>
      <h4>React Context API</h4>
      <TaskForm />
      <div>
        <TaskList />
      </div>
      <button onClick={clearTaskList}>
        Clear Task List
      </button>
    </>
  );
};

export default Home;
