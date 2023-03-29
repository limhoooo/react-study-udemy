import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // *class Type
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

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

  return (
    <div className="App">
      <Todos items={todos}>
        <p>아이들</p>
      </Todos>
    </div>
  );
}

export default App;
