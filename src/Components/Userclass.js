import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: { name: "Dummy", location: "Default" },
    };

    console.log(this.props.name + "children constructor");
  }
  async componentDidMount() {
    const fetchdata = await fetch("https://api.github.com/users/765990baggu");
    const json = await fetchdata.json();
    this.setState({
      userinfo: json,
    });
    console.log(json);
    console.log(this.props.name + "children DidMount component");
  }
  componentDidUpdate() {
    console.log("Component DidUpdate");
  }
  componentWillUnmount() {
    console.log("component willUnMount");
  }
  render() {
    const { name, location } = this.state.userinfo;

    console.log(this.props.name + "children render ");
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: Ram@765</h4>
      </div>
    );
  }
}

export default Userclass;
