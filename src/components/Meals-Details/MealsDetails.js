import React from 'react';
import "./MealsDetails.css";

const MealsDetails = props => {
    console.log(props.m);
    const { strMealThumb, strMeal, strInstructions } = props.m
    return (
        <div className="details">
            <img src={strMealThumb} alt="" title={strInstructions} />
            <h2>{strMeal}</h2>
        </div>
    );
};

export default MealsDetails;