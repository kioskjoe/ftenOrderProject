import React, { Component } from 'react';
import './CustomerAdd.css';
// import React from 'react'
import { post } from 'axios';

class AddMainMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuSortFirst: '',
      file: null,
      menuName: '',
      menuPrice: '',
      menuDesc: '',
      menuBlank: '',
      fileName: '',
      menusortfirstse1: [ ]
    };

    console.log(this.state.menuSortFirstRe);

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.addCustomer = this.addCustomer.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

    console.log("skskskskskskskssk")
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.addCustomer()
      .then((response) => {
        // console.log(response.data);
        // this.props.stateRefresh()

      })
    this.setState({
      menuSortFirst: '',
      file: null,
      menuName: '',
      menuPrice: '',
      menuDesc: '',
      menuBlank: '',
      fileName: '',
      menusortfirstse1: []
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
    this.setState(nextState)
  }

  addCustomer() {
    const url = 'http://localhost:3000/api/addallmenu';
    const formData = new FormData();
    formData.append('menuimage', this.state.file)
    formData.append('menuname', this.state.menuName)
    formData.append('menuprice', this.state.menuPrice)
    formData.append('menudesc', this.state.menuDesc)
    formData.append('menublank', this.state.menuBlank)
    formData.append('menusortfirst', this.state.menuSortFirst)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    return post(url, formData, config)
  }

  componentDidMount() {

    fetch('/api/menusortfirstre')
      .then((response) => {
        return response.json();
      })
      .then(result =>
        this.setState({ menuSortFirstRe: "가나다" })
      )
      .catch(err => console.log(err));
  }


  render() {
    return (
      <form className="form" onSubmit={this.handleFormSubmit}>

        <div className="titleincustomer">메뉴 정보를 입력해주세요 </div>

        <div>
          <label> 분류를 선택해 주세요  </label>
          <select >
            {menusortfirstse1.map(c => (
              <option key={c.id} value={c.menu}>
                {c.menu}
              </option>
            ))}
          </select>
        </div>

        <label className="la">메뉴 사진</label>
        <input className="add" type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br />
        <label className="la">메뉴이름:</label>
        <input type="text" name="menuname" value={this.state.menuname} onChange={this.handleValueChange} /><br />
        <label className="la">가격</label>
        <input type="text" name="menuprice" value={this.state.menuprice} onChange={this.handleValueChange} /><br />
        <label className="la">설명</label>
        <input type="text" name="menudesc" value={this.state.menudesc} onChange={this.handleValueChange} /><br />
        <label className="la">비고</label>
        <input type="text" name="menublank" value={this.state.menublank} onChange={this.handleValueChange} /><br />

        <button className="btnforcli" type="submit">메뉴 추가</button>

      </form>
    )
  }
}

export default AddMainMenu
