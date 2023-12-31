import s from './Person.module.scss';
import photoNull from '../../../../../assets/camera_200.png';

function Person(props) {
  return (
    <div className={s.person}>
      <span className={s.avatar}>
        <img
          className={s.avatar__item}
          src={props.img === null ? photoNull : props.img}
          alt=""
        />
      </span>
      <div className={s.personInfo}>
        {' '}
        <div>
          <span className={s.name}>{props.fullName}</span>
        </div>
        <div className={s.userProperty}>
          <div className={s.subWrapper}>
            <span className={(s.position, s.text)}>Минск</span>
          </div>
          <div className={s.subWrapper}>
            <img
              className={s.icon}
              src="https://img.freepik.com/free-icon/exclamation_318-448523.jpg?t=st=1685792496~exp=1685793096~hmac=5334bc2345ebb16ae2611f39af274a6aab7318b57a3696a1e6231342f16244ee"
              alt=""
              width="20px"
            />
            <span className={(s.info, s.text)}>Подробнее</span>
          </div>
        </div>
      </div>
      <div className={s.headerActions}>
        <button className={s.btn}>Редактировать профиль</button>
        <button className={s.btn}>Еще</button>
      </div>
    </div>
  );
}
export default Person;
