import React, {Component} from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import Firebase from '../config/Firebase'

export default class Map extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                <TouchableOpacity
                    style={ styles.button }
                    onPress={ console.log('ok') }>
                    <Text>10</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.button }
                    onPress={ console.log('ok') }>
                    <Text>10</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.button }
                    onPress={ console.log('ok') }>
                    <Text>10</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    buttons: {

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150
    }
})
