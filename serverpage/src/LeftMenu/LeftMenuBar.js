import * as React from 'react';
import './LeftMenu.css';
import LeftMenuList from './LeftMenuList';
import Notice from './Notice';


function LeftMenuBar() {
  return (
    <div>
      <div className="leftmenugroup"> 
      <LeftMenuList/> 
      </div>
      <Notice/> 

    </div>
   


  );
}

export default LeftMenuBar;