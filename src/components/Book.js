import React, { useState } from "react";
import { ReactComponent as Logo } from "../edit.svg";

export default function Book(props) {
  const statusToButtonClass = {
    TBR: "badge badge-warning",
    Ongoing: "badge badge-info",
    Completed: "badge badge-success",
  };

  return (
    <div className="row mt-2">
      <div className="col-4">{props.book.name}</div>
      <div className="col-4">{props.book.author}</div>
      <h5>
        <span className={statusToButtonClass[props.book.status]}>
          {props.book.status}
        </span>
        <button
          type="button"
          className="close ml-2"
          onClick={() => {
            props.changeReadStatus(props.index, "Completed");
          }}
        >
          <Logo className="logo" />
        </button>
      </h5>
    </div>
  );
}
