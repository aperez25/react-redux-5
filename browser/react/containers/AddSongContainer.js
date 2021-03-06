import React from 'react';
import { connect } from 'react-redux';
import AddSong from '../components/AddSong';
import { convertSong } from '../utils';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

const mapStateToProps = function(state, ownProps) {
  return {
    songs: state.songs
      .map( song => convertSong(song)),
    error: ownProps.error,
    songId: ownProps.songId
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    loadAllSongs: function(){
      dispatch(loadAllSongs())
    },
    addSongToPlaylist: function(playlistId, songId){
      dispatch(addSongToPlaylist(playlistId, songId))
    }
  };
}

// class AddSongContainer extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = Object.assign({
//       songId: 1,
//       error: false
//     }, store.getState());
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {

//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });

//     store.dispatch(loadAllSongs());

//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   handleChange(evt) {
//     this.setState({
//       songId: evt.target.value,
//       error: false
//     });
//   }

//   handleSubmit(evt) {

//     evt.preventDefault();

//     const playlistId = this.state.playlists.selected.id;
//     const songId = this.state.songId;

//     store.dispatch(addSongToPlaylist(playlistId, songId))
//       .catch(() => this.setState({ error: true }));

//   }

//   render() {

//     const songs = this.state.songs;
//     const error = this.state.error;
//     const songId = this.state.songId;

//     return (
//       <AddSong
//         {...this.props}
//         songs={songs}
//         error={error}
//         songId={songId}
//         handleChange={this.handleChange}
//         handleSubmit={this.handleSubmit}/>
//     );
//   }
// }

const AddSongContainer = connect(mapStateToProps, mapDispatchToProps)(AddSong);


export default AddSongContainer;
