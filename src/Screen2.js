import React, { Component } from 'react';
import Realm from 'realm';
import {
  Text,
  View,
  FlatList,
  Button
} from 'react-native';
import {FilmsSchema} from './FilmsSchema';

class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = { realm: null, data: null, isRefreshing: false };
  }
  
  fetchFilms() {
   //on refresh ei toimi koska kattoo onko array length suurempi kuin 0 !!!
    Realm.open({schema: [FilmsSchema], deleteRealmIfMigrationNeeded: true})
    .then(realm => {
      if (realm.objects('Films').length > 0) {
        console.log("munloki: Films already loaded!");
        console.log("munloki: ", realm.objects('Films'));
        const normalObject = Array.from(realm.objects('Films'));
        console.log(normalObject);
        this.setState({ data: normalObject, isRefreshing: false });
        //realm.close();
      } else {
        console.log("munloki: Loading films!");
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          responseJson.movies.map(movie => {
            realm.write(() => {
              let r = realm.create('Films', movie);
              console.log("munloki: added film ", r);
            });
          })
          const normalObject = Array.from(realm.objects('Films'));
          this.setState({ data: normalObject, isRefreshing: false });
          //realm.close();
        }).catch((error) =>{
          console.error(error);
        });
      }
    });
  }
  componentWillMount() {
    this.fetchFilms();
  }
  componentDidUpdate(prevProps, prevState) {
    if (!(prevState.data && this.state.data)) {return;}
    if ((this.state.data.length < prevState.data.length) && this.state.data.length === 0) {
      console.log("Fetching again!");
      this.fetchFilms();
    }
  }
//  onRefresh() {
//    this.setState({ isRefreshing: true }, () => { this.fetchFilms() });
//  }

onRefresh = async () => {


      this.fetchFilms();



};
  buttonPressed(event) {
    console.log("munloki: the button was clicked!");
    console.log(event);
//    var array = this.state.data;
//    array.splice(event, 1);
//    this.setState({data: array });
    Realm.open({schema: [FilmsSchema], deleteRealmIfMigrationNeeded: true})
    .then(realm => {
      const title = realm.objects('Films')[event].title;
      realm.write(() => {
        realm.delete(realm.objects('Films')[event]);
        const normalObject = Array.from(realm.objects('Films'));
        console.log(normalObject);
        this.setState({ data: normalObject });
      });
    });
    //this.setState({data: this.state.data.splice(event,1)});
    //this.forceUpdate()
  }
  renderItem({item, index}) {
    let rowBackground = index % 2 === 0 ? '#FFFFCC' : '#FFFFFF';
    return (
      <View style={{padding: 8, flex:1, flexDirection: 'row', height: 60, backgroundColor: rowBackground }} >
        <Text style={{flex:1}} >{item.title}, {item.releaseYear}</Text>
        <View style={{height: 1}}><Button style={{flex:1}} onPress={() => this.buttonPressed(index)} title="Delete"/></View>
      </View>
    );
  }
  render() {
    const list = this.state.data && this.state.data.length > 0
      ? (<FlatList
          data={this.state.data}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (<View style={{height: 2, width: "100%", backgroundColor: '#D3D3D3'}}/>)}
          onRefresh={this.onRefresh}
          refreshing={this.state.isRefreshing}
        />)
      : <Text>Loading...</Text>;

    return (
      <View style={{flex: 1, paddingTop:20}}>
        {list}
      </View>
    );
  }
}

export default Screen2;