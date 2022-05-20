import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoContext from './Context/ContextTodo';

export default function Todo() {
  const { infoFromUser } = useContext(TodoContext);
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(infoFromUser.username);
    console.log(infoFromUser);
  }, [infoFromUser]);

  return (
    <div>
      <nav className="d-flex justify-content-around navbar navbar-dark bg-black">
        <div className="container-profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvwf00lGTUM5dS2Nk1k99Rjr36a9sr1Ld8ci31CL5Mi7NZwSGci0jt4o8IaMNfuhyS_NU&usqp=CAU"
            alt="profile"
          />
          <span className="span-nav name">{ user }</span>
        </div>
        <span className="span-nav">Lista de tarefas</span>
        <button
          type="button"
          className="span-nav btn btn-black log-out"
          onClick={(): void => navigate('/')}
        >
          Sair
        </button>
      </nav>
    </div>
  );
}
