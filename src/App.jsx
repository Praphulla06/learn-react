import React from "react";
import UserProfile from "./components/UserProfile";
import UserName from "./components/UserName";
const App = () => {
  const greet = () => {
    console.log("Hello, World");
  };
  return (
    <div>
      <h1>Hello, World</h1>
      <UserName
        name="Praphulla"
        age={18}
        email="praphullamall62@gmail.com"
        Greet={greet}
      />
      <UserProfile
        FavoriteFoods={[
          {
            name: "Pizza",
            price: 650,
          },
          {
            name: "Cheese Balls",
            price: 450,
          },
          {
            name: "Grilled Chicken",
            price: 490,
          },
        ]}
      />
    </div>
  );
};

export default App;
