import React, { useState, useEffect } from "react";
import{StyleSheet,View,Text,Image} from 'react-native'

 function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <View style={styles.container }>
      <Text title>{meal.title}</Text>
     <Image 
      style={styles.stretch}
     source={imageUrl} alt="recipe"/> 
      <View className="instructions">
        <Text>Preparation time: {meal.readyInMinutes} minutes</Text>
        <Text>Number of servings: {meal.servings}</Text>
      </View>

      <Text style={styles.lin}> <a href={meal.sourceUrl}>Go to Recipe</a></Text>
    </View >
  );
}
export default  Meal;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    Button:{
        flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
     
      
    },
    title:{
        fontSize:50,
        fontWeight:300,
        alignItems: 'center',
        justifyContent: 'center',
        color:'red',
        marginTop:20
    },
   Image:{
    width:500,
    height:500,
    backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
   },
   lin:{
    backgroundColor:'aqua',
    width:200,
    height:60,
    fontSize:30,
    borderRadius:60
   },
   stretch: {
    width: 500,
    height: 400,
    resizeMode: 'stretch',
    borderRadius:60
  },
  })