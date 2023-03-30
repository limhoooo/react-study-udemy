import React, { useRef } from "react";

interface NewTodoType {
  onAddTodo: (data: string) => void;
}
const NewTodo = ({ onAddTodo }: NewTodoType) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // const enteredText = (todoTextInputRef.current as HTMLInputElement).value;
    const enteredText = todoTextInputRef.current?.value;
    if (enteredText?.trim().length === 0) {
      return;
    }
    onAddTodo(enteredText as string);
    if (todoTextInputRef.current) todoTextInputRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
