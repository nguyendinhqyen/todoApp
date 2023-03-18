import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
import Color from "../HOC/Color";
class MyComponent extends React.Component {
  /***
   * JSX  => return block
   *
   */
  // state = {
  //   name: "Eric",
  //   chanel: "Hoi Dan IT",
  // };
  // handleOnChangeName = (event) => {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // };
  // handleOnClickMeButton = () => {
  //   alert("click me");
  // };

  // render() {
  //   return (
  //     <>

  //       <div className="first">
  //         <input
  //           value={this.state.name}
  //           type="text"
  //           onChange={(event) => this.handleOnChangeName(event)}
  //         />
  //         My name is {this.state["name"]}
  //       </div>
  //       <div className="second">hello my component age {this.state.age}</div>

  //       <div className="third">
  //         <button onClick={() => this.handleOnClickMeButton()}>click me</button>
  //       </div>
  //     </>
  //   );
  // }

  //////////////////////////////////////

  state = {
    arrJobs: [
      { id: "job1", title: "Developer", salary: "500" },
      { id: "jobb2", title: "Developer2", salary: "600" },
      { id: "jobbb3", title: "Developer3", salary: "700" },
    ],
  };

  addNewJob = (job) => {
    console.log("check job from parent : ", job);
    // let currentJob = this.state.arrJobs;
    // currentJob.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
      //arrJobs: currentJob,
    });
  };

  deleteAJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };

  render() {
    console.log(">>>>>call render :", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}
export default Color(MyComponent);
