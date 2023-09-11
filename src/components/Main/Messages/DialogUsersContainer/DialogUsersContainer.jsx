import { connect } from 'react-redux';
import { DialogUsers } from './DialogUsers/DialogUsers';

let mapStateToProps = (state) => {
  return { messageInfo: state.messagePage.messageInfo };
};

let mapDisaptchToProps = () => {};

export let DialogUsersContainer = connect(
  mapStateToProps,
  mapDisaptchToProps
)(DialogUsers);
