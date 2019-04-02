import {} from "react-redux";

const ADD_TODOS = "ADD_TODOS";
const REMOVE_TODOS = "REMOVE_TODOS";
const TOGGLE_TODOS = "TOGGLE_TODOS";

const initialState = {
  todos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            content: action.payload,
            completed: false,
            date: new Date()
          }
        ]
      };
    case REMOVE_TODOS:
      return {
        ...state
      };
    default:
      return state;
  }
}

export const addTodos = todos => ({ type: ADD_TODOS, payload: todos });
