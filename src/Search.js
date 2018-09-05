import React from 'react';
import Loader from './Loader';
import {StyleSheet, View, Text} from 'react-native';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

export default class Search extends React.Component {
	state = {
		pokeSearch : ' ',
	}

	searchPoke = () => {
		let x = this.state.pokeSearch;
		console.log("button tapped " + x);
	}

	render () {
		return (
				<View style={styles.container}>
			        <Header 
			        searchBar
			        rounded
			        style={styles.header}>
			          <Item>
			            <Icon name="ios-search" onPress={this.searchPoke}/>
			            <Input placeholder="Search"
			             value = {this.state.pokeSearch}
			             
			             onChangeText = {(pokeSearch) => this.setState({pokeSearch})}
			              />
			          </Item>
			        </Header>
			        <Loader/>
			     </View>
			)
	}
}

const styles = {

	header : {
		width : '100%',
		height : 40,
	},

	container : {
		flex : 1,
		alignItems : 'center',
		width : '100%',
		marginTop : 24,
	}
}
