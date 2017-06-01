'use strict';
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import MapView from 'react-native-maps';

function distance(lat1, lon1, lat2, lon2) {
    let radlat1 = Math.PI * lat1/180;
    let radlat2 = Math.PI * lat2/180;
    let theta = lon1-lon2;
    let radtheta = Math.PI * theta/180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    return dist.toFixed(2);
}

const FirstApp = React.createClass({
    getInitialState() {
        return {
            position: {
                coords: {
                    latitude: 0,
                    longitude: 0
                }
            }
        }
    },


    distanceFromHome() {
        // These are the coords for Boulder, CO, USA.
        // Replace with your own hometown coords!
        const homePosition = {
            latitude: 40.0274,
            longitude: -105.2519
        };

        const currentPosition = this.state.position.coords;

        return distance(homePosition.latitude, homePosition.longitude, currentPosition.latitude, currentPosition.longitude)
    },

    render() {
        return (
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                style={styles.map}
                showUserLocation={true}
            />
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});

AppRegistry.registerComponent('ReactExercice', () => FirstApp);