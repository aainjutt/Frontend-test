import React from 'react'
import './Footer.css'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-logo'>
                <div><h3 className='footer-logo-1'>Creative Logo</h3>

                    <p className='footer-paragraph'>Welcome to our consultancy agency. Lore ipsum simply <br /> text amet cing elit simply text amet cing elit.</p>
                    <FaPhone className='icon-footer' />
                    <small className='footer-small'>03444590587</small><br />
                    <MdEmail className='icon-footer' />
                    <small className='footer-small'>aain134@gmail.com</small><br />
                    <FaMapMarkerAlt className='icon-footer' />
                    <small className='footer-small'>abdullah pull , fsd</small><br />
                </div>
                <div>
                    <h3 className='footer-logo-2'>EXPLORE</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Meet Our Team</a></li>
                        <li><a href="#">Case studies </a></li>
                        <li><a href="#">Latest News</a></li>
                        <li><a href="#">Contact</a></li>




                    </ul>
                </div>
                <div>
                    <h3 className='footer-logo-3'>NEWSLETTER</h3>
                    <div className='footer-box'>
                        <p className='footer-para'>Subscribe for latest articles and resources</p>
                        <div>
                            <input type="text" class="searchTerm" placeholder="Email address" />
                            <button class="btn btn-primary" type="submit">Button</button>
                        </div>
                    </div>
                </div>

            </div>




            <div className='text-footer'>
                <p className='footer-p'>© Copyright 2022 by Brickclay</p>

            </div>
        </div>
    )
}

export default Footer