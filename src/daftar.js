import React from 'react';
import { Alert,Text,Image, View, StatusBar,StyleSheet,TextInput,Button,TouchableOpacity,ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PacmanIndicator } from 'react-native-indicators';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Madoka,Hoshi,Sae,Isao } from 'react-native-textinput-effects';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

export default class daftar extends React.Component {
    static navigationOptions = {
      tabBarVisible: false,
      header: null,
    };
    constructor(props) {
      super(props)
      this.state = {
        UserName: '',
        UserEmail: '',
        UserPassword: '',
      }
    }
  
  UserRegistrationFunction = () =>{
    fetch('http://kusuma.projasawebsite.com/contohapi/sumbangan/daftar.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        name: this.state.UserName,
        email: this.state.UserEmail,
        password: this.state.UserPassword
    
      })
    
    }).then((response) => response.json())
          .then((responseJson) => {
            Alert.alert(responseJson);
          }).catch((error) => {
            console.error(error);
          });
  }
    render() {
      return (
        <View style={styles.MainContainer}>
          <Text style= {styles.rata}>Daftar AkunS</Text>
          <View style={styles.batas}>    
            <Sae
                label={'Username'}
                iconClass={FontAwesomeIcon}
                iconName={'pencil'}
                iconColor={'green'}
                labelStyle={{ color: '#008445' }}
                // TextInput props
                autoCapitalize={'none'}
                autoCorrect={false}
                inputStyle={{ color: '#039BE5' }}
                onChangeText={name => this.setState({UserName : name})}
            />
            <Sae
                label={'Email'}
                iconClass={FontAwesomeIcon}
                iconName={'pencil'}
                iconColor={'green'}
                labelStyle={{ color: '#008445' }}
                inputStyle={{ color: '#039BE5' }}
                // TextInput props
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={email => this.setState({UserEmail : email})}
            />
            <Sae
                label={'Password'}
                iconClass={FontAwesomeIcon}
                iconName={'pencil'}
                iconColor={'green'}
                labelStyle={{ color: '#008445'}}
                inputStyle={{ color: '#039BE5' }}
                // TextInput props
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={password => this.setState({UserPassword : password})}
                secureTextEntry={true}
            />
          </View>
          
          <View style = {{margin: 30 }}>
            <TouchableOpacity 
              activeOpacity = { 0.5 } 
              style = { styles.tombol } 
              onPress = { this.UserRegistrationFunction}>
              <Text style = {{ color: "white",textAlign: "center" }}>daftar</Text>
            </TouchableOpacity>
          </View>
  
          
  </View>
      );
    }
  }

  const styles = StyleSheet.create({
    MainContainer :{
      justifyContent: 'center',
      flex:1,
      backgroundColor: "#2ecc71"
    },
    batas : {
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 30,
      paddingTop: 10,
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