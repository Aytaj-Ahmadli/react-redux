import React from "react";

import { useSelector } from "react-redux";

const Title = () => {
  const uygulamaninStatei = useSelector((state) => state);
  return (
    <div>
      <h1>TODO APP</h1>
      <p>Kayıtlı todo sayısı: {uygulamaninStatei.todosState.todos.length}</p>
      <p>
        Yapılanlar:
        {
          uygulamaninStatei.todosState.todos.filter(
            (item) => item.isDone === true
          ).length
        }{" "}
        Yapılmayanlar:
        {
          uygulamaninStatei.todosState.todos.filter(
            (item) => item.isDone === false
          ).length
        }
      </p>
    </div>
  );
};

export default Title;