import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  }
    let {fname, lname} = useParams();
    const location = useLocation();
  return (
    <>
        <h1>Hello I'm {fname} {lname} Page</h1>
        <p>The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the Route path. Child routes inherit all params from their parent routes.</p>
        <p>My current URL is {location.pathname}</p>
        {location.pathname === `/user/parvez` ?
        <button onClick={home}>Learn More</button> : null}
    </>
  )
}

export default User;