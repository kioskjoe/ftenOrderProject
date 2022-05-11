import * as React from 'react';
import TableRow from'@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ClientDelete from './ClientDelete';
import {Link} from "react-router-dom";

class ClientCom extends React.Component {
  handleClick(e) {
    window.location.href = "/clientinfochange"
  }
  render() {
    return (
      <TableRow>
        <TableCell> {this.props.id} </TableCell>
        <TableCell> <img src={this.props.image} alt="profile"/> </TableCell>
        <TableCell> {this.props.comname} </TableCell>
        <TableCell> {this.props.comno} </TableCell>
        <TableCell> {this.props.ownername} </TableCell>
        <TableCell> {this.props.address} </TableCell>
        <TableCell> {this.props.idregi} </TableCell>
        <TableCell> {this.props.pw} </TableCell>
        <TableCell> {this.props.email} </TableCell>
        <TableCell> {this.props.tellno} </TableCell>
        <TableCell> {this.props.faxno} </TableCell>
        <TableCell> {this.props.regidate} </TableCell>
        <TableCell> {this.props.kqty} </TableCell>
        {/* <TableCell> {this.props.blankOne} </TableCell>
        <TableCell> {this.props.blankTwo} </TableCell>
        <TableCell> {this.props.blankThree} </TableCell>
        <TableCell> {this.props.busykine} </TableCell>
        <TableCell> {this.props.agreeone} </TableCell>
        <TableCell> {this.props.agreetwo} </TableCell>
        <TableCell> {this.props.agreethree} </TableCell> */}
        <TableCell><ClientDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>

        <TableCell>
          <Link to={`/clientinfochange/${this.props.id}`}>
            <button> 정보수정</button>
          </Link>
        </TableCell>

      </TableRow>    
    )
  }
}

export default ClientCom;
