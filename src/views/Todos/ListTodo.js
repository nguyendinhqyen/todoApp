import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import Color from "../HOC/Color";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "developer" },
      { id: "todo2", title: "tester" },
      { id: "todo3", title: "developer2" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    // let currenListTodo = this.state.listTodos;
    // currenListTodo.push(todo);
    this.setState({
      // listTodos: currenListTodo,
      listTodos: [...this.state.listTodos, todo], // spread syntax (...) đẩy todo vào lisTodos
    });
  };

  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    //Click save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];

      let objIndex = listTodosCopy.findIndex((item) => item.id === editTodo.id);

      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      //Update object's name property.
      // myArray[objIndex].name = "Laila";
      return;
    }

    //click edit
    this.setState({
      editTodo: todo,
    });
    console.log("check data edit", todo);
  };

  handleOnchangeEdittodo = (event) => {
    let editTodoCoppy = { ...this.state.editTodo };
    editTodoCoppy.title = event.target.value;
    this.setState({
      editTodo: editTodoCoppy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    // let listTodos = this.state.listTodos;
    // check mảng có rỗng hay ko? === 0 => true  : true => chưa click edit button
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log("check EMty", isEmptyObj);

    return (
      <>
        <p>Hello Simple TodoApp with ReactJS </p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />

          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {/* check các điều kiện khi click button edit
                  -- check đã click edit hay chưa
                  --
              */}
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnchangeEdittodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    {/* <input value={item.title} /> */}

                    {/*--------- Edit todolist------------- */}
                    <button
                      className="btn-edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>

                    {/* ----------- */}
                    <button
                      className="btn-delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Color(ListTodo);
