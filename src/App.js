import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './components/Home';
import Pokemon from './components/Pokemon';

import {Router,Switch,Route} from './routing';

export default class App extends Component {

  state={
    selectedPokemon:null
  }

  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Switch>
            <Route exact path="/" render={props=><Home {...props} selectPokemon={this.selectPokemon}/>}/>
            <Route exact path="/pokemon" render={props=><Pokemon {...props} selectedPokemon={this.state.selectedPokemon}/>}/>
          </Switch>
        </Router>
      </View>
    );
  }

  selectPokemon=(selectedPokemon)=>{
    this.setState({selectedPokemon})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
