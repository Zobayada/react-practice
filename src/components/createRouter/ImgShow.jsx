import React, { useState } from 'react';
import axios from 'axios';

const ImgShow = (props) => {
  const [data, setData] = useState([]);
  axios.get(`https://api.unsplash.com/search/photos?page=1&query=${props.name}&client_id=ikvYI_xvWMlYfFV5Duf_PHIROnel084AYun5cEY5lUQ`)
   .then((response) => {
    console.log(response);
    setData(response.data.results);
   })
    
  return (
    <>
      {
        data.map((value, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
              <img className="img-fluid" style={{height: "350px", width:"400px"}} src={value.urls.small} alt="any image"/> 
            </div> 
          )
        })
      }
    </>
  )
}

export default ImgShow;
