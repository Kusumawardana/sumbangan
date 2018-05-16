import React from 'react';
import { Alert,Text,Image,FlatList,RefreshControl, View, StatusBar,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator,ThemeProvider } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GridList from 'react-native-grid-list';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; 
class terima extends React.Component {
    static navigationOptions = {
      headerTitle: 'Penerima',
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
        const url = 'http://kusuma.projasawebsite.com/contohapi/sumbangan/penerima.php';
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

//     GetStudentIDFunction=(nim, nama, kelas, semester)=>{
 
//       this.props.navigation.navigate('ubah', { 

//         nim: nim,
//         nama: nama,
//         kelas: kelas,
//         semester: semester

//       });

//  }
_keyExtractor = (item, index) => item.id
    render() {
      return (
        <View style={styles.MainContainer}>
          <GridList
            showSeparator
            data={this.state.data}
            numColumns={2}
            renderItem={({item}) =>
              <View>
                <View style={{backgroundColor: "white",margin: 10,padding: 20,borderRadius: 5, height:200, minHeight:50, maxHeight:200, }}>
                  <View style={{justifyContent: "center",alignItems: 'center', marginBottom: 10}}>
                    <Image source={{uri: item.gambar}} style={{width: 70, height: 70, }} />
                  </View>
                  
                  <Text>nama: {item.nama}</Text>
                  <Text>Deskripsi: {item.deskripsi}</Text>
                </View>

              </View>
          }
          />
        </View>
      );
    }
  }

  export default terima

const styles = StyleSheet.create({
  MainContainer :{
    flex:1,
    alignContent: 'center',
  },
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#FCFCFE',
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