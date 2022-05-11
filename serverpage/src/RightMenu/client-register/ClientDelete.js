import React from 'react';

class ClientDelete extends React.Component{

  deleteMenu(id){
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
    console.log(id)


    const url='/api/clientdelate/'+id;
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

export default ClientDelete;