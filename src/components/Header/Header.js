import React from 'react'

const Header = (props) =>{

  return(
      <nav class="navbar nav-dark bg-primary">
        <div className="row col-12 d-flex justify-content-center text-white">
          <h2>{props.text}</h2>
          <span className="h3">Register</span>
        </div>
      </nav>
  )
}
export default Header