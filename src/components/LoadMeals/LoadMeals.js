import React, { useEffect, useState } from 'react';
import MealsDetails from '../Meals-Details/MealsDetails';
import ShowMeals from '../ShowMeals/ShowMeals';
import "./LoadMeals.css";

const LoadMeals = () => {
    const [meals, setMeals] = useState([]);
    const [meal, setMeal] = useState([]);



    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
            .then(res => res.json())
            .then(data => { setMeals(data.meals); })
    }, [])

    const mealsDetails = id => {


        let fetchUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;

        fetch(fetchUrl)
            .then(res => res.json())
            .then(data => { setMeal(data.meals); })

    }
    const handleSearch = event => {


        const searchedMeals = event.target.value;
        console.log(searchedMeals);





    }
    return (
        <div>
            <div className="search-container">
                <input type="text" placeholder="Search Your Favouite Meals Here" className="search-box" onChange={event => handleSearch(event)} />
            </div>
            <div className="meals-container">

                <div className="meals-data">
                    {
                        meals.map(meal => <ShowMeals
                            key={meal.idMeal}
                            meal={meal}
                            mealsDetails={() => mealsDetails(meal.idMeal)}>

                        </ShowMeals>)
                    }
                </div>
                <div className="meals-details">
                    {

                        meal.map(m => <MealsDetails m={m}></MealsDetails>)


                    }
                </div>
            </div>
        </div>
    );
};

export default LoadMeals;