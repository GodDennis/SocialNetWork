import s from './Message.module.scss';
export function Message(props) {
  return (
    <div className={s.message}>
      <img className={s.userImg} src={props.src} alt="" />
      <div>
        <div className={s.userName}>{props.users}</div>
        <div>{props.message}</div>
      </div>
    </div>
  );
}
