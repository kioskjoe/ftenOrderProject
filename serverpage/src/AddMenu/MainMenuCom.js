import * as React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import MenuDelete from './MenuDelete';
import {Link} from "react-router-dom";

class MainMenuCom extends React.Component {
  handleClick(e) {
    window.location.href = "/changemainmenufun"
  }
  render() {
    return (
      <TableRow>
        <TableCell> {this.props.id} </TableCell>
        <TableCell> <img src={this.props.image} alt="profile" /> </TableCell>
        <TableCell> {this.props.menusortfirst} </TableCell>
        <TableCell> {this.props.menuname} </TableCell>
        <TableCell> {this.props.menuprice} </TableCell>
        <TableCell> {this.props.menudesc} </TableCell>
        <TableCell> {this.props.menublank} </TableCell>
        <TableCell> <MenuDelete stateRefresh={this.props.stateRefresh} id={this.props.id} /></TableCell>

        <TableCell>
          <Link to={`/changemainmenufun/${this.props.id}`}>
            <button> 메뉴수정</button>
          </Link>
        </TableCell>

      </TableRow>
    )
  }
}

export default MainMenuCom;
