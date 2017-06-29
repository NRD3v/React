import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Album from './album';

class AlbumList extends Component {
	state = {
		albums: []
	};

	componentWillMount(){
		let self = this;
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
		.then((response) => response.json())
		.then((albums) => self.setState({ albums }))
		.catch((error) => {
			console.log(error);
		})
	}

	render() {
		return(
			<ScrollView>
				{this._renderAlbums()}
			</ScrollView>
		)
	}

	_renderAlbums() {
		return(
			this.state.albums.map(
				album => <Album key={album.title} album={album} />
			 )
		)
	}
}

export default AlbumList;
