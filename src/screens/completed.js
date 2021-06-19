import React, { Component } from "react";
class Completed extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <tr>
            <th>Sr No</th>
            <th>Task Name</th>
            <th>Completion Time</th>
            <th>Type of Task</th>
          </tr>
          {this.props.task.map((c, i) => (
            <tr>
              <td>{++i}</td>
              <td>{c.task}</td>
              <td>{c.time}</td>
              <td className={"btn btn-" + c.color}>{c.type}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Completed;
