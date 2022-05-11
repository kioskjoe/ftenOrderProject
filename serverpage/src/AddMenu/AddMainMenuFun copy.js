import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { post } from 'axios';
import AddMenufirst from './AddMenufirst';

export default function AddMainMenuFun() {

  const [menusortfirstse, setmenusortfirstse] = useState([]);
  const [file, setfile] = useState({ preview: "", raw: "" });
  const [filename, setfilename] = useState("");

  const [menuMain, setmenuMain] = useState({
    menusortfirst: '',
    menuname: '',
    menuprice: '',
    menudesc: '',
    menublank: ''
  });

  const { menusortfirst, menuname, menuprice, menudesc, menublank } = menuMain;

  console.log(menuMain)
  console.log(file)
  console.log(filename)
  console.log(menusortfirst)
  console.log(menuname)
  console.log(menuprice)
  console.log(menudesc)
  console.log(menublank)

  const onChange = (e) => {
    const { name, value } = e.target;

    setmenuMain({
      ...menuMain,
      [name]: value
    });
  };

  // const handleFileChange = (e) => {
  //   const { name, value } = e.target;

  //   setmenuMain({
  //     ...menuMain,
  //     file: e.target.files[0],
  //     filename: value
  //   });
  // };

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
        //     // this.props.stateRefresh()
      })
    // setmenuMain({
    //   menusortfirst: '',
    //   file: null,
    //   menuname: '',
    //   menuprice: '',
    //   menudesc: '',
    //   menublank: '',
    //   filename: ''
    // })
    window.location.reload();
  }

  const addMenuMain = (e) => {
    const url = 'http://localhost:3000/api/addmenumain';
    const formData = new FormData();
    formData.append('menusortfirst', menusortfirst)
    formData.append('image', file.raw)
    formData.append('filename', filename)
    formData.append('menuname', menuname)
    formData.append('menuprice', menuprice)
    formData.append('menudesc', menudesc)
    formData.append('menublank', menublank)

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(url, formData, config)
  }


  useEffect(async () => {
    const result = await axios.get(
      '/api/menusortfirstre'
    );
    setmenusortfirstse(result.data);
  }, []);


  return (
    <div >
      <div>
        <AddMenufirst />
      </div>
      <form style={{ backgroundColor: '#cfd8dc' }} className="form" onSubmit={handleFormSubmit}>
        <div className="titleincustomer">메뉴 정보를 입력해주세요 </div>

        <div style={{ backgroundColor: '#eceff1', display: 'flex' }}>
          <div style={{ display: 'inline-block', border: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'right', padding: 5, border: '1px' }}>
              <label style={{ display: 'flex', justifyContent: 'center', alignItem: 'right', border: '1px' }}>메뉴 사진 </label>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'right', padding: 20, border: '1px' }}>
              {file.preview ? (<img src={file.preview} alt="UserImg" />) : (<> <h6 className="text-center">없어</h6> </>)}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItem: 'right', padding: 20 }}>
              <div>
                
                <div>
                  <label
                    style={{ display: 'flex', justifyContent: 'left', alignItem: 'left', fontSize: 12, width: 400, marginLeft: 10, marginBottom: 5 }}>
                    사용하실 xx사진을 선택해주세요 </label>
                </div>

                <div>
                  <input
                    accept='image/jpg, image/jpeg, image/png'
                    type="file"
                    multiple
                    required
                    name="file"
                    file={file}
                    value={filename}
                    onChange={handleFileChange} />
                </div>
              </div>
            </div>


            {/* 
            <div style={{ display: 'flex', paddingLeft: 30, justifyContent: 'left', alignItem: 'right' }}>
              <button type="submit">사진 저장</button>
              <label style={{
                display: 'flex',
                justifyContent: 'left',
                alignItem: 'left',
                fontSize: 12,
                color: 'red',
                width: 400,
                marginLeft: 10
              }}> 메뉴 사진을 변경하고 반드시 저장을 클릭하세용 </label>
            </div> */}

          </div>
        </div>

        {/* <label className="la">메뉴 사진</label>
        <input type="file" name="file" file={file} value={filename} onChange={handleFileChange} /><br />
         */}

        <div>
          <label> 분류를 선택해 주세요  </label>
          <select name="menusortfirst" value={menusortfirst} onChange={onChange}>
            {menusortfirstse.map(c => (
              <option key={c.id} value={c.menu}>
                {c.menu}
              </option>
            ))}
          </select>
        </div>
        <label className="la">메뉴이름:</label>
        <input type="text" required name="menuname" value={menuname} onChange={onChange} /><br />
        <label className="la">가격</label>
        <input style={{ width: 200, fontSize: 15 }} type="text" required name="menuprice" value={menuprice} onChange={onChange} /> <span > 원 </span> <br />
        <label className="la">설명</label>
        <input type="text" required name="menudesc" value={menudesc} onChange={onChange} /><br />
        <label className="la">비고</label>
        <input type="text" required name="menublank" value={menublank} onChange={onChange} /><br />
        <button className="btnforcli" type="submit">메뉴 추가</button>
      </form>
    </div>
  )
}
