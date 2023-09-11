import s from './Header.module.scss';
function Header() {
  return (
    <header className={s.header}>
      <div className={s.logo__container}>
        <img
          className={s.logo}
          src="https://www.iguides.ru/upload/iblock/a97/a97a5cb533918c1815d007d248ce73a2.jpg"
          alt=""
        />{' '}
        <div className={s.logoName}>ВКОНТАКТЕ</div>
      </div>
    </header>
  );
}
export default Header;
