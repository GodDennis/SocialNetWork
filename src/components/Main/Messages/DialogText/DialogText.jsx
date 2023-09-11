import { DialogScreen } from './DialogScreen/DialogScreen';
import { DialogMessages } from './DialogMessages/DialogMessages';
import s from './DialogText.module.scss';

export function DialogText(props) {
  return (
    <div className={s.wrapper}>
      {/* <DialogScreen /> */}
      <DialogMessages store={props.store} />
    </div>
  );
}
