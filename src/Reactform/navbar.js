import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
 return (
 <div className='container'>
 <ul className='nav_links'>
 <li><Link className='nav_link' to={`/`}>Home</Link></li>
 <li><Link className='nav_link' to={`/about`}>About us</Link></li>
 <li><Link className='nav_link' to={`/destination`}>Destination</Link></li>
 <li><Link className='nav_link' to={`/contact`}>Contact us</Link></li>
 <li><Link className='nav_link' to={`/registration`}>Registration Form</Link></li>
 <li><Link className='nav_link' to={`/submitted`}>Submitted Form</Link></li>
 </ul>
 </div>
 )
}
export default Navbar;
