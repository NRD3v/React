import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Album from './album';

class AlbumList extends Component {
    state = {
        albums: [
            {
                id: 1,
                title: 'kibzervoub',
                artist: 'lbelvb',
                url: 'lnevlmkn',
                image: 'ljbelvjb',
                thumbnail_image: 'lbzrljvb'
            },
            {
                id: 2,
                title: 'mnm,n',
                artist: 'lkznrkn',
                url: 'eavaerv',
                image: 'mn"rvn',
                thumbnail_image: 'lnazprihln'
            }
        ]
    };
    render() {
        return (
            <ScrollView>
                { this._renderAlbums() }
            </ScrollView>
        );
    }

    _renderAlbums() {
        return (
            this.state.albums.map(album => <Album key={ album.id } album={ album } />)
        )
    }
}
export default AlbumList;
