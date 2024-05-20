export default function TodoItem({ todo, todos, setTodos}) {
  const { id, title, contents, isDone } = todo;

  const deleteTodo = (id) => {
    return setTodos(todos.filter(todo =>  todo.id !== id));
  }

  const toggleTodo = (id) => {
    return setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !isDone} : todo));
  }

  return (
    <div className="todoItemBox">
      <div className="textBox">
        <h4>{title}</h4>
        <p>{contents}</p>
      </div>
      <div className="buttonBox">
        <button className="todoButton" onClick={() => deleteTodo(id)}>삭제</button>
        <button className="todoButton" onClick={() => toggleTodo(id)}>{isDone === false ? '완료' : '취소'}</button>
      </div>
    </div>
  );
}
