import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import {
    NativeRouter,
    Route
} from 'react-router-native';
import Home from './components/Home';
import Map from './components/Map';

export default class SleepyFollowReact extends Component {
    render() {
        return (
            <NativeRouter>
                <View>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/map" component={ Map } />
                </View>
            </NativeRouter>
        );
    }
}

AppRegistry.registerComponent('SleepyFollowReact', () => SleepyFollowReact);
