import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Components/Home/HomeScreen';
import SearchTabNavigator from './src/Components/Search/SearchTabNavigator';


export default function App() {
  
  return (
    <View style={styles.container}>
      
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  name="Home" options={{ headerShown:false }} component={HomeScreen}/>
        <Stack.Screen  name="Seacrh" component={SearchTabNavigator}/>
      
        
       
      
        </Stack.Navigator>
      </NavigationContainer>
  
    </View>
  );
}
const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});
