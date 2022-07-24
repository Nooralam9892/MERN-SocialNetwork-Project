import React from 'react';
import{Link} from 'react-router-dom'
function Signin() {
   return (
    <div className='mycard'>
      <div className='card auth-card input-field'>
        <h2>InstaBook</h2>
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Password' />
        <button class="btn waves-effect waves-light #d500f9 purple accent-3" type="submit" name="action">Sing In</button>
      <h6>
        <Link to='/signup'>Register to create account</Link>
        </h6>
      </div>
    </div>
  )
}

export default Signin