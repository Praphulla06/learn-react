import React, { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {loggedIn ? (
        <div>
          <span>Logged In</span>
          <h1>Welcome User</h1>
        </div>
      ) : (
        <div>
          <span>Not Logged In</span>
          <h1>Please Log In</h1>
        </div>
      )}
    </div>
  );
};

export default App;
