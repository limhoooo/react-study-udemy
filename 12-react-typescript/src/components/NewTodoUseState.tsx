import React, { useRef, useState } from "react";
import classes from "./NewTodo.module.css";
import { postTodo, todoActions } from "../store/todoSlice";
import { useAppDispatch } from "../hook/hooks";
import { fetchTodo } from "./../store/todoSlice";

interface NewTodoType {
  onAddTodo: (data: string) => void;
}
const NewTodo = ({ onAddTodo }: NewTodoType) => {
  const dispatch = useAppDispatch();

  const [todoText, setTodoText] = useState<string>("");

  // React.ChangeEvent – onChange 이벤트 등에 사용
  // React.MouseEvent – onClick 이벤트 등에 사용
  // React.KeyboardEvent – onKeydown, onKeyup 이벤트 등에 사용
  // React.FormEvent – <form> 태그의 onSubmit 등에 사용

  //** onChange Event */
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  //** onClick Event */
  // const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //
  // };

  //** onKey Event */
  // const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //   }
  // };

  //** onSubmit Event */
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // const enteredText = (todoTextInputRef.current as HTMLInputElement).value;
    if (todoText?.trim().length === 0) {
      return;
    }
    dispatch(postTodo(todoText));
    setTimeout(() => {
      dispatch(fetchTodo());
    }, 500);
    //onAddTodo(todoText as string);
    setTodoText("");
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" value={todoText} id="text" onChange={handleOnChange} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
