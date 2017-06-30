import React, {Component} from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import MapButtons from '../components/MapButtons'

export default class Map extends Component {
    state = {
        // markers: { /* Firebase request */ },
        markers: [
            {
                latlng: {
                    latitude: 48.81,
                    longitude: 2.33
                },
                title: "Marqueur 1",
                description: "Description 1"
            },
            {
                latlng: {
                    latitude: 48.82,
                    longitude: 2.34
                },
                title: "Marqueur 2",
                description: "Description 2"
            },
            {
                latlng: {
                    latitude: 48.83,
                    longitude: 2.35
                },
                title: "Marqueur 3",
                description: "Description 3"
            }
        ]
    }

    render() {
        return (
            <View style={ styles.container }>
                <MapView
                    style={{ ...StyleSheet.absoluteFillObject }}
                    initialRegion={{
                        latitude: 48.8232327,
                        longitude: 2.36242279,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
                    {this.state.markers.map(marker => (
                        <MapView.Marker
                            key={ marker.id }
                            coordinate={ marker.latlng }
                            title={ marker.title }
                            description={ marker.description }
                        />
                    ))}
                </MapView>
                <MapButtons />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150
    }
})
