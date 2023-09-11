import React from 'react';
import { connect } from 'react-redux';
import {
  actionUpdateMessageText,
  actionAddMessage,
} from '../../../../../../redux/message-reducer';
import { AddMessage } from './AddMessage/AddMessage';

let mapStateToProps = (state) => {
  return { newMessageTxt: state.messagePage.newMessageTxt };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onUpdateMessage: (messageTxt) => {
      dispatch(actionUpdateMessageText(messageTxt));
    },
    onAddMessage: () => {
      dispatch(actionAddMessage());
    },
  };
};

export let AddMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMessage);

// export function AddMessageContainer(props) {
//   function onUpdateMessage(messageTxt) {
//     props.store.dispatch(actionUpdateMessageText(messageTxt));
//   }

//   function onAddMessage() {
//     props.store.dispatch(actionAddMessage());
//   }

//   return (
//     <AddMessage
//       store={props.store}
//       onUpdateMessage={onUpdateMessage}
//       onAddMessage={onAddMessage}
//     />
//   );
// }
