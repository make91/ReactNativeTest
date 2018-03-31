import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';

class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {number: null};
  }
  handlePress = () => {
    this.props.navigator.push({
      screen: 'Screen2',
      title: 'Films via button',
    });
  };
  handleDice = () => {
    this.setState({ number: Math.floor(1+Math.random()*6) });
  };
  render() {
    const showNumber = this.state.number && <Text style={{fontSize: 33, textAlign: 'center'}}>{this.state.number}</Text>
    return (
      <View style={{flex:1, padding: 8}}>
        <View style={{padding: 16}}><Button style={{flex:1}} onPress={this.handleDice} title="Throw dice"/></View>
        {showNumber}
        <View style={{padding: 16}}><Button style={{flex:1}} onPress={this.handlePress} title="Go to screen 2"/></View>
      </View>
    );
  }
}

export default Screen1;