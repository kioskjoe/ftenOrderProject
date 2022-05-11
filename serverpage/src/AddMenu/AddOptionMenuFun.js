import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { post } from 'axios';
import AddMenufirst from './AddMenufirst';

export default function AddMainMenuFun() {

  const [file, setfile] = useState({ preview: "", raw: "" });
  const [filename, setfilename] = useState("");
  // const [optiontytle, setoptiontytle] = useState("");
  const [optionMenu, setoptionMenu] = useState({
    optiontytle: '',
    optionname: '',
    optionprice: ''
  });

  const { optiontytle, optionname, optionprice } = optionMenu;

  console.log(file)
  console.log(filename)
  console.log(optiontytle)
  console.log(optionname)
  console.log(optionprice)

  console.log("slllllllllllllllllllllllllllllllllllllll")
  const onChange = (e) => {
    const { name, value } = e.target;

    setoptionMenu({
      ...optionMenu,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      // const { name, value } = e.target;
      console.log(e.target.files);
      setfile({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],

      });
      setfilename(e.target.value);
    } else console.log("upload img");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log("가나다라마")
    addMenuMain()
      .then((response) => {
        console.log(response.data);
      })
    window.location.reload();
  }

  const addMenuMain = (e) => {
    const url = 'http://localhost:3000/api/addoptionmenu';
    const formData = new FormData();
    formData.append('image', file.raw)
    formData.append('filename', filename)
    formData.append('optiontytle', optiontytle)
    formData.append('optionname', optionname)
    formData.append('optionprice', optionprice)


    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(url, formData, config)
  }

  return (
    <div >
      <form style={{ backgroundColor: '#cfd8dc' }} className="form" onSubmit={handleFormSubmit}>
        <div className="titleincustomer">옵션 정보를 입력해주세요 </div>

        <div style={{ display: 'flex', alignItem: 'right', padding: 20 }}>
          <span>
            <div>
              <label className="la">옵션메뉴명</label>
            </div>
            <input style={{ width: 100, fontSize: 15 }} type="text" required name="optiontytle" value={optiontytle} onChange={onChange} /><br />
          </span>

          <span>
            <div>
              <label className="la">옵션이름</label>
            </div>
            <input style={{ width: 100, fontSize: 15 }} type="text" required name="optionname" value={optionname} onChange={onChange} /><br />
          </span>
          <span>
            <div>
              <label className="la">가격</label>
            </div>
            <input style={{ width: 100, fontSize: 15 }} type="text" required name="optionprice" value={optionprice} onChange={onChange} /> <span > 원 </span> <br />
          </span>

          <span style={{ display: 'flex', justifyContent: 'center', alignItem: 'right', padding: 20, border: '1px' }}>
            {file.preview ? (<img src={file.preview} alt="UserImg" />) : (<> <h6 className="text-center">없어</h6> </>)}
          </span>

          <span style={{ display: 'flex', alignItem: 'right', padding: 20 }}>
            <div>
              <div>
                <input
                  accept='image/jpg, image/jpeg, image/png'
                  type="file"
                  name="file"
                  file={file}
                  value={filename}
                  onChange={handleFileChange} />
              </div>
            </div>
          </span >
        </div>



        <button className="btnforcli" type="submit">옵션 추가</button>
      </form>
    </div>
  )
}
