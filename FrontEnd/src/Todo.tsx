import React from 'react'

export default function Todo() {
  return (
   <div>
    <nav className="d-flex justify-content-around navbar navbar-dark bg-black">
      <div className="container-profile">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvwf00lGTUM5dS2Nk1k99Rjr36a9sr1Ld8ci31CL5Mi7NZwSGci0jt4o8IaMNfuhyS_NU&usqp=CAU" alt="profile image"/>
        <span className="span-nav name">Nome do Usuário</span>
      </div>
      <span className="span-nav">Lista de tarefas</span>
      <button className="span-nav btn btn-black log-out">Sair</button>
    </nav>
   </div>
  )
}
