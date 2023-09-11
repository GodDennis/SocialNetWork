// import postReducer from './post-reducer';
// import messageReducer from './message-reducer';

// export const store = {
//   state: {
//     messagePage: {
//       messageInfo: [
//         {
//           users: 'DEA169',
//           src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
//           message: 'smth',
//           id: '1',
//         },
//         {
//           users: 'GODDENNIS',
//           src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
//           message: 'Что-то на важном',
//           id: '2',
//         },
//         {
//           users: 'Gieben',
//           src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
//           message: 'Что-то на важном',
//           id: '3',
//         },
//         {
//           users: 'Мексиканец',
//           src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
//           message: 'Что-то на важном',
//           id: '4',
//         },
//         {
//           users: 'Пашка',
//           src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
//           message: 'Что-то на важном',
//           userId: '5',
//         },
//       ],
//       newMessageText: '',
//     },
//     profilePage: {
//       postInfo: [
//         {
//           name: 'user',
//           surname: 'surname',
//           src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
//           post: 'post',
//           id: '1',
//           time: '',
//         },
//         {
//           name: 'user2',
//           surname: 'surname2',
//           src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
//           post: 'post2',
//           id: '2',
//           time: '',
//         },
//         {
//           name: 'user3',
//           surname: 'surname3',
//           src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
//           post: 'post3',
//           id: '3',
//           time: '',
//         },
//       ],
//       newPostText: '',
//     },
//   },
//   rerender() {},
//   subscribe(observer) {
//     this.rerender = observer;
//   },
//   dispatcher(action) {
//     this.state.profilePage = postReducer(this.state.profilePage, action);
//     this.state.messagePage = messageReducer(this.state.messagePage, action);
//     this.rerender(this.state);
//   },
// };
