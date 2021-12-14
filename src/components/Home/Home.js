import { useTodoContext } from '../../contexts/TodoContext';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';

import { MdOutlineClose } from 'react-icons/md';

import style from './Home.module.scss';

const Home = () => {

  const { deleteAllTasks, tasks } = useTodoContext();

  const onDeleteAllTasks = () => {
    deleteAllTasks(tasks);
  };

  return (
    <>
      <div className={`${style['container']}`}>
        <main className={`${style['main']}`}>
          <MdOutlineClose onClick={onDeleteAllTasks} className={`${'pointer'} ${style['btn-delall']}`} />
          <header className={`${style['header']}`}>
            <h1 className={`${style['h1']}`}>TodoApp</h1>
            <h4 className={`${style['h4']}`}>React Context API</h4>
          </header>
          <TaskForm />
          <TaskList />
        </main>
      </div>
    </>
  );
};

export default Home;
