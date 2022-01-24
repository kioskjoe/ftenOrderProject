import './TopMenu.css';
import logo from './imges/tenlogo.svg';
import TopMenuBarTwo from './TopMenuBarTwo';

const style = { color: "red", fontSize: "1em" }

function TopMenuBar() {
  return (

    <div className="topframe">
      <div className="logomenu">
        <div className="logo4tentouch">
          <div className="logoimg"><img src={logo} style={{ height: 53, width: 36 }} alt="website logo" /></div>
          <div className="logo">4tentouch</div>
          <TopMenuBarTwo />
        </div>
      </div>
      <div className="tel">
        <p> Tel 031 949 8465</p>
        <p> e-mail strong11joe@naver.com</p>
      </div>
    </div>



  );

}

export default TopMenuBar;