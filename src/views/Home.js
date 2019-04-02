import React, { Component } from "react";
import TodosItem from "../components/TodosItem";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <section className="heading">
          <h1>Todos</h1>
          <button className="button-add">+ Add Todo</button>
        </section>

        <section className="todos-list" id="todos-list">
          <TodosItem content="Title" date="now" />
        </section>
      </div>
    );
  }
}

export default Home;
