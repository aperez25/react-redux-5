import React, {Component} from 'react';
import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong } from '../action-creators/player';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedPlaylist: state.playlists.selected,
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    },
  };
}

const PlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);

// class PlaylistContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {
//     return (
//       <Playlist
//         {...this.state.player}
//         selectedPlaylist={this.state.playlists.selected}
//         toggleOne={this.toggle}
//       />
//     );
//   }

// }

export default PlaylistContainer;
