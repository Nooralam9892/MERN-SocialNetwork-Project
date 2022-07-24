//Client/components/screen/Profile.js
import React from 'react'

function Profile() {
  return (
    <div style={
      {
        maxWidth:"600px",
        margin:"0px auto"
      }
    }>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "20px 0px",
        borderBottom: "1px solid grey"
      }}>
        <div>
            <img style={{
              width:"160px", 
              height: "160px", 
              borderRadius:"80px"}}

            src="https://images.unsplash.com/photo-1629708494720-91f2c75f7604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="profile pic" />
        </div>
        <div>
          <h4>Shaikh Noor Alam</h4>
            <div style={
              {
                display:"flex",
                justifyContent:"space-between",
                width:"110%"
              }
            }
            >
              <h5>248 posts</h5>
              <h5>46M followers</h5>
              <h5>490 following</h5>
            </div>
        </div>
      </div>

      <div className="gallery">
      <img className= "item" src="https://images.unsplash.com/photo-1658239829031-6aa114b53702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="gallarypic" />
      <img className= "item" src="https://images.unsplash.com/photo-1658171402485-d7b2d4d776db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="gallarypic" />
      <img className= "item" src="https://images.unsplash.com/photo-1658171402485-d7b2d4d776db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="gallarypic" />
      <img className= "item" src="https://images.unsplash.com/photo-1658171402485-d7b2d4d776db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="gallarypic" />
      <img className= "item" src="https://images.unsplash.com/photo-1658171402485-d7b2d4d776db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="gallarypic" />
      <img className= "item" src="https://images.unsplash.com/photo-1658171402485-d7b2d4d776db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="gallarypic" />
      <img className= "item" src="https://images.unsplash.com/photo-1658171402485-d7b2d4d776db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="gallarypic" />
      <img className= "item" src="https://images.unsplash.com/photo-1658171402485-d7b2d4d776db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="gallarypic" />
      <img className= "item" src="https://images.unsplash.com/photo-1658171402485-d7b2d4d776db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="gallarypic" />
      </div>
    </div>
  )
}

export default Profile