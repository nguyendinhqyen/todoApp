import React from "react";

/////////----------------Classs Component

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnclickDelete = (job) => {
    console.log("HandleOnclickDelete : ", job);
    this.props.deleteAJob(job);
  };
  render() {
    // let name = this.props.name;
    // let age = this.props.age;
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let Check = showJobs === true ? "showJobs=true" : "showJobs=false";
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <div>
            <div className="job-list">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></>
                    <span onClick={() => this.handleOnclickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </div>
        )}
      </>
    );
  }
}

////-----------------------Function Component
/*
const ChildComponent = (props) => {
  let { absc } = props;
  return (
    <div className="job-list">
      {absc.map((item, index) => {
        if (item.salary >= 600) {
          return (
            <div key={item.id}>
              {item.title} - {item.salary}
            </div>
          );
        }
      })}
    </div>
  );
};
*/

export default ChildComponent;
