import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

const Album = ({ album }) => {
	const { title , artist , url , image , thumbnail_image} = album;
	return(
		<Card>
			<CardSection >
				<View style={styles.thumbnailContainer}>
					<Image style={styles.thumbnail} source={{uri:thumbnail_image}} />
				</View>
				<View style={styles.details}>
					<Text style={styles.title}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image style={styles.cover} source={{uri:image}} />
			</CardSection>
			<CardSection>
				<Button onPress={ () => Linking.openURL(url)}>Buy</Button>
			</CardSection>
		</Card>
	)
}

const styles = {
	thumbnail: {
		width: 50,
		height:50
	},
	cover: {
		width: null,
		height:300,
		flex: 1
	},
	thumbnailContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	details: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	title: {
		fontSize: 20
	}
}
// <Album infos="Kendrick Lamar" />

export default Album;
