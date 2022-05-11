import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { post } from 'axios';
import { useParams } from "react-router-dom";

export default function ClientInfoChange() {

  const { id } = useParams();
  const [file, setfile] = useState({ preview: "", raw: "" });
  const [filename, setfilename] = useState("");

  const [chclientinfo, setchclientinfo] = useState({});
  const [chcomname, setchcomname] = useState("");
  const [chcomno, setchcomno] = useState("");
  const [chownername, setchownername] = useState("");
  const [chaddress, setchaddress] = useState("");
  const [chidregi, setchidregi] = useState("");
  const [chpw, setchpw] = useState("");
  const [chemail, setchemail] = useState("");
  const [chtellno, setchtellno] = useState("");
  const [chfaxno, setchfaxno] = useState("");
  const [chregidate, setchregidate] = useState("");
  const [chkqty, setchkqty] = useState("");
  const [chblankOne, setchblankOne] = useState("");
  const [chblankTwo, setchblankTwo] = useState("");
  const [chblankThree, setchblankThree] = useState("");

  console.log(id)
  console.log(chclientinfo)
  console.log(chcomname)
  console.log(chcomno)
  console.log(chownername)
  console.log(chaddress)
  console.log(chpw)
  console.log(chemail)
  console.log(chfaxno)
  console.log(chregidate)
  console.log(chkqty)
  console.log(chblankOne)
  console.log(chblankTwo)
  console.log(chblankThree)

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
    changeclientinfo()
      .then((response) => {
        console.log(response.data);
        // // this.props.stateRefresh()
      })
    window.location.reload();
  }


  const handleFormSubmitphoto = (e) => {
    e.preventDefault()
    changeclientphoto()
      .then((response) => {
        console.log(response.data);
        // // this.props.stateRefresh()
      })
    window.location.reload();
  }

  const changeclientphoto = (e) => {
    const url = `http://localhost:3000/api/changeclientphoto/${id}`;
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

  const changeclientinfo = (e) => {
    const url = `http://localhost:3000/api/changeclientinfo/${id}`;
    const formData = new FormData();
    formData.append('comname', chcomname)
    formData.append('comno', chcomno)
    formData.append('ownername', chownername)
    formData.append('address', chaddress)
    formData.append('idregi', chidregi)
    formData.append('pw', chpw)
    formData.append('email', chemail)
    formData.append('tellno', chtellno)
    formData.append('faxno', chfaxno)
    formData.append('regidate', chregidate)
    formData.append('kqty', chkqty)
    // formData.append('blankOne', chblankOne)
    // formData.append('blankTwo', chblankTwo)
    // formData.append('blankThree', chblankThree)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(url, formData, config)
  }

  useEffect(async () => {

    fetch(`/api/changeclientinfo/${id}`).then((result) => {
      result.json().then((resp) => {
        setchclientinfo(resp);
        setfile({ preview: resp[0].image })
        setchcomname(resp[0].comname)
        setchcomno(resp[0].comno)
        setchownername(resp[0].ownername)
        setchaddress(resp[0].address)
        setchidregi(resp[0].idregi)
        setchpw(resp[0].pw)
        setchemail(resp[0].email)
        setchtellno(resp[0].tellno)
        setchfaxno(resp[0].tellno)
        setchregidate(resp[0].chregidate)
        setchkqty(resp[0].kqty)
        setchblankOne(resp[0].blankOne)
        setchblankTwo(resp[0].blankTwo)
        setchblankThree(resp[0].blankThree)
      })
    })
  }, []);

  return (
    <div>
      <form style={{ backgroundColor: '#cfd8dc' }} className="form" onSubmit={handleFormSubmitphoto}>
        <div className="titleincustomer">사용자 정보를 수정해주세요</div>

        <div style={{ backgroundColor: 'white', display: 'flex' }}>
          <div style={{ display: 'inline-block', border: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'right', padding: 20, border: '1px' }}>
              <label style={{ display: 'flex', justifyContent: 'center', alignItem: 'right', padding: 1, border: '1px' }}>고객사 사진 </label>
            </div>

            <div style={{ margin: 20, display: 'flex', justifyContent: 'center', alignItem: 'center' }}>
              {file.preview ? (<img src={file.preview} alt="UserImg" />) : (<> <h6 className="text-center">없어</h6> </>)}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'left', alignItem: 'left' }}>
              <div>
                <div>
                  <label
                    style={{ display: 'flex', justifyContent: 'left', alignItem: 'left', fontSize: 12, width: 400, marginLeft: 10, marginBottom: 5 }}>
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

            <div style={{ display: 'flex', justifyContent: 'left', alignItem: 'left', padding: 10 }}>
              <button type="submit">사진 저장</button>
              <label style={{
                display: 'flex',
                justifyContent: 'left',
                alignItem: 'left',
                fontSize: 12,
                color: 'red',
                width: 400,
                marginLeft: 10
              }}> 사진을 변경하고 반드시 저장을 클릭하세용 </label>
            </div>
          </div>
        </div>
      </form>

      <form className="form" onSubmit={handleFormSubmit}>
        <label className="la">사업자이름</label>
        <input type="text" name="comname" value={chcomname} onChange={(e) => { setchcomname(e.target.value) }} /><br />
        <label className="la">사업자번호</label>
        <input type="text" name="comno" value={chcomno} onChange={(e) => { setchcomno(e.target.value) }} /><br />
        <label className="la">대표자이름</label>
        <input type="text" name="ownername" value={chownername} onChange={(e) => { setchownername(e.target.value) }} /><br />
        <label className="la">사업장주소</label>
        <input type="text" name="address" value={chaddress} onChange={(e) => { setchaddress(e.target.value) }} /><br />
        <label className="la">아이디</label>
        <input type="text" name="idregi" value={chidregi} onChange={(e) => { setchidregi(e.target.value) }} /><br />
        <label className="la">비밀번호</label>
        <input type="text" name="pw" value={chpw} onChange={(e) => { setchpw(e.target.value) }} /><br />
        <label className="la">이메일주소</label>
        <input type="text" name="email" value={chemail} onChange={(e) => { setchemail(e.target.value) }} /><br />
        <label className="la">전화번호</label>
        <input type="text" name="tellno" value={chtellno} onChange={(e) => { setchtellno(e.target.value) }} /><br />
        <label className="la">팩스번호</label>
        <input type="text" name="faxno" value={chfaxno} onChange={(e) => { setchfaxno(e.target.value) }} /><br />
        <label className="la">등록일자</label>
        <input type="text" name="regidate" value={chregidate} onChange={(e) => { setchregidate(e.target.value) }} /><br />
        <label className="la">키오스크수량</label>
        <input type="text" name="kqty" value={chkqty} onChange={(e) => { setchkqty(e.target.value) }} /><br />
        <label className="la">비고</label>
        <input type="text" name="blankOne" value={chblankOne} onChange={(e) => { setchblankOne(e.target.value) }} /><br />
        <label className="la">비고</label>
        <input type="text" name="blankTwo" value={chblankTwo} onChange={(e) => { setchblankTwo(e.target.value) }} /><br />
        <label className="la">비고</label>
        <input type="text" name="blankThree" value={chblankThree} onChange={(e) => { setchblankThree(e.target.value) }} /><br />


        <button className="btnforcli" type="submit">내용 변경</button>
      </form>
    </div>
  )
}

