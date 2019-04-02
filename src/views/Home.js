import React, { Component } from "react";
import TodosItem from "../components/TodosItem";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <section className="heading">
          <h1>Todos</h1>
          <Link className="button button-add" to="/add">
            + Add
          </Link>
        </section>

        <section className="todos-list" id="todos-list">
          <TodosItem content="Title" date="now" />
          <TodosItem content="Title" date="now" />
          <TodosItem content="Title" date="now" />
          <TodosItem content="Title" date="now" />
          <TodosItem content="Title" date="now" />
        </section>
      </div>
    );
  }
}

export default Home;
