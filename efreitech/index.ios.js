
// IMPORT
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './components/header';
import AlbumList from './components/albumlist';

// COMPONENT
const App = () => {
	return(
		<View>
			<Header headerText='10HEURES'/>
			<AlbumList />
		</View>
	)

}

// EXPORT || RELEASE/REGISTER
AppRegistry.registerComponent('efreitech', () => App);
