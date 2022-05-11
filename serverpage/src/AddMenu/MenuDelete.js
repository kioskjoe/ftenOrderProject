import React from 'react';

class MenuDelete extends React.Component{

  deleteMenu(id){
    const url='/api/mainmenu/'+id;
    fetch(url,{
      method: 'DELETE'
    });
    this.props.stateRefresh();
    // window.location.reload();
  }
  render(){
    return(
      <button onClick={(e)=>{this.deleteMenu(this.props.id)}}>삭제</button>
      )
  }
}

export default MenuDelete;