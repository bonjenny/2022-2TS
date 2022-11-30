import { Component } from "react";
import classes from './CSS/User.module.css';

class User extends Component {
  componentWillUnmount() {
    console.log("User will unmount!");
  };

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  };
};

export default User;
