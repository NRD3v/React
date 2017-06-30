import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

export default class LinkToMap extends Component {
    render() {
        return (
            <View>
                <Link
                    to="/map"
                    underlayColor='#f0f4f7'
                    style={{ alignItems: 'center',
                        backgroundColor: '#515cb7',
                        borderRadius: 5,
                        height: 50,
                        justifyContent: 'center',
                        width:250
                    }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}>Go to Map</Text>
                </Link>
            </View>
        );
    }
}
