import React from 'react';
import s from './AddMessage.module.scss';

let messageArea = React.createRef();

export function AddMessage(props) {
  function updateMessage() {
    let messageTxt = messageArea.current.value;
    props.onUpdateMessage(messageTxt);
  }
  function addMessage() {
    if (messageArea.current.value !== '') {
      props.onAddMessage();
      messageArea.current.value = '';
    }
  }
  function keyDown(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      if (messageArea.current.value !== '') {
        addMessage();
      }
    }
  }
  return (
    <div className={s.wrapper}>
      <textarea
        onKeyDown={keyDown}
        ref={messageArea}
        onChange={updateMessage}
        className={s.newMessage}
        placeholder="Напишите сообщение..."
        value={props.newMessageTxt}
        maxLength="300"
        cols="10"
        rows="5"></textarea>
      <button className={s.addMessage} onClick={addMessage}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <g
            id="send_24__Page-2"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd">
            <g id="send_24__send_24">
              <path id="send_24__Rectangle-76" d="M0 0h24v24H0z"></path>
              <path
                d="M5.74 15.75a39.14 39.14 0 0 0-1.3 3.91c-.55 2.37-.95 2.9 1.11 1.78 2.07-1.13 12.05-6.69 14.28-7.92 2.9-1.61 2.94-1.49-.16-3.2C17.31 9.02 7.44 3.6 5.55 2.54c-1.89-1.07-1.66-.6-1.1 1.77.17.76.61 2.08 1.3 3.94a4 4 0 0 0 3 2.54l5.76 1.11a.1.1 0 0 1 0 .2L8.73 13.2a4 4 0 0 0-3 2.54Z"
                id="send_24__Mask"
                fill="currentColor"></path>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}
