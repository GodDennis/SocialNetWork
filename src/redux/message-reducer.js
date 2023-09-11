let initialState = {
  messageInfo: [
    {
      users: 'DEA169',
      src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
      message: 'smth',
      id: '1',
    },
    {
      users: 'GODDENNIS',
      src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
      message: 'Что-то на важном',
      id: '2',
    },
    {
      users: 'Gieben',
      src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
      message: 'Что-то на важном',
      id: '3',
    },
    {
      users: 'Мексиканец',
      src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
      message: 'Что-то на важном',
      id: '4',
    },
    {
      users: 'Пашка',
      src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
      message: 'Что-то на важном',
      userId: '5',
    },
  ],
  newMessageText: '',
};

function messageReducer(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  if (action.type === 'SEND-MESSAGE') {
    let newMessage = {
      users: 'DEA169',
      src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
      message: stateCopy.newMessageText,
      id: '1',
    };
    stateCopy.messageInfo.push(newMessage);
    stateCopy.newMessageText = '';
  } else if (action.type === 'UPDATE-MESSAGE') {
    // console.log(stateCopy.newMessageText);
    stateCopy.newMessageText = action.messageTxt;
  }
  return stateCopy;
}
export default messageReducer;

export const actionAddMessage = () => {
  return {
    type: 'SEND-MESSAGE',
  };
};

export const actionUpdateMessageText = (postTxt) => {
  return {
    type: 'UPDATE-MESSAGE',
    messageTxt: postTxt,
  };
};
