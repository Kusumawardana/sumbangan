import React from 'react';
import { Alert,Text,Image, View, StatusBar,StyleSheet,TextInput,Button,TouchableOpacity,ActivityIndicator,FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PacmanIndicator } from 'react-native-indicators';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Madoka,Hoshi,Sae,Isao } from 'react-native-textinput-effects';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; 

class donatur extends React.Component {
    static navigationOptions = {
      headerTitle: 'Donatur',
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
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        data: [],
        error: null,
        refreshing: false,
      };
      this._onRefresh = this._onRefresh.bind(this);
    }
    _onRefresh() {
      this.setState({refreshing: true});
      fetchData().then(() => {
        this.setState({refreshing: false});
      });
    }
  
    componentDidMount()  {
        const url = 'http://kusuma.projasawebsite.com/contohapi/sumbangan/donatur.php';
         this.setState({ loading: true });
        fetch (url)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("comp");
          console.log(responseJson);
          this.setState({
            data: responseJson,
            error: responseJson.error || null,
            loading: false,
            refreshing: false
          });
        }
      );
    }

    render() {
      return (
        <View style={{ }}>
                  <FlatList
          data={this.state.data}
          renderItem={({item}) =>
            <View style={styles.ListItem}>
              <View style={{flex: 0, flexDirection: "row"}}>
              <Image source={require('./image/profile.jpg')}
                style={{width: 30,height: 30,marginRight: 20}} 
              />
                            <Text style={styles.ListFirst}>{item.username}</Text>
              </View>
            </View>
        }
        />
        </View>
      );
    }
  }
  
  export default donatur

  const styles = StyleSheet.create({
  ListItem: {
      backgroundColor:'#BBDEFB',
      marginTop: 5,
      flex: 1
  },
  ListFirst: {
    fontSize: 20
  },
  ListItem: {
    backgroundColor:'white',
    marginTop: 5,
    flex: 1,
    padding: 20,
    flexDirection: 'row'
},
ListFirst: {
  fontSize: 20,
},
  
    });