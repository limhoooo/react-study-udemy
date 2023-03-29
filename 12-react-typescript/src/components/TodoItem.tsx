import { ReactNode } from "react";
import Todo from "./../models/todo";

// 만약 class 로 만든 type 에 다른 타입을 추가하고싶다면
// 1.
// class child extends Todo {
//   children: ReactNode;
// }
// 2.
interface child extends Todo {
  children: ReactNode;
}

const TodoItem = ({ text, children }: child) => {
  return (
    <li>
      {text}
      {children}
    </li>
  );
};

export default TodoItem;
