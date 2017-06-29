import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={props.onPress}>
			<Text style={styles.buttonText}>{props.children}</Text>
		</TouchableOpacity>
	)
}

const styles= {
	button: {
		flex: 1,
		borderRadius: 5,
		borderColor: '#F5E333',
		marginLeft: 4,
		marginRight: 4
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '600',
		alignSelf: 'center',
		color: '#00AB98',
		paddingTop: 10,
		paddingBottom: 10
	}
}

export default Button;
