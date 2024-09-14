import React from "react";
import PropTypes from "prop-types";

const UserName = (props) => {
  props.Greet();
  return (
    <div>
      <p>Username: {props.name}</p>
      <div>
        <span>Age: </span>
        <span>{props.age}</span>
        <br />
        <span>Email: </span>
        <span>{props.email}</span>
      </div>
    </div>
  );
};

export default UserName;

UserName.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  Greet: PropTypes.func.isRequired
};
