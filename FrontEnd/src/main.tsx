import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextProvider from './Components/ContextProvider';
import Login from './Login';
import Register from './Register';
import Todo from './Todo';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
