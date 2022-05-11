import React, {Component} from 'react';
import './RightMenu.css';
import MainMenuCom from './MainMenuCom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/Tablebody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@mui/material/CircularProgress';
import { withStyles } from '@mui/styles';
import axios from 'axios'

const styles = {
  root: {    
    margintop:  3,
  },
  table: {
    minwidth:1000,
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // color: gray,
  },
  tablehead: {
    background: '  #4cb3e2',
    color: 'primary.main',
    fontWeight: 800,
  },
  tablecell:{
    background: '#4cb3e2',
    color: 'primary.main',
    fontWeight: 'bold',
  }
  // progress: {
  // margin: spacing.unit *2
  // }
}

const api = axios.create({
  baseURL: `/user/test`
})

class MainMenuTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainmenu: [],
      completed: 0
    };
  }
  
  stateRefresh = () => {
    this.setState({
      mainmenu: [],
      completed: 0
    });
    fetch('/api/mainmenutable')
      .then(res => res.json())
      .then(mainmenu => this.setState({mainmenu}, () => console.log('MainMenus fetched...', mainmenu)));
  }

  componentDidMount() {
    this.timer = setInterval( this.progress, 200);
    this.callApi()
      // .then(res => console.log(res))
      .then(res => this.setState({mainmenu:res}))
      // .then(res => console.log(res)) 이건 안된 안좋네~
      .catch(err => console.log(err));  
  }
  callApi = async () => {
    const response = await fetch('/api/mainmenutable');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState ( { completed: completed >= 100 ? 0 : completed + 1});
  }

  render() {
    return (
      <div>
        <p className="hdtext"> 등록된 메뉴리스트 </p>
      
        <div className="rightmenufirst">
          <Paper className={this.props.classes.root}>
            <Table className={this.props.classes.table}>
              <TableHead className={this.props.classes.tablehead}>
                <TableRow>
                  <TableCell className={this.props.classes.tablecell}>번호</TableCell>
                  <TableCell>사진</TableCell>
                  <TableCell>분류</TableCell>
                  <TableCell>메뉴명</TableCell>
                  <TableCell>가격</TableCell>
                  <TableCell>설명</TableCell>
                  <TableCell>공백</TableCell>
                  <TableCell>삭제</TableCell>
                  <TableCell>수정</TableCell>
                </TableRow>        
              </TableHead> 

              <TableBody>
                {this.state.mainmenu ? this.state.mainmenu.map(c => {
                  return (
                    <MainMenuCom 
                      stateRefresh={this.stateRefresh}
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      menusortfirst={c.menusortfirst}
                      menuname={c.menuname}
                      menuprice={c.menuprice}
                      menudesc={c.menudesc}
                      menublank={c.menublank}
                    />
                  )
                }):

                <TableRow>
                  <tableCell colSpan="7" align="right">
                    <CircularProgress variant="indeterminate" value= {this.state.completed}/>
                  </tableCell>
                </TableRow> 
                }
              </TableBody>
            </Table>    
          </Paper>
          
        </div>
      </div>
    );
  }
}

export default withStyles (styles) (MainMenuTable);