// MEDIUM & HARD
import React, { Component } from "react";

export default class Basicinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        { id: 1, name: "John Doe", age: "45", job: "Instructor" },
        { id: 2, name: "Jane Doe", age: "32", job: "Instructor" },
        { id: 3, name: "Jack Doe", age: "66", job: "Instructor" },
        { id: 4, name: "Janet Doe", age: "32", job: "Instructor" },
        { id: 5, name: "Jaden Doe", age: "43", job: "Instructor" },
      ],
    };
  }

  render() {
    return (
      <div className="person">
        name: {this.props.info.person.name} <br></br>
        age: {this.props.info.person.age} <br></br>
        dob: {this.props.info.person.dob} <br></br>
        <div className="instructors">
          <ul>
            {this.state.person.map((d) => (
              <li key={d.id}>
                name: {d.name} <br></br>
                age: {d.age} <br></br>
                dob: {d.dob}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
