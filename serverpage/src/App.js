import './App.css';
import TopMenuBar from './TopMenu/TopMenuBar';
import LeftMenuBar from './LeftMenu/LeftMenuBar';
import RightMenuBar from './RightMenu/RightMenuBar';
import JoeAsp from './DropDownMenu2/JoeAsp';

function App() {
  return (
    <div className="App">
      <div className="frame">
        <div className="topmenubar">
          <TopMenuBar />
        </div>
        <div className="innerframe">
          <div className="left">
            <LeftMenuBar />
          </div>
          <div className="right">
            <RightMenuBar />
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;