import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import { TodoContextProvider } from './contexts/TodoContext';

ReactDOM.render(
  <React.StrictMode>
    <TodoContextProvider>
      <Home />
    </TodoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);