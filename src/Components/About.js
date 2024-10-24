import Userclass from "./Userclass";
import React from "react";
import UserContext from "../utils/UserContext";

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
        <div>
          LoggedUser
          <UserContext.Consumer>
            {({ LoggedInUser }) => (
              <h2 className="text-xl font-bold">{LoggedInUser}</h2>
            )}
          </UserContext.Consumer>
        </div>
        <Userclass name={"First"} location={"Srikakulam"} />
      </div>
    );
  }
}

export default About;
