import React, {Component} from 'react';
import '../RightMenu.css';
import ClientCom from './ClientCom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/Tablebody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@mui/material/CircularProgress';
import { withStyles } from '@mui/styles';
import axios from 'axios'
import { red } from 'color-name';

const styles = {
  tablehead: {
    background: '  #4cb3e2',
    color: 'primary.main',
    fontWeight: 500,
    fontSize: 5,
  },
}

const api = axios.create({
  baseURL: `/user/test`
})

class ClientListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: [],
      completed: 0
    };
  }
  
  stateRefresh = () => {
    this.setState({
      client: [],
      completed: 0
    });
    fetch('/api/clientlist')
      .then(res => res.json())
      .then(client => this.setState({client}, () => console.log('client fetched...', client)));
  }

  componentDidMount() {
    this.timer = setInterval( this.progress, 200);
    this.callApi()
      .then(res => this.setState({client:res}))
      .catch(err => console.log(err));  
  }
  callApi = async () => {
    const response = await fetch('/api/clientlist');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState ( { completed: completed >= 100 ? 0 : completed + 1});
  }

  render() {
    const { classes} =this.props;


    return (
      <div>
        <div style={{ height :50, width:  700 }}>
          <p style={{ fontSize: 25,  padding:20, width:  500 }}> 포텐터치 서버 관리 시스템</p>
        </div>

        <div style={{ padding:20, width:  1400 }}>
          <Paper>
            <Table>
              <TableHead className={classes.tablehead}>
                <TableRow>
                  <TableCell className={this.props.classes.tablecell}>번호</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>회사명</TableCell>
                  <TableCell>회사번호</TableCell>
                  <TableCell>대표자</TableCell>
                  <TableCell>주소</TableCell>
                  <TableCell>ID</TableCell>
                  {/* <TableCell>PW</TableCell> */}
                  <TableCell>이메일</TableCell>
                  <TableCell>전화</TableCell>
                  <TableCell>펙스</TableCell>
                  <TableCell>등록날자</TableCell>
                  <TableCell>수량</TableCell> 
                  <TableCell>수량</TableCell> 
                  <TableCell>삭제</TableCell> 
                  <TableCell>수정</TableCell>  
                </TableRow>
              </TableHead>  

              <TableBody>
                {this.state.client ? this.state.client.map(c => {
                  return (
                    <ClientCom 
                      stateRefresh={this.stateRefresh}
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      comname={c.comname}
                      comno={c.comno}
                      ownername={c.ownername}
                      address={c.address}
                      idregi={c.idregi}
                      // pw={c.pw}
                      email={c.email}
                      tellno={c.tellno}
                      faxno={c.faxno}
                      regidate={c.regidate}
                      kqty={c.kqty}        
                    />
                  )
                }):
                <TableRow>
                  <tableCell colSpan="6" align="right">
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

export default withStyles (styles) (ClientListTable);