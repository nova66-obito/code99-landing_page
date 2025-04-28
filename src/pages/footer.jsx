import React from "react";
import { useState,useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer(){
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => setHeight(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
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
                      <a href="#Home">home</a>
                      <a href="#Home">about</a>
                      <a href="#Home">course</a>
                      <a href="#Home">blog</a>
                      <a href="#Home">contact</a>
                  </div>
                  <div className="details">
                     <b>social</b>
                      <a href="#Home"><h6><FaFacebook /></h6>  facebook</a>
                      <a href="#Home"><h6><FaInstagram /></h6>  instagram</a>
                      <a href="#Home"><h6><FaYoutube /></h6> youtube</a>
                      <a href="#Home"><h6><FaLinkedin /></h6> linkidin</a>
                      <a href="#Home"><h6><FaSquareXTwitter /></h6> twitter</a>
                  </div>
                  <div className="details">
                     <b>get in touch</b>
                     <a href=""><h6><FaLocationDot /></h6> No 16, 1st floor, Sarathy Nagar, Opp To Vijaya Nagar, Velachery, Chennai - 600 042.No 16, 1st floor, Sarathy Nagar, Opp To Vijaya Nagar, Velachery, Chennai - 600 042.</a>
                     <a href=""><h6><CgMail /></h6> code99itacademy@gmail.com</a>
                     <a href=""><h6><IoCall /></h6>63 74 51 07 54</a>
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