import React from "react";
import "./todostyle.css";

const Todolist = (props) => {
  return (
    <>
      <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true" />
        <li>{props.text}</li>;
      </div>
    </>
  );
};

export default Todolist;
