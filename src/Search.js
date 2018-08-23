import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Search extends React.Component {
	render () {
		return (
					<View>
						<Text>This is Search Component</Text>
					</View>
			)
	}
}

const styles = {

	container : {
		flex : 1,
		alignItems : 'center',
		justifyContent : 'center',
		background : '#ff6600',
		width : '100%',
	}
}