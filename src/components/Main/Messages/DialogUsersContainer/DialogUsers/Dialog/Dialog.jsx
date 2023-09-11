import s from './Dialog.module.scss';
// import {Route}
import { NavLink } from 'react-router-dom';

export function Dialog(props) {
  let path = '/messages/' + props.id;
  return (
    <NavLink to={path} className={s.wrapper}>
      <div>
        <img className={s.ava} width="50px" src={props.src} alt="Ёжик" />
      </div>
      <div className={s.border}>
        <div className={s.user}>{props.user}</div>
        <div className={s.message}>{props.message}</div>
      </div>
    </NavLink>
  );
}
