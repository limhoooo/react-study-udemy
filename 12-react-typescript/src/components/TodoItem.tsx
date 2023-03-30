import { ReactNode } from "react";
import Todo from "./../models/todo";
import classes from "./TodoItem.module.css";
import { todoActions } from "./../store/todoSlice";
import { useAppDispatch } from "../hook/hooks";
// 만약 class 로 만든 type 에 다른 타입을 추가하고싶다면
// 1.
// class child extends Todo {
//   children: ReactNode;
// }
// 2.

interface child extends Todo {
  children: ReactNode;
  handleOnClick: (id: string) => void;
}

const TodoItem = ({ id, text, children, handleOnClick }: child) => {
  const dispatch = useAppDispatch();
  const clickhandleOnClick = () => {
    dispatch(todoActions.removeItem(id));
    //handleOnClick(id);
  };
  return (
    <li className={classes.item}>
      {text}
      {children}

      <button onClick={clickhandleOnClick}>X</button>
    </li>
  );
};

export default TodoItem;
