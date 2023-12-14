import React from 'react'
import { FaFacebook , FaInstagram, FaLinkedinIn ,FaTwitter} from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import './Header.css'
function Header() {
  return (
    
<div class="navbar">
    <div class="logo">Logo</div>
    
  
    <div class="menu">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Pages</a>
        <a href="#">Case</a>
        <a href="#">Shop</a>
        <a href="#">Blog</a>
        <a href="#">Content</a>
    </div>
    <div class="social-icons">
        <a href="#">
            <FaFacebook/>
        </a>
        <a href="#"><FaInstagram/></a>
        <a href="#"><FaLinkedinIn/></a>
        <a href="#"><FaTwitter/></a>
    </div>
    <div class="search-icon"><IoIosSearch/></div>
    <div class="phone-number">Need Help? <br/>03444590587</div>
</div>
  )
}

export default Header