// import axios from 'axios';
import React, { useMemo, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import TodoContext from '../Context/ContextTodo';
import { IPropsChildren } from '../interfaces/PropsInter';
// import { LOGIN_URL } from '../Services/LoginURL';

export default function ContextProvider({ children }: IPropsChildren) {
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // const [msg, setMessage] = useState<void | string>('');
  // const [userData, setUserData] = useState<void | object>({});
  // const navigate = useNavigate();
  const [infoFromUser, setInfoUser] = useState<void | object>({});

  // const handleLogin = async ():Promise<void> => {
  //   await axios.post(LOGIN_URL, {
  //     email,
  //     password,
  //   }).then(() => navigate('/todo'))
  //     .catch(({ response: { data: { message } } }) => setMessage(message));
  // };

  // const handleUserData = (obj: object) => {
  //   setUserData(obj);
  // };

  const handleInfoUser = (value: object):void => {
    console.log(value);
    setInfoUser(value);
  };

  // const handleEmail = (value: string) => {
  //   setEmail(value);
  // };

  // const handlePassword = (value: string) => {
  //   setPassword(value);
  // };

  // const handleMessage = (value: string) => {
  //   setMessage(value);
  // };

  const myContext = useMemo(() => ({
    handleInfoUser,
    infoFromUser,
    // handleLogin,
    // handleEmail,
    // handlePassword,
    // handleMessage,
    // handleUserData,
    // email,
    // password,
    // msg,
    // userData,
  }), []);

  return (
    <TodoContext.Provider value={myContext}>
      { children }
    </TodoContext.Provider>
  );
}

ContextProvider.propTypes = {};
