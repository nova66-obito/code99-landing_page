import React from "react";
import { useState } from "react"; 
import './navbar.css';
import logo from '../images/logo.png';
// icons
import { FaEarthEurope } from "react-icons/fa6";
import { FaBookBookmark } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaMedal } from "react-icons/fa6";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { CgArrowTopRight } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
export default function Navbar(){
    const [active, setActive] = useState(false);
//    this for the click fun for the navbar
    const clk = () => { 
        setActive(!active)
    }
// this selction in the link
const [show2 ,setShow2] = useState("")
let clck = (call) => {
    switch (call) {
        case "1":
            return setShow2("one"),setActive(!active)
        case "2":
            return setShow2("two"),setActive(!active)
        case "3":
            return setShow2("three"),setActive(!active)
        case "4":
            return setShow2("four"),setActive(!active)
            case "5":
                return setShow2("five"),setActive(!active)
    }
}
    return(
        <>
          <header>
              <nav className="center n-cover"> 
                {/* this for the logo */}
                  <div className="nav-block center d-flex nav-block1">
                      <div className="nav-logo">
                          <img src={logo} alt="logo" />
                      </div>
                      <div className="logo-txt center"> 
                          <h3>code99</h3>
                          <small>IT ACADEMY</small>
                      </div>
                  </div>
                  {/* this for the links */}
                  <div className={`nav-block center nav-block2 ${active ? 'active' : null}`}>
                       <a href="#why"  onClick={() => clck("1")} className={`${show2 == 'one' ? "cl1" : null }`} ><FaEarthEurope /> why us</a>
                       <a href="#course"  onClick={() => clck("2")} className={`${show2 == 'two' ? "cl1" : null }`}><FaBookBookmark /> course</a>
                       <a href="#reviews"  onClick={() => clck("3")} className={`${show2 == 'three' ? "cl1" : null }`}><MdReviews /> Reviews</a>
                       <a href="#contact"  onClick={() => clck("4")} className={`${show2 == 'four' ? "cl1" : null }`}><IoMdContact/> contact us</a>
                       <a href="#placement"  onClick={() => clck("5")} className={`${show2 == 'five' ? "cl1" : null }`}><FaMedal/>placement</a>
                       <button>get in touch</button>
                       <span><CgArrowTopRight style={{fontSize:"25px",fontWeight:'bolder'}}/></span>

                  </div>
                  {/* this for the enroll */}
                  <div className="nav-block center nav-block3">
                       <button>get in touch</button>
                       <span><CgArrowTopRight style={{fontSize:"25px",fontWeight:'bolder'}}/></span>
                       <h1 onClick={clk}>  {active ? <IoCloseSharp /> : <HiMiniBars3CenterLeft />} </h1>
                  </div>   

              </nav>
          </header>
        </>
    )
}