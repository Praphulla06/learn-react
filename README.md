# *React JS Notes*

### *Install npm dependecies*

- *Install node lts*
- ```npm create vite@latest```
- ![alt text](image.png)
- ```cd project-name```
- ```npm install```
- ```npm run dev```

### *Project File Overview*

![alt text](image-1.png)

### *Create New Components*

```jsx
import React from 'react'

const Practice = () => {
  return (
    <div>
      New Components
    </div>
  )
}

export default Practice

```

### *Component Props*

#### *App.jsx*

```jsx
import React from 'react'
import User from './components/User'
const App = () => {
    return (
        <div>
      <User name="Praphulla" age={18}/>
    </div>
  )
}

export default App
```

#### *User.jsx*

```jsx
import React from 'react'

const User = (props) => {
  return (
    <div>
      Username: {props.name}
      Age: {props.age}
    </div>
  )
}

export default User

```

### *Type Checking Props*

### *App.jsx*

```jsx
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

```
### *UserName.jsx*

```jsx
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

```
### *UserProfile.jsx*

```jsx
import React from "react";
import PropTypes from "prop-types"
const UserProfile = (props) => {
  return (
    <div>
      <section>
        <span>Favorite Foods:</span>
        <ul>
          <li>{props.FavoriteFoods[0].name}</li>
          Rs {props.FavoriteFoods[0].price}
          <li>{props.FavoriteFoods[1].name}</li>
          Rs {props.FavoriteFoods[1].price}
          <li>{props.FavoriteFoods[2].name}</li>
          Rs {props.FavoriteFoods[2].price}
        </ul>
      </section>
    </div>
  );
};

export default UserProfile;


UserProfile.propTypes = {
  FavoriteFoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  )
}
```

### *Children Components*

- *UserName and UserProfile components are children component of App (parent) component*
- *UserName and UserProfile components are sibiling components*

### *Fragments*

- *A React Fragment lets you return multiple elements from a component without adding extra nodes to the DOM.*

```jsx
import React from 'react'

const User = (props) => {
  return (
    <React.Fragment>
      Username: {props.name}
      Age: {props.age}
    </React.Fragment>
  )
}

export default User

```
#### *OR*
```jsx
import React from 'react'

const User = (props) => {
  return (
    <>
      Username: {props.name}
      Age: {props.age}
    </>
  )
}

export default User

```