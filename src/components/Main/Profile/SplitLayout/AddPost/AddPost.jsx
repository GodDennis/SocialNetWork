import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import s from './AddPost.module.scss';

function AddPost(props) {
  function addPost() {
    let newPost = {
      name: 'user',
      surname: 'surname',
      src: 'https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg',
      post: postTxt,
      id: '4',
      time: '',
    };
    props.setPost((prev) => prev.concat(newPost));
    setPostTxt('');
  }

  const [postTxt, setPostTxt] = useState(null);
  let area = useRef();

  function updateText() {
    setPostTxt(area.current.value);
  }

  return (
    <div className={s.actionWrapper}>
      <textarea
        value={postTxt}
        onChange={updateText}
        ref={area}
        className={s.post}
        placeholder="Что у вас нового?"
        maxLength="300"
        onResize="none"
        cols="10"
        rows="5"></textarea>
      <span className={s.icon + ' ' + s.photo} title="Фотография">
        <svg
          fill="none"
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            clip-rule="evenodd"
            d="M5.5 5.5c.57 0 1-.2 1.34-.52.24-.24.43-.54.55-.74l.06-.1c.15-.23.26-.37.39-.47.11-.08.3-.17.66-.17h3c.36 0 .55.09.66.17.13.1.24.24.4.48l.05.09c.12.2.3.5.55.74.33.32.77.52 1.34.52.73 0 .99 0 1.19.04.9.18 1.59.88 1.77 1.77.04.2.04.46.04 1.19v3.45c0 .85 0 1.45-.04 1.9-.04.46-.1.72-.2.92-.22.42-.57.77-.99.98-.2.1-.46.17-.91.21-.46.04-1.06.04-1.91.04h-6.9c-.85 0-1.45 0-1.91-.04a2.4 2.4 0 0 1-.91-.2 2.25 2.25 0 0 1-.99-.99 2.4 2.4 0 0 1-.2-.91c-.04-.46-.04-1.06-.04-1.91V8.5c0-.73 0-.99.04-1.19.18-.9.88-1.59 1.77-1.77.2-.04.46-.04 1.19-.04zm3-3.5c-.64 0-1.14.16-1.54.46-.39.27-.62.63-.78.9l-.08.11c-.13.22-.2.34-.3.43-.06.05-.12.1-.3.1h-.09c-.61 0-1.03 0-1.4.07a3.75 3.75 0 0 0-2.94 2.95C1 7.38 1 7.8 1 8.42v3.56c0 .81 0 1.47.04 2 .05.55.14 1.03.37 1.47.36.7.93 1.28 1.64 1.64.44.23.92.32 1.47.37.53.04 1.18.04 2 .04H13.48c.81 0 1.47 0 2-.04a3.84 3.84 0 0 0 1.47-.37c.7-.36 1.28-.93 1.64-1.64.23-.44.32-.92.37-1.47.04-.53.04-1.19.04-2V8.41c0-.61 0-1.03-.07-1.4a3.75 3.75 0 0 0-2.95-2.94 7.5 7.5 0 0 0-1.4-.07h-.08c-.18 0-.24-.05-.3-.1-.1-.1-.17-.2-.3-.43l-.08-.12c-.16-.26-.4-.62-.78-.9-.4-.29-.9-.45-1.54-.45zm3.75 8.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z"
            fill="currentColor"
            fill-rule="evenodd"></path>
        </svg>
      </span>
      <span className={s.icon + ' ' + s.video} title="Видиозпись">
        <svg
          fill="none"
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            clip-rule="evenodd"
            d="M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-8.5-7a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0zm8.65 3.38 2.7-1.56a2.1 2.1 0 0 0 0-3.64l-2.7-1.56A2.1 2.1 0 0 0 7 8.44v3.12a2.1 2.1 0 0 0 3.15 1.82zm1.95-3.9c.4.23.4.8 0 1.04l-2.7 1.56a.6.6 0 0 1-.9-.52V8.44c0-.46.5-.75.9-.52z"
            fill="currentColor"
            fill-rule="evenodd"></path>
        </svg>
      </span>
      <span className={s.icon + ' ' + s.audio} title="Аудиозапись">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <g
            id="music_outline_20__Icons"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd">
            <g id="music_outline_20__Icons-20/music_outline_20">
              <g id="music_outline_20__music_outline_20">
                <path d="M0 0h20v20H0z"></path>
                <path
                  d="M14.73 2.05a2.28 2.28 0 0 1 2.75 2.23v7.99c0 3.57-3.5 5.4-5.39 3.51-1.9-1.9-.06-5.38 3.52-5.38h.37V6.76L8 8.43v5.82c0 3.5-3.35 5.34-5.27 3.62l-.11-.1c-1.9-1.9-.06-5.4 3.51-5.4h.37V6.24c0-.64.05-1 .19-1.36l.05-.13c.17-.38.43-.7.76-.93.36-.26.7-.4 1.41-.54ZM6.5 13.88h-.37c-2.32 0-3.34 1.94-2.45 2.82.88.89 2.82-.13 2.82-2.45v-.37Zm9.48-1.98h-.37c-2.32 0-3.34 1.94-2.46 2.82.89.89 2.83-.13 2.83-2.45v-.37Zm-.02-7.78a.78.78 0 0 0-.92-.6L9.06 4.77c-.4.09-.54.15-.68.25a.8.8 0 0 0-.27.33c-.08.18-.1.35-.1.88v.67l7.97-1.67V4.2Z"
                  id="music_outline_20__Icon-Color"
                  fill="currentColor"
                  fill-rule="nonzero"></path>
              </g>
            </g>
          </g>
        </svg>
      </span>
      <button onClick={addPost} className={s.btn}>
        Опубликовать
      </button>
    </div>
  );
}
export default AddPost;
