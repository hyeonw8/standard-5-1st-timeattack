import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos, todoIsDone }) {
  return (
    <div>
      <h2>{todoIsDone === false ? 'Working...🔥' : 'Done ✅'}</h2>
      <div className='todoList'>
        {todos
          .filter((todo) => todo.isDone === todoIsDone)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
          ))}
      </div>
    </div>
  );
}
