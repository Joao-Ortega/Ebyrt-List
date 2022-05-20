import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LOGIN_URL } from './Services/LoginURL';
import TodoContext from './Context/ContextTodo';
import { IInitialState } from './interfaces/stateInter';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [msg, setMessage] = useState<void | string>(undefined);
  const navigate = useNavigate();
  const {
    handleInfoUser,
  } = useContext(TodoContext) as IInitialState;

  const handleLogin = async ():Promise<void> => {
    await axios.post(LOGIN_URL, {
      email,
      password,
    }).then(({ data }) => {
      console.log(data);
      handleInfoUser(data);
      navigate('/todo');
    })
      .catch(({ response: { data: { message } } }) => setMessage(message));
  };

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 text-black">
            <div className="px-5 ms-xl-4">
              <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" />
              <span className="h1 fw-bold mb-0">App Todo</span>
            </div>
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: '20rem' }}>
                <h3 className="fw-normal mb-3 pb-3">Fazer Login</h3>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example18"
                    className="form-control form-control-lg"
                    onChange={({ target }) => setEmail(target.value)}
                  />
                  <label className="form-label" htmlFor="form2Example18">Email</label>
                </div>
                {msg ? <span>{msg}</span> : null}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example28"
                    className="form-control form-control-lg"
                    onChange={({ target }) => setPassword(target.value)}
                  />
                  <label className="form-label" htmlFor="form2Example28">Senha</label>
                </div>
                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-danger btn-lg btn-block"
                    type="button"
                    onClick={handleLogin}
                  >
                    Entrar
                  </button>
                </div>
                <p>
                  Não tem uma conta?
                  {' '}
                  <a href="/register" className="link-info">Registre-se aqui</a>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-8 px-0 d-none d-sm-block">
            <img
              src="https://conteudo.imguol.com.br/c/entretenimento/65/2018/10/10/turbine-5-foto-abre-1539199563090_v2_1x1.png"
              alt="Login"
              className="w-100 vh-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
