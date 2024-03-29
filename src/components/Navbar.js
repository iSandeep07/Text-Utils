import React from 'react'  //rfc
import { Link } from 'react-router-dom';
 
export default function Navbar(props) {
  return (
    <div >
      <nav className={  `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link active" href="#">Home</a>
        </li> 
        {/* <li className="nav-item">
        <Link className="nav-link active" to="/about">About</Link>
        </li>  */}
      </ul>

      <div  className= {`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
             <input className='form-check-input' onClick={props.toggleMode} type='checkbox' id='flexSwitchCheckDefault'/>
             <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>Enable DarkMode</label>

      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
