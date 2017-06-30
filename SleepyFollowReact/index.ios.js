import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import { Scene, Router } from 'react-native-router-flux';
import Home from './components/Home'
import Map from './components/Map'

export default class SleepyFollowReact extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="home" component={ Home } title="Home" initial={ true }/>
                    <Scene key="map" component={ Map } title="Map"/>
                </Scene>
            </Router>
        )
    }
}
AppRegistry.registerComponent('SleepyFollowReact', () => SleepyFollowReact)
