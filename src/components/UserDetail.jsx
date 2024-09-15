import React from "react";

const UserDetail = ({user}) => {
  return (
    <div className="border-orange-400 m-2 p-2 border-2" key={user.id}>
      <b>User ID: </b> <span>{user.id}</span>
      <br />
      <b>Username: </b> <span>{user.username}</span>
      <br />
      <b>User Email: </b> <span>{user.userEmail}</span>
    </div>
  );
};

export default UserDetail;
