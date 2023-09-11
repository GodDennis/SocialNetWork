import s from './UserBar.module.scss';
export function UserBar(props) {
  const messageData = props.messageInfo[0];
  return (
    <div className={s.wrapper}>
      <div className={s.userName}>{messageData.users}</div>
      <img className={s.userImg} src={messageData.src} alt="" />
    </div>
  );
}
