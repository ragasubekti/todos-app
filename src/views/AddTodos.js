import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddTodos extends Component {
  render() {
    return (
      <div className="container">
        <section className="heading">
          <h1>Add Todos</h1>
          <Link className="button button-cancel" to="/">
            Cancel
          </Link>
        </section>

        <form action="#" className="todos-form">
          <fieldset className="margin-bottom-25">
            <label htmlFor="todos-content">Content</label>
            <textarea
              name="todos-content"
              id="todos-content"
              className="todos-input"
              rows="10"
              cols="60"
              placeholder="Type your todos here..."
            />
          </fieldset>

          <Link className="button button-add margin-to-25" to="/add">
            + Add
          </Link>
        </form>
      </div>
    );
  }
}

export default AddTodos;
