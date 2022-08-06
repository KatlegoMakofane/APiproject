import React, { useState } from "react";
import MealList from "./MealList";

import { View } from "react-native";


function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState('');

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <View >
      <View className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </View>
      {mealData && <MealList mealData={mealData} />}
    </View>
  );
}

export default App;
