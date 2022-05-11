import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { post } from 'axios';
import AddMenufirst from './AddMenufirst';
import { useParams } from "react-router-dom";

export default function ChangeMainMenuFun() {

  const { id } = useParams();

  const [file, setfile] = useState({ preview: "", raw: "" });
  const [filename, setfilename] = useState("");

  const [menusortfirstse, setmenusortfirstse] = useState([]);
  const [menusortfirst, setmenusortfirst] = useState();

  const [changemenu, setchangemenu] = useState({});
  const [chmenuname, setchmenuname] = useState("");
  const [chmenuprice, setchmenuprice] = useState("");
  const [chmenudesc, setchmenudesc] = useState("");
  const [chmenublank, setchmenublank] = useState("");

  console.log("aaaa3333ad85555dddd555555ddd555sssssaaaaaaaaaaaaaa")

  const changemenunameone = chmenuname;

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
    changeMenuMain()
      .then((response) => {
        console.log(response.data);
        // // this.props.stateRefresh()
      })
    window.location.reload();
  }

  const handleFormSubmitphoto = (e) => {
    e.preventDefault()
    changeMenuMainphoto()
      .then((response) => {
        console.log(response.data);
        // // this.props.stateRefresh()
      })
    window.location.reload();
  }

  const changeMenuMainphoto = (e) => {
    const url = `http://localhost:3000/api/changemenumainphoto/${id}`;
    const formData = new FormData();
    formData.append('image', file.raw)
    formData.append('filename', filename)
    console.log(filename);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(url, formData, config)
  }

  const changeMenuMain = (e) => {
    const url = `http://localhost:3000/api/changemenumain/${id}`;
    // const url = `http://localhost:3000/api/changeclientinfo/${id}`;
    const formData = new FormData();
    formData.append('menusortfirst', menusortfirst)
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
        setfile ({preview : resp[0].image})
        setmenusortfirst(resp[0].menusortfirst)
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
      <form className="form" onSubmit={handleFormSubmitphoto}>
        <div className="titleincustomer">변경할 메뉴의 내용을 수정해주세요</div>    
        
        <div style={{ backgroundColor:'white', display: 'flex'}}>        
          <div style={{ display: 'inline-block', border: 1 }}>
            <div style={{display:'flex', justifyContent:'center', alignItem:'right', padding:20, border:'1px'}}>
              <label style={{ display: 'flex', justifyContent: 'center', alignItem: 'right', padding: 5, border: '1px' }}>메뉴 사진 </label>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center' }}>
              {file.preview ? ( <img src={file.preview} alt="UserImg"/>) : (<> <h6 className="text-center">없어</h6> </>)}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'left', alignItem: 'left' }}>
              <div>
                <div>
                  <label 
                  style={{ display: 'flex',justifyContent: 'left',alignItem: 'left',fontSize: 12,width: 400, marginLeft: 10, marginBottom: 5}}> 
                  사용하실 사진을 선택해주세요 </label>
                </div>

                <div>
                  <input
                    accept='image/jpg, image/jpeg, image/png'
                    type="file"
                    multiple
                    name="file"
                    file={file}
                    value={filename}
                    onChange={handleFileChange} />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'left', alignItem: 'left' , padding: 10}}>
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
            </div>
          </div>
        </div>
      </form>


      <form className="form" onSubmit={handleFormSubmit}>
        <div style={{
          display: 'flex',
          alignItem: 'right',
          fontSize: 12,
        }}>
          <label> 분류를 선택해 주세요  </label>
          <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'right', fontSize: 12, }}>
            <select name="menusortfirst" value={menusortfirst} onChange={(e) => { setmenusortfirst(e.target.value) }}>
              {menusortfirstse.map(c => (
                <option key={c.id} value={c.menu}>
                  {c.menu}
                </option>
              ))}
            </select>

            <label style={{
              justifyContent: 'center',
              fontSize: 12,
              width: 300,
              paddingLeft: 10
            }}> "기존 분류" {menusortfirst}
            </label>
          </div>

        </div>

        <label className="la">메뉴이름:</label>
        <input
          type="text"
          required
          name="menuname"
          value={chmenuname} // 메뉴이름
          onChange={(e) => { setchmenuname(e.target.value) }}
        />
        <br />

        <label className="la">가격</label>
        <input
          style={{ width: 200, fontSize: 15 }}
          type="text"
          name="menuprice"
          value={chmenuprice} // 메뉴가격
          onChange={(e) => { setchmenuprice(e.target.value) }} />
        <span > 원 </span>
        <br />

        <label className="la">설명</label>
        <input
          type="text"
          name="menudesc"
          value={chmenudesc} // 메뉴설명
          onChange={(e) => { setchmenudesc(e.target.value) }} />
        <br />
        <label className="la">비고</label>

        <input
          type="text"
          name="menublank"
          value={chmenublank} //메뉴공백
          onChange={(e) => { setchmenublank(e.target.value) }} />
        <br />

        <button className="btnforcli" type="submit">내용 변경</button>

      </form>
    </div>
  )
}