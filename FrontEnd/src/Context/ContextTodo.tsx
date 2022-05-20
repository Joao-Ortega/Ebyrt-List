import { createContext } from 'react';
// import { IInitialState } from '../interfaces/stateInter';

const TodoContext = createContext<any | null>(null);

export default TodoContext;
