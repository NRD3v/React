import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default class TimePanel extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <TouchableOpacity style={ styles.button }>
                    <Text style={ styles.text }>10m</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.button }>
                    <Text style={ styles.text }>20m</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.button }>
                    <Text style={ styles.text }>30m</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        bottom: 100,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3b5998'
    },
    text: {
        color: '#fff',
        fontSize: 16
    }
});
