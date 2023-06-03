import React from "react";

import { useSelector } from "react-redux";

import SingleTodo from "./SingleTodo";



const ListTodos = () => {
  const uygulamaninStatei = useSelector((state) => state);
  return (
    <div>
      {uygulamaninStatei.todosState.todos.length === 0 && (
        <p>Henüz Kayıtlı Bir Todo Yok</p>
      )}
      {uygulamaninStatei.todosState.todos.length > 0 && (
        <>
          {uygulamaninStatei.todosState.todos.map((todo) => (
            <SingleTodo todo={todo} key={todo.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default ListTodos;
