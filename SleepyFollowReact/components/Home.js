import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Firebase from '../config/Firebase'
import Login from '../config/Facebook'
import LinkToMap from '../components/LinkToMap'
import Logo from '../components/Logo'

export default class Home extends Component {
    state = {
        firebase: new Firebase()
    }
    getDB() {
        console.log(this.state.firebase.storage());
    }
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center'
            }}>
                <Logo />
                <Login />
                {/*<LinkToMap />*/}
            </View>
        );
    }
}
