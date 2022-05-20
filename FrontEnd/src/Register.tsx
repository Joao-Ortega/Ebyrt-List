import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CREATE_USER } from './Services/LoginURL';

export default function Register() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const navigate = useNavigate();

  const createUser = async () => {
    setIsLoading(true);
    const body = {
      username: `${name} ${lastName}`,
      email,
      password,
    };
    await axios.post(CREATE_USER, body).then(({ data }) => {
        setMsg('Usuário cadastrado com Sucesso');
        setTimeout(() => setIsCreated(true), 1500);
    })
      .catch(({response: { data: { message } }}) => setMsg(message));
  };

  if (isCreated) {
    navigate('/');
  }
  return (
    <section className="text-center">
    <div className="p-5 bg-image"></div>
    <div className="card mx-4 mx-md-5 shadow-5-strong">
      <div className="card-body py-5 px-md-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-5">Registre-se agora</h2>
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control"
                      onChange={ ({ target }) => setName(target.value) }/>
                    <label className="form-label" htmlFor="form3Example1">Nome</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example2" className="form-control"
                      onChange={ ({ target }) => setLastName(target.value) }/>
                    <label className="form-label" htmlFor="form3Example2">Sobrenome</label>
                  </div>
                </div>
              </div>
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control"
                   onChange={ ({ target }) => setEmail(target.value) }/>
                <label className="form-label" htmlFor="form3Example3">Email</label>
              </div>
              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control"
                   onChange={ ({ target }) => setPassword(target.value) }/>
                <label className="form-label" htmlFor="form3Example4">Senha</label>
              </div>
              { !isLoading ? <button type="button" className="btn btn-danger btn-block mb-4" onClick={ createUser }>
                Criar conta </button> : 
                <div className="spinner-border text-danger" role="status">
                  <span className="sr-only"></span></div> }
            </form>
                  { msg ? <span>{msg}</span> : null }
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
