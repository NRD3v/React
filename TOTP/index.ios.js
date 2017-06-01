import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    AsyncStorage,
    TextInput,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import generateOTP from './lib/totp';

const TOTP = React.createClass({
    getInitialState() {
        return {
            // créer fichier texte pour écrire et lire les données
            // test: AsyncStorage.getItem('test', (error) => {
            //     if (error) {
            //         alert(error);
            //     }
            // }),
            generators: [
                {
                    name: 'Gmail <js-ios@gmail.com>',
                    secret: 'abcdefghijklmnop'
                }
            ]
        }
    },

    renderGenerator(generator) {
        const { otp, secondsBeforeExpiration } = generateOTP(generator);
        // `otp` is the One Time Password, that is the code to be used as a second factor
        // `secondsBeforeExpiration` is an integer representation of how much longer (in seconds) the otp is valid

        return (
            <View>
                <Text>{ generator.name } | { otp } | { secondsBeforeExpiration }</Text>
            </View>
        )
    },

    _onPress(e) {
        console.log(e);
    },

    render() {
        // if (this.state.test)
        // AsyncStorage.setItem('test', 'test', (error) => {
        //     if (error) {
        //         console.log(error);
        //     }
        // });
        return (
            <View style={ styles.container }>
                { this.state.generators.map(this.renderGenerator) }
                <TextInput
                    style={ styles.input }
                    onChangeText={(email) => this.setState({email})}
                    placeholder={ this.state.email }
                />
                <TextInput
                    style={ styles.input }
                    onChangeText={(secret) => this.setState({secret})}
                    placeholder={ this.state.secret }
                />
                <TextInput />
                <Button onPress={this._onPress.bind(this)} title="SEND"/>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 2,
        height: 40,
        margin: 10,
        padding: 10
    }
});

AppRegistry.registerComponent('TOTP', () => TOTP);
