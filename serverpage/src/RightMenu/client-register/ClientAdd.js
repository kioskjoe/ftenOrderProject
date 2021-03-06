import styles from "./ClientAdd.module.css";
import React from 'react'
import { post } from 'axios';

class ClientAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      comname: '',
      comno: '',
      ownername: '',
      address: '',
      idregi: '',
      pw: '',
      email: '',
      tellno: '',
      faxno: '',
      regidate: '',
      kqty: '',
      blankOne: '',
      blankTwo: '',
      blankThree: '',
      fileName: '',
      busikind: '',
      agree:{
        java:false,
        php: false,
        ruby: false
      }
      
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.addClient = this.addClient.bind(this)
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {this.setState({name: event.target.value});  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.addClient()
      .then((response) => {
        // console.log(response.data);
        // this.props.stateRefresh();
      })
    this.setState({
      file: null,
      comname: '',
      comno: '',
      ownername: '',
      address: '',
      idregi: '',
      pw: '',
      email: '',
      tellno: '',
      faxno: '',
      regidate: '',
      kqty: '',
      blankOne: '',
      blankTwo: '',
      blankThree: '',
      fileName: '',
      busikind: '',
      agree:{
        java:false,
        php: false,
        ruby: false
      }        
    })
    window.location.reload();
  }

  handleFileChange(e) {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.value
    });
  }
  handleValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleCheckbox = event =>{
    console.log(event.target.value);
    let state = this.state;
    state.agree[event.target.value] = event.target.checked;
    this.setState(state);
    console.log(this.state.agree);
  }

  addClient() {
    const url = '/api/clientadd';
    const formData = new FormData();
    formData.append('image', this.state.file)
    formData.append('comname', this.state.comname)
    formData.append('comno', this.state.comno)
    formData.append('ownername', this.state.ownername)
    formData.append('address', this.state.address)
    formData.append('idregi', this.state.idregi)
    formData.append('pw', this.state.pw)
    formData.append('email', this.state.email)
    formData.append('tellno', this.state.tellno)
    formData.append('faxno', this.state.faxno)
    formData.append('regidate', this.state.regidate)
    formData.append('kqty', this.state.kqty)
    formData.append('blankOne', this.state.blankOne)
    formData.append('blankTwo', this.state.blankTwo)
    formData.append('blankThree', this.state.blankThree)
    formData.append('busikind', this.state.busikind)
    formData.append('agreeone', this.state.agree.java)
    formData.append('agreetwo', this.state.agree.php)
    formData.append('agreethree', this.state.agree.ruby)

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(url, formData, config)
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <div className="titleincustomer">???????????? ????????? ?????????????????? </div>
        <label className="la">????????? ??????</label> <input className="add" type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br />
        <label className="la">???????????????</label> <input type="text" placeholder="????????? ??????????????????" name="comname" value={this.state.comname} onChange={this.handleValueChange} /><br />
        <label className="la">???????????????</label> <input type="text" placeholder="?????????????????? 10????????? ??????????????????" name="comno" value={this.state.comno} onChange={this.handleValueChange} /><br />
        <label className="la">???????????????</label> <input type="text" placeholder="????????? ????????? ??????????????????" name="ownername" value={this.state.ownername} onChange={this.handleValueChange} /><br />
        <label className="la">???????????????</label> <input type="text" placeholder="????????? ????????? ??????????????????" name="address" value={this.state.address} onChange={this.handleValueChange} /><br />
        <label className="la">?????????</label> <input type="text" placeholder=" ???????????? ?????????????????? / ????????????" name="idregi" value={this.state.idregi} onChange={this.handleValueChange} /><br />
        <label className="la">????????????</label> <input type="text" placeholder="??????????????? ??????????????????" name="pw" value={this.state.pw} onChange={this.handleValueChange} /><br />
        <label className="la">???????????????</label> <input type="text" placeholder="?????????????????? ????????? ?????????" name="email" value={this.state.email} onChange={this.handleValueChange} /><br />
        <label className="la">????????????</label> <input type="text" placeholder="????????? ??????????????? ??????????????????" name="tellno" value={this.state.tellno} onChange={this.handleValueChange} /><br />
        <label className="la">????????????</label> <input type="text" placeholder="????????? ??????????????? ??????????????????" name="faxno" value={this.state.faxno} onChange={this.handleValueChange} /><br />
        <label className="la">????????????</label> <input type="text" placeholder="?????? ????????? ??????????????????" name="regidate" value={this.state.regidate} onChange={this.handleValueChange} /><br />
        <label className="la">??????????????????</label> <input type="text" name="kqty" value={this.state.kqty} onChange={this.handleValueChange} /><br />
        <label className="la">??????</label> <input type="text" name="blankOne" value={this.state.blankOne} onChange={this.handleValueChange} /><br />
        <label className="la">??????</label> <input type="text" name="blankTwo" value={this.state.blankTwo} onChange={this.handleValueChange} /><br />
        <label className="la">??????</label> <input type="text" name="blankThree" value={this.state.blankThree} onChange={this.handleValueChange} /><br />

        <div>
          <label> ????????? ????????? ?????????  </label>
          <select name="busikind" value={this.state.busikind} onChange={this.handleValueChange}> 
            <option value="grapefruit">????????????</option>
            <option value="lime">????????????</option>
            <option value="coconut">????????????</option>
            <option value="mango">????????????</option>
          </select>
        </div>

        {/* <input type="checkbox" checked={this.isChecked} onChange={(e) => this.checkHandler(e)}/> */}

        <div>
          ????????? ?????????????<input onChange={this.handleCheckbox} type="checkbox" name="agree" value="java" checked={this.state.agree.java}/><br />
          ????????? ?????????????<input onChange={this.handleCheckbox} type="checkbox" name="agree" value="php" checked={this.state.agree.php}/><br />
          ????????? ?????????????<input onChange={this.handleCheckbox} type="checkbox" name="agree" value="ruby" checked={this.state.agree.ruby}/><br />
        </div>


        <button className="btnforcli" type="submit">????????????</button>
      
      </form>
    )
  }
}

export default ClientAdd
