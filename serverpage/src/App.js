import './App.css';
import TopMenuBar from './TopMenu/TopMenuBar';
import LeftMenuBar from './LeftMenu/LeftMenuBar';
import CustomerListTable from './RightMenu/CustomerListTable';
import ClientAdd from './RightMenu/client-register/ClientAdd';
import ClientListTable from './RightMenu/client-register/ClientListTable';
import LoginPageNew from './Loginften/LoginPageNew';
import AddMainMenuFun from './AddMenu/AddMainMenuFun';
import OptionMenu from './AddMenu/AddOptionMenuFun';
import MainMenuTable from './AddMenu/MainMenuTable';
import ChangeMainMenuFun from './AddMenu/ChangeMainMenuFun';
import ClientInfoChange from './RightMenu/client-register/ClientInfoChange';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
                                 
// import RightPage from './RightMenu/RightPage';
// import RightMenuBar from './RightMenu/RightMenuBar';
// import LoginPage from './Loginften/LoginPage';

function App() {
  console.log("skskskskskskskssk8888888888888888888")
  return (

    <BrowserRouter>
    <div className="App">
      <div className="frame">
        <div className="topmenubar">
          <TopMenuBar />
        </div>

        <div className="innerframe">
          <div className="left">
            <LeftMenuBar />
          </div>

          <Routes>          
            <Route exact path="/" element={<LoginPageNew />}/>
      
            <Route exact path="/clientadd" element={<ClientAdd />}/>
            <Route exact path="/addmainmenufun" element={<AddMainMenuFun/>}/>
            <Route exact path="/changemainmenufun/:id" element={<ChangeMainMenuFun/>}/>
            <Route exact path="/customerlisttable" element={<CustomerListTable/>}/>
            <Route exact path="/clientlisttable" element={<ClientListTable/>}/>
            <Route exact path="/mainmenutable" element={<MainMenuTable/>}/>
            <Route exact path="/optionmenu" element={<OptionMenu/>}/>
            <Route exact path="/clientinfochange/:id" element={<ClientInfoChange/>}/>
            {/* <Route exact path="/clientinfochange/:id" element={<MainMenuTable/>}/> */}
          </Routes>
        </div> 


      </div>
    </div>
  </BrowserRouter>

  )
}
export default App;