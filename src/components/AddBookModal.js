import React, { useState } from "react";

export default function AddBookModal(props) {
  let [bookName, setBookName] = useState("");
  let [bookAuthor, setBookAuthor] = useState("");
  let [readStatus, setReadStatus] = useState("TBR");

  const clearModalData = () => {
    setBookName("");
    setBookAuthor("");
    setReadStatus("TBR");
  };

  return (
    <div className="mt-5 text-center">
      <button
        type="button"
        className="btn"
        data-toggle="modal"
        data-target="#addBookModal"
      >
        Add Book
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="addBookModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="addBookModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addBookModalLabel">
                Add Book Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={(e) => {
                  clearModalData();
                }}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <div className="row">
                    <label className="col-2 mr-2">Name</label>
                    <input
                      className="col-8 form-control"
                      type="text"
                      placeholder="Enter book name"
                      id="bookName"
                      name="bookName"
                      value={bookName}
                      onChange={(e) => {
                        setBookName(e.currentTarget.value);
                      }}
                    />
                  </div>
                  <div className="row mt-2">
                    <label className="col-2 mr-2">Author</label>
                    <input
                      className="col-8 form-control"
                      type="text"
                      placeholder="Enter author name"
                      id="bookAuthor"
                      name="bookAuthor"
                      value={bookAuthor}
                      onChange={(e) => {
                        setBookAuthor(e.currentTarget.value);
                      }}
                    />
                  </div>
                  <div className="row mt-2">
                    <label className="col-2 mr-2">Status</label>
                    <div className="input-group col-8 pr-0 pl-0">
                      <select
                        className="custom-select"
                        id="readStatus"
                        name="readStatus"
                        onChange={(e) => {
                          setReadStatus(e.currentTarget.value);
                        }}
                        value={readStatus}
                      >
                        <option value="TBR">TBR</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  clearModalData();
                }}
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  props.addBookToList(bookName, bookAuthor, readStatus);
                  clearModalData();
                }}
                data-dismiss="modal"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
