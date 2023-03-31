import "./App.css";
import NewTodoUseState from "./components/NewTodoUseState";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";
import { useAppSelector } from "./hook/hooks";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const isLoading = useAppSelector((state) => state.todo.loading);

  // *class Type
  // const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  // *interface Type
  // const todos = [
  //   {
  //     text: "Learn React",
  //     id: new Date().toISOString(),
  //   },
  //   {
  //     text: "Learn Typescript",
  //     id: new Date().toISOString(),
  //   },
  // ];

  // as 로 다운캐스팅 (확실히 이 type이라고 지정해주는것)
  // const test = [
  //   {
  //     text: "Learn React",
  //     id: new Date().toISOString(),
  //   },
  // ] as Todo[];

  const onAddTodo = (text: string): void => {
    setTodos((state) => [...state, { ...new Todo(text) }]);
  };
  const handleOnClick = (id: string) => {
    setTodos((state) => {
      return state.filter((item) => item.id !== id);
    });
  };
  const loading = (
    <p style={{ width: "40rem", margin: "2rem auto" }}>로딩중입니다...</p>
  );
  return (
    <div className="App">
      <NewTodoUseState onAddTodo={onAddTodo} />
      {isLoading && loading}
      <Todos items={todos} handleOnClick={handleOnClick}>
        <p>props</p>
      </Todos>
    </div>
  );
}

export default App;
