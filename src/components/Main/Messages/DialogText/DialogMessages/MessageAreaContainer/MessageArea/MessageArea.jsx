import s from './MessageArea.module.scss';
import { Message } from './Message/Message';

export function MessageArea(props) {
  const messageData = props.messageInfo;
  let messageElement = messageData.map((el) => {
    return (
      <Message users={el.users} src={el.src} message={el.message} id={el.id} />
    );
  });
  return <div className={s.messageArea}>{messageElement}</div>;
}
