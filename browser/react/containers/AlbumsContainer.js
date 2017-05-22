import React, {Component} from 'react';
import store from '../store';
import Albums from '../components/Albums';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    albums: state.albums.list
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

const AlbumsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);

export default AlbumsContainer;



// class AlbumsContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().albums;
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().albums);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     return <Albums albums={this.state.list} />;
//   }

// }

// export default AlbumsContainer;
