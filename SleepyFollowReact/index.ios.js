import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'
import Home from './components/Home'
import Map from './components/Map'
export default class SleepyFollowReact extends Component {
    render() {
        return (
            <NativeRouter>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/map" component={ Map } />
                </View>
            </NativeRouter>
        )
    }
}
AppRegistry.registerComponent('SleepyFollowReact', () => SleepyFollowReact)
