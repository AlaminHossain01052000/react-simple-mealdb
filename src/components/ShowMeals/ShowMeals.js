import React from 'react';
import "./ShowMeals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const ShowMeals = (props) => {
    const { strMealThumb, strMeal, strInstructions } = props.meal;

    return (
        <div className="card">
            {/* <video width="320" height="240" controls>
                <source src={strYoutube} type="video/mp4" />

                Your browser does not support the video tag.
            </video> */}
            <img src={strMealThumb} alt="" />
            <h1 style={{ textAlign: "center", color: "#341f97" }}>{strMeal}</h1>
            <p
                style={{ color: "#c8d6e5", fontStyle: "italic" }}>
                "{strInstructions.slice(0, 200)}"
            </p>
            <button className="more-details-btn" onClick={() => props.mealsDetails(props.meal.idMeal)}>
                More Details
                <FontAwesomeIcon icon={faArrowAltCircleRight}
                    style={{ marginLeft: "20px", fontSize: "16px" }}
                />

            </button>
        </div>
    );
};

export default ShowMeals;