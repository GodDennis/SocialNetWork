import { connect } from 'react-redux';
import { MessageArea } from './MessageArea/MessageArea';

let mapStateToProps = (state) => {
  return { messageInfo: state.messagePage.messageInfo };
};

let mapDisaptchToProps = () => {};

export let MessageAreaContainer = connect(
  mapStateToProps,
  mapDisaptchToProps
)(MessageArea);
