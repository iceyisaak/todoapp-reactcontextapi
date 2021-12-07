import { useTodoContext } from '../../contexts/TodoContext';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';

import { MdOutlineClose } from 'react-icons/md';

import style from './Home.module.scss';

const Home = () => {

  const { deleteAllTasks } = useTodoContext();

  return (
    <>
      <div className={`${style['container']}`}>
        <main className={`${style['main']}`}>
          <MdOutlineClose onClick={deleteAllTasks} className={`${'pointer'} ${style['btn-delall']}`} />
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
