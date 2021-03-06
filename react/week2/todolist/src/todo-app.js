import React, { useState } from "react";
import "./App.css";
import todos from "./todos";
function Todo({ item, reMove, styling }) {
  return (
    <li>
      <h3 className={item.done === false ? "" : "checkedText"}>
        {item.description}
        <input type="checkbox" onChange={styling}></input>
      </h3>
      <button onClick={reMove}>Delete</button>
    </li>
  );
}

function AddTodo() {
  const [todoList, setTodoList] = useState(todos);

  // add new todo function
  function AddNewTodo() {
    setTodoList((initial) => [
      ...initial,
      {
        id: Math.floor(Math.random() * 10000),
        description: "Random Text",
        done: false,
      },
    ]);
  }

  //deleting todo items function
  function removeItem(key) {
    const newList = todoList.filter((item) => item.id !== key);
    setTodoList(newList);
  }

  // checked checkbox style change of the tasks functtion
  function setStyling(key) {
    console.log("clickjed");
    let newList = [];
    todoList.forEach((element) => {
      if (element.id === key) {
        if (element.done === true) {
          element.done = false;
        } else {
          element.done = true;
        }
        newList.push(element);
      } else {
        newList.push(element);
      }
    });
    setTodoList(newList);
  }
  return (
    <>
      <div>
        <button onClick={AddNewTodo}>Add Todo</button>
      </div>
      <ul>
        {todoList.length > 0 ? (
          todoList.map((item) => (
            <Todo
              item={item}
              key={item.id}
              reMove={() => removeItem(item.id)}
              styling={() => setStyling(item.id)}
            />
          ))
        ) : (
          <h3>No item!</h3>
        )}
      </ul>
    </>
  );
}

export default AddTodo;
