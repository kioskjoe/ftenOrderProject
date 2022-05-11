import React from 'react';


const id = document.querySelector("#id"),
psword=document.querySelector("#psword"),
registerBtn = document.querySelector ("#button");

// registerBtn.addEventListerner("click" , register);

export default function LoginPage() {
  // const req = { 
  //   id: id.value,
  //   psword:psword.value
  // };
  
  // console.log(req);

  // fetch("/register",{
  //   mothod: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(req),
  // })

  //   .then((res) => res.json())
  //   .then((res) => {
  //     if (res.success) {
  //       location.href ="/login";
  //     } else {
  //     alert(res.msg);
  //     }
  //   })
  //   .catch((err) => {
  //     console.error("인증실폐");
  //   })
  // }

  return (
    <div className="login-page">
      <form className="form">
        <input id="id" type="test" placeholder="아이디"/>
        <input id='psword' type='password' placeholder='비밀번호'/>
        <p id="button">login</p>
      </form>
    </div>
  )
}
