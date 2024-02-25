import React from "react";

export default function Footer(props) {
  return (
    <div className="fixed-bottom bg-dark text-white text-center">
      <div className="row">
        <h2 className="col-12">Total Books: {props.totalBooks}</h2>
      </div>
    </div>
  );
}
