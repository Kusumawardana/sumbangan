import React from 'react';
import { Alert,Text,Image, View, StatusBar,StyleSheet,TextInput,Button,TouchableOpacity,ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PacmanIndicator } from 'react-native-indicators';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Madoka,Hoshi,Sae,Isao } from 'react-native-textinput-effects';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; 

class HomeScreen extends React.Component {
    static navigationOptions = {
      headerTitle: 'Profile',
      headerLeft: null,
      headerStyle: {
        backgroundColor: '#2ecc71',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        textAlign:'center', 
        alignSelf:'center',
        flex:1,
      }
    };
    state = { animating: true }
  
    closeActivityIndicator = () => setTimeout(() => this.setState({ 
       animating: false }), 6000)
  
    componentDidMount = () => this.closeActivityIndicator()
    render() {
      const animating = this.state.animating
      const { navigation } = this.props;
      const Email = navigation.getParam('Email', 'NO-ID');
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar
              backgroundColor="#27ae60"
              barStyle="light-content"
            />
            <ActivityIndicator
                 animating = {animating}
                 color = '#bc2b78'
                 size = "large"
                 style = {styles.activityIndicator}
            />
            <Image source={require('./image/profile.jpg')}
              style={styles.gambar} 
            />
            <Text style={{ color : "gray",fontSize: 24,margin: 20}}> { this.props.navigation.state.params.Email } </Text>
        </View>
      );
    }
  }

  export default HomeScreen

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