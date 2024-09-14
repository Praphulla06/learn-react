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