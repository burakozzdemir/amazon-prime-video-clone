/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from "../assets/images/prime-video-logo.png"


const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="" />
      <a href="">Terms and Privacy Statement</a>
      <a href="">Give Feedback</a>
      <a href="">Help</a>
      <a href="">Cookie Notice</a>
      <p className='text-slate-300'>© 1996-2022, Amazon.com</p>
    </footer>
  )
}

export default Footer



