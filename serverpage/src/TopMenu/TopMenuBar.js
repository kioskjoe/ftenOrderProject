import './TopMenu.css';
import logo from './imges/tenlogo.svg';
import TopMenuBarTwo from './TopMenuBarTwo';

const style = { color: "red", fontSize: "1em" }

function TopMenuBar() {
  return (

    <div className="topframe">
      <div >
        <div className="logo4tentouch">
          <div style={{ height: 55, width: 65, pddding:20, justifyContent:"center"}} ><img src={logo} style={{ height: 35, width: 55, margin:7}} alt="website logo" /></div>
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