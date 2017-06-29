import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'
import { Link } from 'react-router-native'
import Firebase from '../config/Firebase'
import Login from '../config/Facebook'

export default class Home extends Component {
    state = {
        firebase: new Firebase()
    }
    getDB() {
        console.log(this.state.firebase.storage());
    }
    render() {
        // return (
        //     <View style={ styles.container }>
        //         <Login />
        //     </View>
        // );
        return (
            <View style={ styles.container }>
                <Image
                    source={ require('./../assets/sleepy-follow-logo.png') }
                />
                <Text>{ this.getDB() }</Text>

                <Login />

                <Link
                    to="/map"
                    underlayColor='#f0f4f7'
                    style={ styles.loginButton }>
                    <Text style={ styles.loginText }>Go to Map</Text>
                </Link>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    loginText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    loginButton: {
        alignItems: 'center',
        backgroundColor: '#515cb7',
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        width:250
    }
});
