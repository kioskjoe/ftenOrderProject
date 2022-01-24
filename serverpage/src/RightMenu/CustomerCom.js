import * as React from 'react';
import TableRow from'@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';
// import dice from './imges/dice.png';


class CustomerCom extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell> {this.props.id} </TableCell>
        <TableCell> <img src={this.props.imgage} alt="profile"/> </TableCell>
        <TableCell> {this.props.name} </TableCell>
        <TableCell> {this.props.birthday} </TableCell>
        <TableCell> {this.props.gender} </TableCell>
        <TableCell> {this.props.job} </TableCell>
        <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
      </TableRow>    
    )
  }
}

export default CustomerCom;
