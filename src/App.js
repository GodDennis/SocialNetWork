import './nullstyle.scss';
import './App.scss';
import Header from './components/Header/Header';
// import Registration from './components/Registration/Registration';
import Main from './components/Main/Main.jsx';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Registration /> */}
    </div>
  );
}

export default App;
