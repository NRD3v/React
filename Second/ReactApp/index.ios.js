// IMPORT
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './components/header';
import AlbumList from './components/albumlist';

// COMPONENT
const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header headerText={'ReactApp'} />
            <AlbumList/>
        </View>
    );
};

// EXPORT || RELEASE/REGISTER
AppRegistry.registerComponent('ReactApp', () => App);
