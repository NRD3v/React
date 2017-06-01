/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { increment, decrement, zero } from './flux/Actions';
import TallyStore from './flux/TallyStore';

export default class Countly extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tally: TallyStore.getTally()
        };
        this.update = this.update.bind(this);
    }
    componentWillMount() {
        TallyStore.addChangeListener(this.update);
    }
    componentWillUnmount() {
        TallyStore.addChangeListener(this.update);
    }
    update() {
        this.setState({
            tally: TallyStore.getTally()
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Countly
                </Text>
                <Text style={styles.instructions}>
                    Tally: { this.state.tally.count }
                </Text>
                <TouchableOpacity
                    onPress={ increment }
                    style={ styles.button }>
                    <Text style={ styles.textButton }>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ decrement }
                    style={ styles.button }>
                    <Text style={ styles.textButton }>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ zero }
                    style={ styles.button }>
                    <Text style={ styles.textButton }>0</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    instructions: {
        color: '#333333',
        marginBottom: 5,
        textAlign: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "blue",
        height: 50,
        justifyContent: "center",
        margin: 10,
        width: 100
    },
    textButton: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    }
});

AppRegistry.registerComponent('Countly', () => Countly);
