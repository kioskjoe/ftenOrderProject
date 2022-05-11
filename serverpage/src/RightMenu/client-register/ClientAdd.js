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
        <div className="titleincustomer">고객사의 정보를 입력해주세요 </div>
        <label className="la">고객사 로고</label> <input className="add" type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br />
        <label className="la">사업자이름</label> <input type="text" placeholder="상호를 입력해주세요" name="comname" value={this.state.comname} onChange={this.handleValueChange} /><br />
        <label className="la">사업자번호</label> <input type="text" placeholder="사업자번호를 10자리를 입력해주세요" name="comno" value={this.state.comno} onChange={this.handleValueChange} /><br />
        <label className="la">대표자이름</label> <input type="text" placeholder="대표자 성함을 입력해주세요" name="ownername" value={this.state.ownername} onChange={this.handleValueChange} /><br />
        <label className="la">사업장주소</label> <input type="text" placeholder="사업장 주소를 입력해주세요" name="address" value={this.state.address} onChange={this.handleValueChange} /><br />
        <label className="la">아이디</label> <input type="text" placeholder=" 아이디를 등록해주세요 / 변경불가" name="idregi" value={this.state.idregi} onChange={this.handleValueChange} /><br />
        <label className="la">비밀번호</label> <input type="text" placeholder="비밀번호를 입력해주세요" name="pw" value={this.state.pw} onChange={this.handleValueChange} /><br />
        <label className="la">이메일주소</label> <input type="text" placeholder="이메일주소를 입력해 주세요" name="email" value={this.state.email} onChange={this.handleValueChange} /><br />
        <label className="la">전화번호</label> <input type="text" placeholder="사업장 전화번호를 입력해주세요" name="tellno" value={this.state.tellno} onChange={this.handleValueChange} /><br />
        <label className="la">팩스번호</label> <input type="text" placeholder="사업장 팩스번호를 입력해주세요" name="faxno" value={this.state.faxno} onChange={this.handleValueChange} /><br />
        <label className="la">등록일자</label> <input type="text" placeholder="오늘 날자를 입력해주세요" name="regidate" value={this.state.regidate} onChange={this.handleValueChange} /><br />
        <label className="la">키오스크수량</label> <input type="text" name="kqty" value={this.state.kqty} onChange={this.handleValueChange} /><br />
        <label className="la">비고</label> <input type="text" name="blankOne" value={this.state.blankOne} onChange={this.handleValueChange} /><br />
        <label className="la">비고</label> <input type="text" name="blankTwo" value={this.state.blankTwo} onChange={this.handleValueChange} /><br />
        <label className="la">비고</label> <input type="text" name="blankThree" value={this.state.blankThree} onChange={this.handleValueChange} /><br />

        <div>
          <label> 업종을 선택해 주세요  </label>
          <select name="busikind" value={this.state.busikind} onChange={this.handleValueChange}> 
            <option value="grapefruit">양식업종</option>
            <option value="lime">한식업종</option>
            <option value="coconut">분식업종</option>
            <option value="mango">중식업종</option>
          </select>
        </div>

        {/* <input type="checkbox" checked={this.isChecked} onChange={(e) => this.checkHandler(e)}/> */}

        <div>
          사용에 동의해라?<input onChange={this.handleCheckbox} type="checkbox" name="agree" value="java" checked={this.state.agree.java}/><br />
          사용에 동의해라?<input onChange={this.handleCheckbox} type="checkbox" name="agree" value="php" checked={this.state.agree.php}/><br />
          사용에 동의해라?<input onChange={this.handleCheckbox} type="checkbox" name="agree" value="ruby" checked={this.state.agree.ruby}/><br />
        </div>


        <button className="btnforcli" type="submit">추가하기</button>
      
      </form>
    )
  }
}

export default ClientAdd
