import React, { ReactNode } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// FC 를 쓰면 props 안의 chilren 을 쉽게 사용할 수 있다.
// 제네릭까지쓰면 FC 에 들어있는 chilren 과 들어올 props 의 타입을 같이 사용가능하다.
// 하지만 좋은 방법은 아니라고한다.
// 그 이유는 사용하지 않는 children 을 암시적으로 가지고 있다고 추정 하기때문에 안티 패턴이다.
// react 18v 부터는   FC의 암시적인 children이 삭제되었다고한다. 그러면 쓸 이유가 더더욱 줄어든다.

// const Todos: React.FC<{ items: string[] }> = (props) => {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//       {/* children type 없다고 에러남 */}
//       <li>{props.children}</li>
//     </ul>
//   );
// };
// export default Todos;

// 그래서 나는 그냥 명시해주기로 했다

interface PropsType {
  items: Todo[];
  children: ReactNode;
}

const Todos = ({ items, children }: PropsType) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text}>
          <span> ^^</span>
        </TodoItem>
      ))}
      <li>{children}</li>
    </ul>
  );
};

export default Todos;
