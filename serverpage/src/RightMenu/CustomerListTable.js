import React, {Component} from 'react';
import './RightMenu.css';
// import CustomerAdd from './CustomerAdd';
// import CustomerComtest from './CustomerComtest';
// import dice from './imges/dice.png';
import CustomerCom from './CustomerCom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/Tablebody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@mui/material/CircularProgress';
import { withStyles } from '@mui/styles';
import Imagetestcom from './Imagetestcom';
import axios from 'axios'
import CustomerAdd from './CustomerAdd';

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

// const api = axios.create({
//   baseURL: `/user/test`
// })

class CustomerListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
      completed: 0
    };
  }
  
  stateRefresh = () => {
    this.setState({
      customers: [],
      completed: 0
    });
    fetch('/api/customer')
      .then(res => res.json())
      .then(customer => this.setState({customer}, () => console.log('Customers fetched...', customer)));
  }

  componentDidMount() {
    this.timer = setInterval( this.progress, 200);
    this.callApi()
      .then(res => this.setState({customer:res}))
      .catch(err => console.log(err));  
  }
  callApi = async () => {
    const response = await fetch('/api/customer');
    const body = await response.json();
    return body;
  }


  progress = () => {
    const { completed } = this.state;
    this.setState ( { completed: completed >= 100 ? 0 : completed + 1});
  }

  render() {
    // const { classes} =this.props;
    return (
      <div>
        <p className="hdtext"> 포텐터치 버 관리 시스템</p>
        <div className="rightmenufirst">
        <Imagetestcom/>
          <CustomerAdd stateRefresh={this.stateRefresh}/>
          <Paper className={this.props.classes.root}>
            <Table className={this.props.classes.table}>
              <TableHead className={this.props.classes.tablehead}>
                <TableRow>
                  <TableCell className={this.props.classes.tablecell}>번호</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>생년월일</TableCell>
                  <TableCell>성별</TableCell>
                  <TableCell>직업</TableCell>
                  <TableCell>설정</TableCell>
                </TableRow>
              </TableHead>  
              <TableBody>
                {this.state.customer ? this.state.customer.map(c => {
                  return (
                    <CustomerCom 
                      stateRefresh={this.stateRefresh}
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
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

export default withStyles (styles) (CustomerListTable);