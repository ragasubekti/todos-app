import React, { Component } from "react";
import TodosItem from "../components/TodosItem";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
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
          {this.props.todos.map((item, index) => {
            return (
              <TodosItem content={item.content} date={item.date} key={index} />
            );
          })}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(Home);
