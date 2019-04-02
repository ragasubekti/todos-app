import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addTodos } from "../modules/todos";

class AddTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  updateInput = input => {
    this.setState({ input });
  };

  onFormSubmit(e) {
    e.preventDefault();

    this.props.addTodos(this.state.input);

    this.setState({
      input: ""
    });

    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container">
        <section className="heading">
          <h1>Add Todos</h1>
          <Link className="button button-cancel" to="/">
            Cancel
          </Link>
        </section>

        <form onSubmit={e => this.onFormSubmit(e)} className="todos-form">
          <fieldset className="margin-bottom-25">
            <label htmlFor="todos-content">Content</label>
            <textarea
              name="todos-content"
              id="todos-content"
              className="todos-input"
              rows="10"
              cols="60"
              placeholder="Type your todos here..."
              onChange={e => this.updateInput(e.target.value)}
              value={this.state.input}
            />
          </fieldset>

          <button
            className="button button-add margin-to-25"
            to="/add"
            onClick={e => this.onFormSubmit(e)}
          >
            + Add
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodos }
)(AddTodos);
