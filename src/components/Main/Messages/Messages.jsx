import s from './Messages.module.scss';
import { DialogText } from './DialogText/DialogText';
import { DialogUsersContainer } from './DialogUsersContainer/DialogUsersContainer';

function Messages(props) {
  return (
    <div className={s.messages}>
      <DialogUsersContainer store={props.store} />
      <DialogText store={props.store} />
    </div>
  );
}
export default Messages;
