import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Search extends React.Component {
	render () {
		return (
					<View style={styles.container}>
						<SearchBar
						containerStyle={{width: '100%'}}
						 lightTheme
						 onChangeText={() => {}}
						 onClearText={() => {}}
						 icon={{type: 'font-awesome', name: 'search'}}
						 placeholder="Search Pokemon...."/>					
					</View>
			)
	}
}

const styles = {

	container : {
		flex : 1,
		alignItems : 'center',
		backgroundColor : '#ff6600',
		width : '100%',
		marginTop : 24,
	}
}