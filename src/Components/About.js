import Userclass from "./Userclass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("parent Mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About us</h1>
        <h2>This is a React Series</h2>

        <Userclass name={"First"} location={"Srikakulam"} />
      </div>
    );
  }
}

export default About;
