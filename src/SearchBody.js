import React from 'react';
import {ScrollView,Text,Image,View,Dimensions} from 'react-native';
import {ListItem,List} from 'native-base';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class SearchBody extends React.Component{
	ComponentWillMount () {
		let tmp = this.props.data;
		console.log("Data recieved : "+ tmp);
	}

	render(){
		var pokemon = this.props.data;
		if(!pokemon){
			return<View/>
		}
		return(
				<ScrollView style={{flex: 1}}>
					
					<View style={styles.info}>
						<Text>{this.props.data}</Text>
					</View>
				</ScrollView>
			
		)
	}
}

const styles = {
	backgroundImage:{
		flex: 1,
		resizeMode: 'cover',
		height: height,
		width: width,

	},
	header: {
		fontSize: 30,
		color: 'red',
		textAlign: 'center'
	},
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	img: {
		height: 200,
		width: 200,
		justifyContent: 'center',
		alignItems: 'center'
	},
	info: {
		flex: 1,
		backgroundColor: 'white',
		opacity: 0.8
	}
}

export default SearchBody;