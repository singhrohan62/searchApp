import React from 'react';
import Loader from './Loader';
import {StyleSheet, View, Text} from 'react-native';
import SearchBody from './SearchBody';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import axios from 'axios';

export default class Search extends React.Component {
	state = {
		pokeSearch : ' ',
		onCall : true,
		data : {}
	}

	searchPoke = () => {
		this.setState({onCall : true})
		if(this.state.pokeSearch === ' ')
		{
			return;
		}

		var self = this;
		fetch(`http://pokeapi.co/api/v2/pokemon/100`)
		.then((response) => response.json())
		.then((responseJson) => {
			console.log(responseJson.forms)
			self.setState({data : responseJson.forms.name});
			self.setState({onCall : false});
		})
		.catch(function(error){
			console.log(error);
		});
	}

	renderBody = () => {
		if(this.state.onCall)
		{
			return (
					<Loader/>
				)
		}

		else
		{
			return (
					<SearchBody data={this.state.data}/>
				)
		}
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
			        {this.renderBody()}
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
