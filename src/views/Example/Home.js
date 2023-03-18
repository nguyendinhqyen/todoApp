import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }

  handleDeleteUser = (users) => {
    console.log("Check data Delete redux", users);
    this.props.deleteUserRedux(users);
  };
  handleCreateUser = () => {
    this.props.addUserRedux();
  };
  //HOC : higher order component
  render() {
    console.log(">>>>>>>>>>>>>Check Props redux", this.props.dataRedux);
    let ListUsers = this.props.dataRedux;
    return (
      <>
        <div>Hello world from homepage</div>
        <div>
          {ListUsers &&
            ListUsers.length > 0 &&
            ListUsers.map((item, idex) => {
              return (
                <div key={item.id}>
                  {idex + 1} - {item.name} &nbsp;{" "}
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
        </div>
        <button onClick={() => this.handleCreateUser()}>Add new</button>
      </>
    );
  }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
