import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './src/Landing';
import Search from './src/Search';

export default class App extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        currentScreen : 'search',
      }
  }


  handleButtonTap = (currentScreen) => {
      console.log('state changed');
      this.setState({currentScreen});
  }

  renderScreen  = () => {
    if(this.state.currentScreen === 'landing')
    {
      console.log('screen is showing Landing');
      return (
          <Landing onButtonTap={this.handleButtonTap}/>
        )
    }
    else if(this.state.currentScreen === 'search'){
      console.log('screen changed');
      return (
          <Search/>
        )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
