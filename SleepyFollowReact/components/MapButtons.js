import React, { Component } from 'react'
import { Button, View, Text, Image, StyleSheet } from 'react-native'

export default class MapButtons extends Component {
    getValue() {
        console.log('pressed');
    }
    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.button }>
                    <Button onPress={ this.getValue } value="10" title="10"/>
                </View>
                <View style={ styles.button }>
                    <Button onPress={ this.getValue } value="20" title="20"/>
                </View>
                <View style={ styles.button }>
                    <Button onPress={ this.getValue } value="30" title="30"/>
                </View>
            </View>
        )
        // return (
        //     <View>
        //         <TouchableOpacity
        //             style={ styles.button }
        //             onPress={ console.log('ok') }>
        //             <Text>10</Text>
        //         </TouchableOpacity>
        //         <TouchableOpacity
        //             style={ styles.button }
        //             onPress={ console.log('ok') }>
        //             <Text>10</Text>
        //         </TouchableOpacity>
        //         <TouchableOpacity
        //             style={ styles.button }
        //             onPress={ console.log('ok') }>
        //             <Text>10</Text>
        //         </TouchableOpacity>
        //     </View>
        // )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        height: 50,
        width: 75
    }
})
