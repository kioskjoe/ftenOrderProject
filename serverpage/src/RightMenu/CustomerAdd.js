import './CustomerAdd.css';
import React from 'react'
import { post } from 'axios';
// import RightMenuBar from './RightMenu/RightMenuBar';


class CustomerAdd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      name: '',
      birthday: '',
      gender: '',
      job: '',
      fileName: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.addCustomer = this.addCustomer.bind(this)
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.addCustomer()
      .then((response) => {
        console.log(response.data);
        // this.props.stateRefresh()
        
      })
    this.setState({
      file:null,
      name: '',
      birthday: '',
      gender:'',
      job: '',
      fileName:''
    })
    window.location.reload();
  }

  handleFileChange(e) {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.value
    });
  }
  handleValueChange(e){
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState)
  }

  addCustomer() {
    const url = 'http://localhost:3000/api/customers';
    const formData = new FormData();
    formData.append('image', this.state.file)
    formData.append('name', this.state.name)
    formData.append('birthday', this.state.birthday)
    formData.append('gender', this.state.gender)
    formData.append('job', this.state.job)

  
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    console.log(formData)
    return post(url, formData, config)
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleFormSubmit}>

        <div className="titleincustomer">고객사의 정보를 입력해주세요 </div>
        <label className="la">고객사 로고</label> 
        <input className="add" type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br />
        <label className="la">상호 지점명:</label> 
        {/* <input type="text" name="name" value={this.state.name} onChange={this.handleValueChange} /><br /> */}
        {/* <input type="text" name="name"  defaultValue={this.name ? this.name : {gender}} onChange={this.handleValueChange} /><br /> */}

        <input type="text" name="name" defaultValue={"this.state.birthday"} onChange={this.handleValueChange} /><br />

        <label className="la">사업자번호</label> 
        <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br />
        <label className="la">대표자</label> 
        <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br />
        <label className="la">직업</label> 
        <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br />

        <button className="btnforcli" type="submit">추가하기</button>
        
      </form>
    )
  }
}

export default CustomerAdd
