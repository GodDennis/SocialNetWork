import s from './Link.module.scss';
function Link(props) {
  return (
    <a className={s.link} href={props.href}>
      {props.text}
    </a>
  );
}
export default Link;
