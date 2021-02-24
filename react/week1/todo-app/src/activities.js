import React from "react";

function HeaderTitle() {
  return (
    <>
      <h1>Todo list</h1>
    </>
  );
}

function ListItems(props) {
  return (
    <>
      <ol>
        <li>
          {props.task},{props.deadlineDate}
        </li>
      </ol>
    </>
  );
}

function Activities(props) {
  return (
    <>
      <HeaderTitle />

      {props.TodoList.map((todo) => {
        return <ListItems task={todo.task} deadlineDate={todo.deadlineDate} />;
      })}
    </>
  );
}
export default Activities;
