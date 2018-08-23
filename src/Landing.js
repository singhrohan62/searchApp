import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Landing extends React.Component {
	render () {
		return (
				<View style={styles.container}>
					<Text style={styles.textStyle}>
						What is rendering is Landing Component.
					</Text>
						<Button title="Learn More" color="#841584" onPress={ () => {
							console.log('button tapped');
							this.props.onButtonTap('search')}}/>					
				</View>
			)
	}
}

const styles = {
	container : {
		flex : 1,
		width : '100%',
		alignItems : 'center',
		justifyContent : 'center',
		backgroundColor: '#19234c',
	},

	textStyle : {
		marginBottom : 20,
		color : '#fff',
	}
}