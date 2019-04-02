import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

class TodosItem extends Component {
  onTodosDone() {
    alert("done!");
  }

  onTodosRemove() {
    alert("delete!");
  }

  render() {
    return (
      <div className="todos-item">
        <div className="todos-content">
          <p className="todos-item-content">{this.props.content}</p>
          <p className="todos-item-date">{this.props.date}</p>
        </div>
        <div className="todos-action">
          <button className="flat-button" onClick={this.onTodosDone}>
            <FontAwesomeIcon icon={faCheck} className="todos-check" />
          </button>
          <button className="flat-button" onClick={this.onTodosRemove}>
            <FontAwesomeIcon icon={faTrash} className="todos-delete" />
          </button>
        </div>
      </div>
    );
  }
}

export default TodosItem;
