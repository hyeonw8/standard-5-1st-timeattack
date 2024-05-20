import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { useState } from 'react';

export default function TodoContainer() {
  const initialState  = [
    {
      id: 0,
      title: '리액트 공부',
      contents: '리액트 강의듣기',
      isDone: false,
    },
    {
      id: 1,
      title: '스탠다드 과제',
      contents: '타임어택 계산기 다시해보기',
      isDone: true,
    }
  ]

  const [todos, setTodos] = useState(initialState);

  return (
    <div className='layout'>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} todoIsDone={false}/>
      <TodoList todos={todos} setTodos={setTodos} todoIsDone={true} />
    </div>
  );
}
