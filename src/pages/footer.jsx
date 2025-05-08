import React from "react";
import { useState, useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer() {
  const [height, setHeight] = useState(0);
  const [on, setOn] = useState(false)
  // this for the on scroll event 
  useEffect(() => {
    const onScroll = () => setHeight(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const text = document.querySelector(".text");
    const isMobile = window.innerWidth < 768; // Common mobile breakpoint
    
    if ((!isMobile && height >= 5300) || (isMobile && height >= 4760)) {
        text?.classList.add("act");
        console.log("im one",isMobile)
    } else {
        text?.classList.remove("act");
        console.log("im off",isMobile)
    }
}, [height]);
  return (
    <>
      <footer>
        <div className="navigation center">
          <div className="n-left n-cover center">
            <div className="details ">
              <h6>our course</h6>
              <a href="#">UI/UX design</a>
              <a href="#">full stack java</a>
              <a href="#">full stack web development</a>
              <a href="#">digital marketing</a>
            </div>
            <div className="details">
              <h6>navigation</h6>
              <a href="#">home</a>
              <a href="#Home">about</a>
              <a href="#course">course</a>
              <a href="#video">blog</a>
              <a href="#contact">contact</a>
            </div>
            <div className="details n-icon">
              <h6>social</h6>
              <a href="https://www.facebook.com/" target="_blank"><FaFacebook className="socail" />facebook</a>
              <a href="https://www.instagram.com/" target="_blank"><FaInstagram className="socail" />instagram</a>
              <a href="https://www.youtube.com/@Code99ITAcademy" target="_blank"><FaYoutube className="socail" />youtube</a>
              <a href="https://in.linkedin.com/" target="_blank"><FaLinkedin className="socail" />linkedin</a>
              <a href="https://x.com/" target="_blank"><FaSquareXTwitter className="socail" />twitter</a>
            </div>
          </div>
          <div className="n-right n-cover center">
            <div className="top-icon-locat gap-3">
              <div className="details address">
                <h6>get in touch</h6>
                <a href=""><h5><IoLocationSharp className="mail" /></h5> No 16, 1st floor, Sarathy Nagar, Opp To Vijaya Nagar, Velachery, Chennai - 600 042.No 16, 1st floor, Sarathy Nagar, Opp To Vijaya Nagar, Velachery, Chennai - 600 042.</a>
                <a href=""><h5><CgMail className="mail" /></h5> code99itacademy@gmail.com</a>
                <a href=""><h5><IoCall className="mail" /></h5> 63 74 51 07 54</a>
              </div>
              <div className="details s-icon">
                  <h6>social</h6>
                <div className="s-icon-holder d-flex gap-5">
                  <FaFacebook style={{fontSize:'25'}}/>
                  <FaInstagram style={{fontSize:'25'}}/>
                  <FaLinkedin style={{fontSize:'25'}}/>
                  <FaYoutube style={{fontSize:'25'}}/>
                  <FaTwitter style={{fontSize:'25'}}/>
                </div>
              </div>
            </div>
            <div className="details locat">
              <h6>reach us</h6>
              <iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d995293.9054815824!2d80.398233!3d12.980369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d70050d495f%3A0xe1b0d7791146206d!2sCode99%20IT%20Academy!5e0!3m2!1sen!2sus!4v1745558401123!5m2!1sen!2sus"}></iframe>
            </div>
          </div>
        </div>
        {/* this for the logo */}
        <div className="f-logo">
          <div className="code center">
            <p className='text animate'>CODE99 IT ACADEMY</p>
            <hr className="line" />
          </div>
          <div className="copy-right center">
            <h6 className="text-center">Copyrights © 2025 Code991tAcademy | All rights reserved</h6>
          </div>
        </div>
      </footer>
    </>
  )
}