import React from 'react';
import img from "../imges/img.jpg"
// import img2 from "../../../../upload/img.jpg"
// import img3 from "../../../../imges/img.jpg"

// import { Button} from "@material-ui/core"


const images = {
  imagenn : 'https://placeimg.com/64/64/1'
}

export default function Imagetestcom() {
  return (
    <div>

      <div>
        이미지테스트야
        <img src='https://placeimg.com/64/64/1' />
        <img src='https://placeimg.com/64/64/2' />
      </div>
      <div>
        이미지테스트네요
    
        <img src={img}  />
        <img src={images.imagenn}  />

        {/* <Button variant="contained" color ="secondary">  Log in  </Button> */}

        {/* <img src={img2}  /> */}      
      </div>
    </div>
  );
}