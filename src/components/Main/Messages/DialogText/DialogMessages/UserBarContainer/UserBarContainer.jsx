import { connect } from 'react-redux';
import { UserBar } from './UserBar/UserBar';

let mapStateToProps = (state) => {
  return { messageInfo: state.messagePage.messageInfo };
};

let mapDisaptchToProps = () => {};

export let UserBarContainer = connect(
  mapStateToProps,
  mapDisaptchToProps
)(UserBar);
