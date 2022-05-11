import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { post } from 'axios';
import AddMenufirst from './AddMenufirst';
import { getListSubheaderUtilityClass } from '@mui/material';
import { useParams } from "react-router-dom";
import contentDisposition from 'content-disposition';

export default function ChangeMainMenuFun() {

  const { id } = useParams();
  console.log(id)// 여기까지 들어온겨~~

  const [menusortfirstse, setmenusortfirstse] = useState([]);
  const [menusortfirst, setmenusortfirst] = useState();

  const [changemenu, setchangemenu] = useState({});

  const [file, setfile] = useState(null);
  const [filename, setfilename] = useState("");
  const [chmenuname, setchmenuname] = useState("");
  const [chmenuprice, setchmenuprice] = useState("");
  const [chmenudesc, setchmenudesc] = useState("");
  const [chmenublank, setchmenublank] = useState("");

  console.log(changemenu)
  console.log(menusortfirst)
  console.log(file)
  console.log(filename)
  console.log(chmenuname)
  console.log(chmenuprice)
  console.log(chmenudesc)
  console.log(chmenublank)

  // const changemenunameone = chmenuname;
  // console.log(changemenunameone)

  const handleFileChange = (e) => {
    const { name, value } = e.target;
    setfile(e.target.files[0]);
    setfilename(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault()
    changeMenuMain()
      .then((response) => {
        console.log(response.data);
        // // this.props.stateRefresh()
      })
    window.location.reload();
  }

  const changeMenuMain = (e) => {
    const url = `http://localhost:3000/api/changemenumain/${id}`;
    const formData = new FormData();
    formData.append('menusortfirst', menusortfirst)
    formData.append('image', file)
    formData.append('menuname', chmenuname)
    formData.append('menuprice', chmenuprice)
    formData.append('menudesc', chmenudesc)
    formData.append('menublank', chmenublank)

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
    ); setmenusortfirstse(result.data);

    fetch(`/api/changemainmenufun/${id}`).then((result) => {
      result.json().then((resp) => {
        setchangemenu(resp);
        setfile(resp[0].image)
        // setfilename(resp[0].filename)
        setchmenuname(resp[0].menuname)
        setchmenuprice(resp[0].menuprice)
        setchmenudesc(resp[0].menudesc)
        setchmenublank(resp[0].menublank)
      })
    })
  }, []);


  return (
    <div>
      <div>
        <AddMenufirst />
      </div>



      <form className="form" onSubmit={handleFormSubmit}>
        <div className="titleincustomer">변경할 메뉴의 내용을 수정해주세요</div>




        <div style={{
          backgroundColor: 'white',
          display: 'flex'
        }}>

          <div style={{
            display: 'inline-block',
            border: 1
          }}>
            <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'right',
            padding: 20,
            border: '1px'
            }}>
              <label className="la">메뉴 사진</label>
            </div>

            <div>
              <img src={file} />
            </div>
          </div>

          <input style={{
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'right',
            padding: 20
            }}
            type="file"
            name="file"
            file={file}
            value={filename}
            onChange={handleFileChange} />
          <br />
        </div>


        <div>
          <label> 분류를 선택해 주세요  </label>
          <select name="menusortfirst" value={menusortfirst} onChange={(e) => { setmenusortfirst(e.target.value) }}>
            {menusortfirstse.map(c => (
              <option key={c.id} value={c.menu}>
                {c.menu}
              </option>
            ))}
          </select>
        </div>

        <label className="la">메뉴이름:</label>
        <input
          type="text"
          required
          name="menuname"
          value={chmenuname} // 메뉴이름
          // onChange={(e)=>{setchmenuname(e.target.value)}}
          onChange={(e) => { setchmenuname(e.target.value) }}
        />
        <br />

        <label className="la">가격</label>
        <input
          style={{ width: 200, fontSize: 15 }}
          type="text"
          // required
          name="menuprice"
          value={chmenuprice} // 메뉴가격
          onChange={(e) => { setchmenuprice(e.target.value) }} />
        <span > 원 </span>
        <br />

        <label className="la">설명</label>
        <input
          type="text"
          // required
          name="menudesc"
          value={chmenudesc} // 메뉴설명
          onChange={(e) => { setchmenudesc(e.target.value) }} />
        <br />
        <label className="la">비고</label>

        <input
          type="text"
          // required
          name="menublank"
          value={chmenublank} //메뉴공백
          onChange={(e) => { setchmenublank(e.target.value) }} />
        <br />
        <button className="btnforcli" type="submit">메뉴 변경</button>

      </form>
    </div>
  )
}