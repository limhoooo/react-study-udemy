import React, { useCallback, useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';



const AvailableMeals = () => {

    const [meals, setMeals] = useState([])
    const fetchMeals = useCallback(async () => {
        const res = await fetch('https://react-test-d49b3-default-rtdb.firebaseio.com//meals.json');
        const data = await res.json();
        const loadedMeals = [];
        for (const key in data) {
            loadedMeals.push({
                id: key,
                name: data[key].name,
                price: data[key].price,
                description: data[key].description
            })
        }
        setMeals(loadedMeals);
    }, [])
    useEffect(() => {
        fetchMeals();
    }, [fetchMeals])

    const mealsList = meals.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);
    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
};

export default AvailableMeals;