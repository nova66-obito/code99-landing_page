import React from "react";
import { useState,useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer(){
  const [height, setHeight] = useState(0);
  const [on,setOn] = useState(false)
   // this for the on scroll event 
  useEffect(() => {
    const onScroll = () => setHeight(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // 5876
  useEffect(() => {
    const text = document.querySelector(".text");
    if (height >= 6400) {
      text?.classList.add("act");
      console.log(height)
    } 
  },[height]);
    return(
        <>
          <footer>
              <div className="navigation center">
                  <div className="details ">
                     <b>our course</b>
                     <a href="#">UI/UX design</a>
                     <a href="#">full stack java</a>
                     <a href="#">full stack web development</a>
                     <a href="#">digital marketing</a>
                  </div>
                  <div className="details">
                     <b>navigation</b>
                      <a href="#">home</a>
                      <a href="#Home">about</a>
                      <a href="#course">course</a>
                      <a href="#video">blog</a>
                      <a href="#contact">contact</a>
                  </div>
                  <div className="details">
                     <b>social</b>
                      <a href="#Home"><FaFacebook className="socail"/><h6>facebook</h6></a>
                      <a href="#Home"><FaInstagram className="socail"/><h6>facebook</h6></a>
                      <a href="#Home"><FaYoutube className="socail"/><h6>youtube</h6></a>
                      <a href="#Home"><FaLinkedin className="socail"/><h6>linkedin</h6></a>
                      <a href="#Home"><FaSquareXTwitter className="socail"/><h6>twitter</h6></a>
                  </div>
                  <div className="details address">
                     <b>get in touch</b>
                     <a href=""><h5><IoLocationSharp/></h5><h6> No 16, 1st floor, Sarathy Nagar, Opp To Vijaya Nagar, Velachery, Chennai - 600 042.No 16, 1st floor, Sarathy Nagar, Opp To Vijaya Nagar, Velachery, Chennai - 600 042.</h6></a>
                     <a href=""><CgMail className="socail"/> code99itacademy@gmail.com</a>
                     <a href=""><IoCall className="socail"/>63 74 51 07 54</a>
                  </div>
                  <div className="details locat">
                     <b>reach us</b>
                     <iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d995293.9054815824!2d80.398233!3d12.980369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d70050d495f%3A0xe1b0d7791146206d!2sCode99%20IT%20Academy!5e0!3m2!1sen!2sus!4v1745558401123!5m2!1sen!2sus"}></iframe>
                  </div>
              </div>
              {/* this for the logo */}
              <div className="f-logo">
                  <div className="code center">
                    <p className='text animate'>CODE99 IT ACADEMY</p>         
                    <hr className="line"/>
                  </div>
                  <div className="copy right center">
                     <h6 className="text-center">Copyrights © 2025 Code991tAcademy | All rights reserved</h6>
                  </div>
              </div>
          </footer>
        </>
    )
}