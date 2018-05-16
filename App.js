import React from 'react';
import { Alert,Text,Image, View, StatusBar,StyleSheet,TextInput,Button,TouchableOpacity,ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Madoka,Hoshi,Sae,Isao } from 'react-native-textinput-effects';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import opening from "./src/opening"
import daftar from "./src/daftar"
import HomeScreen from "./src/Homescreeen"
import donatur from "./src/donatur"
import terima from "./src/terima"

export default class App extends React.Component {
  render() {
    return <Mulai />;
  }
}


const Mulai = StackNavigator({
  open: { screen: opening },
  sign: { screen: daftar },
  menu: { screen: TabNavigator({
    Profile: {screen: HomeScreen},
    Penerima: {screen: terima},
    Donatur: {screen: donatur}
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Profile') {
          iconName = `user${focused ? '' : ''}`;
        } else if (routeName === 'Penerima') {
          iconName = `group${focused ? '' : ''}`;
        } else if (routeName === 'Donatur') {
          iconName = `handshake-o${focused ? '' : ''}`;
        }
        return <FontAwesomeIcon name={iconName} size={21} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#2ecc71',
      inactiveTintColor: 'rgba(165, 165, 165, 0.5)',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
),navigationOptions: ({ navigation }) => ({
  headerTitle: "SUMBANGAN",
  headerLeft: null,
  headerStyle: {
    backgroundColor: '#2ecc71',
  },
  headerTintColor: 'transparent',
  headerTitleStyle: {
    textAlign:'center', 
    alignSelf:'center',
    flex:1,
    fontSize: 15,
    color: "white",
  }
}),

}
  
})


const styles = StyleSheet.create({
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    backgroundColor: "#2ecc71"
  },
  jarak : {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 15,
    paddingTop: 15,
    backgroundColor: "white",
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 15,
  },
  rata: {
    fontSize: 20,
    color: "white",
    textAlign: 'center', 
    paddingBottom: 10,
  },
  lineStyle:{
    borderBottomColor: '#7f8c8d',
    borderBottomWidth: 0.8,
  },
  tombol: {
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#27ae60',
    marginBottom: 20,
    width: "100%",
    borderRadius: 8,
  },
  daftar: {
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'white',
    marginBottom: 20,
    width: "100%",
    borderRadius: 8,
  },
  gambar: {
    height: 100,
    width: 100,
    alignContent: 'center',
  },

  });