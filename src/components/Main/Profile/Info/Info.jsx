import Background from './background/Background';
import s from './Info.module.scss';
import Person from './Person/Person';
import axios from 'axios';

function Info(props) {
  return (
    <div className={s.info}>
      <Background />
      <Person img={props.img} fullName={props.fullName} />
    </div>
  );
}
export default Info;
