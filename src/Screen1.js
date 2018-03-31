import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';

class Screen1 extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  handlePress = () => {
    this.props.navigator.push({
      screen: 'Screen2',
      title: 'Films via button',
    });
  };
  render() {
    return (
      <View style={{flex:1, padding: 8}}>
        <Text>This is the homepage!</Text>
        <View style={{padding: 16}}><Button style={{flex:1}} onPress={this.handlePress} title="Go to screen 2"/></View>
      </View>
    );
  }
}

export default Screen1;