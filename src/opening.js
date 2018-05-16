import React from 'react';
import { Alert,Text,Image, View, StatusBar,StyleSheet,TextInput,Button,TouchableOpacity,ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Madoka,Hoshi,Sae,Isao } from 'react-native-textinput-effects';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

export default class opening extends React.Component {
  static navigationOptions = {
    tabBarVisible: false,
    header: null,
  };
constructor(props) {
   super(props)
   this.state = {
     UserEmail: '',
     UserPassword: ''
   }
 }

daftar = () => {
  this.props.navigation.navigate('sign');
}

 UserLoginFunction = () =>{
 
  const { UserEmail }  = this.state ;
  const { UserPassword }  = this.state ;
  
  
 fetch('http://kusuma.projasawebsite.com/contohapi/sumbangan/login.php', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
  
     email: UserEmail,
  
     password: UserPassword
  
   })
  
 }).then((response) => response.json())
       .then((responseJson) => {
          if(responseJson === "Data benar")
          {
           this.props.navigation.navigate('menu', { Email: UserEmail });
          }
          else{
           Alert.alert(responseJson);
          }
       }).catch((error) => {
         console.error(error);
       });
   }
  render() {
    return (
      <View style={styles.MainContainer}>
          <StatusBar
            backgroundColor="#2ecc71"
            barStyle="light-content"
          />
          <View style={{marginLeft: 50,marginRight: 30,marginBottom: 20,flex: 0,flexDirection: 'row'}}>
            <Image source={require('./image/hands.png')}
              style={{width: 70,height: 70,marginRight: 20}} 
            />
            <View>
              <Text style={{color: 'white',fontSize: 20 }} >SUMBANGAN</Text>
              <Text style={{color: 'white',fontSize: 15 }}>the easiest way to share</Text>
              <Text style={{color: 'white',fontSize: 15 }}>to others</Text>
            </View>

          </View>

          <View style={styles.jarak}>
              <Madoka
                label={'Username or Email'}
                borderColor={'#aee2c9'}
                labelStyle={{ color: '#008445' }}
                inputStyle={{ color: '#f4a197' }}
                onChangeText={UserEmail => this.setState({UserEmail})}
              />
              <Madoka
                label={'Password'}
                borderColor={'#aee2c9'}
                labelStyle={{ color: '#008445' }}
                inputStyle={{ color: '#f4a197' }}
                onChangeText={UserPassword => this.setState({UserPassword})}
                secureTextEntry={true}
              />
          </View>
          <View style = {{margin: 30 }}>
            <TouchableOpacity 
              activeOpacity = { 0.5 } 
              style = { styles.tombol } 
              onPress = { this.UserLoginFunction}>
              <Text style = {{ color: "white",textAlign: "center" }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              activeOpacity = { 0.5 } 
              style = { styles.daftar } 
              onPress = { this.daftar}>
              <Text style = {{ color: "black",textAlign: "center" }}>Sign up</Text>
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