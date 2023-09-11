import { MessageAreaContainer } from './MessageAreaContainer/MessageAreaContainer';
import s from './DialogMessages.module.scss';
import { UserBarContainer } from './UserBarContainer/UserBarContainer';
import { AddMessageContainer } from './AddMessageContainer/AddMessageContainer';

export function DialogMessages(props) {
  return (
    <div className={s.dialogMessages}>
      <UserBarContainer />
      <MessageAreaContainer />
      <AddMessageContainer />
    </div>
  );
}
