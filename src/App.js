import { Navigation } from 'react-native-navigation';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
//export default class App extends Component<> {
export default () => {
  Navigation.registerComponent('Screen1', () => Screen1);
  Navigation.registerComponent('Screen2', () => Screen2);

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Home',
        screen: 'Screen1',
        title: 'Home',
        icon: require('./images/icon-home.png')
      },
      {
        label: 'Films',
        screen: 'Screen2',
        title: 'Films',
        icon: require('./images/icon-film.png')
      }
    ]
  });
  
//  Navigation.startSingleScreenApp({
//    screen: {
//		screen: 'Screen1',
//		title: 'Screen One',
//	}
//});
  
//  Navigation.showModal({
//  screen: 'Screen1', // unique ID registered with Navigation.registerScreen
//  title: 'Screen One', // title of the screen as appears in the nav bar (optional)
//  passProps: {}, // simple serializable object that will pass as props to the modal (optional)
//  navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
//  navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
//  animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
//});
  
};

//export default class App extends Component<> {
//  render() {
//    return (
//      <View style={styles.container}>
//        <Text style={styles.welcome}>
//          Welcome to React Native!
//        </Text>
//        <Text style={styles.instructions}>
//          To get started, edit App.js
//        </Text>
//      </View>
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});
