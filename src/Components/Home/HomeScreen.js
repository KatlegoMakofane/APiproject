import React from 'react'
import { StyleSheet, Text, View ,Button,Image} from 'react-native';
import pic from '../../../assets/HomeScreen/nutrition.jpg'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container }>
        <View style={{position:'absolute',height:'100%',width:'100%'}}>
            <Image source={pic} style={{flex:1,height:null,width:null}}/>
        </View>
    <Text>Details Screen</Text>
    <Button
      title='Search Nutritios Food'
      backgroundColor='green'
      onPress={() => navigation.navigate('Seacrh')}
    >
   
    </Button>
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    Button:{
        flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
     
      
    },
    Text:{

    }
   
  })