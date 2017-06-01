import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './card'
import CardSection from './cardsection'

const Album = ({album}) => {
    const { id, title, artist, url, image, thumbnail_image } = album;
    return (
        <Card>
            <CardSection>
                <View style={ styles.head }>
                    <Image style={ styles.thumb } source={{ uri: thumbnail_image }} />
                </View>
                <View style={ styles.body }>
                    <Text style={ styles.title }>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={ styles.cover } source={{ uri: image }} />
            </CardSection>
            <CardSection>

            </CardSection>
        </Card>
    );
};

const styles = {
    thumb: {
        height: 50,
        width: 50
    },
    cover: {
        width: null,
        height: 300,
        flex: 1
    },
    title: {
        fontSize: 30
    },
    head: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
};
export default Album;
