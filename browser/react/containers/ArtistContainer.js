import React, {Component} from 'react';
import Artist from '../components/Artist';
import {toggleSong} from '../action-creators/player';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress,
    selectedArtist: state.artists.selected,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  }
};

const ArtistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);

export default ArtistContainer;


// class ArtistContainer extends Component {

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
//       <Artist
//         {...this.state.player}
//         selectedArtist={this.state.artists.selected}
//         toggleOne={this.toggle}
//         children={this.props.children} />
//     );
//   }

// }

// export default ArtistContainer;
