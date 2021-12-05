import { useState, useContext } from "react";
import { TodoContext } from '../../contexts/TodoContext';

// import style from './Home.module.scss';

const Home = () => {

  const {
    tast,
    setTask
  } = useContext(TodoContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit()');
    setText('');
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>TodoApp</h1>
      <h4>React Context API</h4>
      <form onSubmit={onSubmit}>

        <input
          type="text"
          onChange={onChangeHandler}
          placeholder='e.g. Shopping'
          value={text}
        />
        <button>
          Add
        </button>
      </form>
      <div>
        <ul>
          <li>
            {text}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
