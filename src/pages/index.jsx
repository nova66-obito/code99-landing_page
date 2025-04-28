import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import './main.css';
import Form_card from "./form";
import Choose from "./choose";
import Placement from "./placement";
// this for the why choose image
import w1 from '../images/why1.png';
import w2 from '../images/why2.png';
import w3 from '../images/why3.png';
import w4 from '../images/why4.png';
import w5 from '../images/why 5.png';
// this for the video
import vid1 from "../images/vid1.png";
import vid2 from "../images/vid2.png";
import vid3 from "../images/vid3.png";
import vid5 from "../images/vid5.png";
import vid6 from "../images/vid6.png";
// this for the batch pic
import Batch1 from "../images/batch1.png";
import Batch2 from "../images/Batch-2.png";
import Batch3 from "../images/Batch-3.png";
import Batch4 from "../images/Batch-4.png";
//placement student pic
import std1 from "../images/place1.png"
import std2 from "../images/place2.png"
import std3 from "../images/place3.png"
import std4 from "../images/place4.png"
import std5 from "../images/place5.png"
import std6 from "../images/place6.png"
import std7 from "../images/place7.png"
import std8 from "../images/place8.png"
import std9 from "../images/place9.png"
import std10 from "../images/place10.png"
// slider
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStar } from "react-icons/io5";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import Tool from "../images/tools.png";
import Bg from "../images/back-ground.png";
import Course from "./course";
import Review from "./slider";
import Model from "../images/model4.png";
export default function Land_page() {
    const [Hover, setHover] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };
    // this for the bg change
    const batch = [
        {
            photo: Bg,
            txt: "placement student"
        },
        {
            photo: Batch1,
            txt: "batch-1 student"
        },
        {
            photo: Batch2,
            txt: "batch-2 student"
        },
        {
            photo: Batch3,
            txt: "batch-3 student"
        },
        {
            photo: Batch4,
            txt: "batch-4 student"
        },
    ]
    // this for the image change
    const yt = [
        {
            pic: std1,
            url: "nooooo"
        },
        {
            pic: std2,
            url: "nooooo"
        },
        {
            pic: std3,
            url: "nooooo"
        },
        {
            pic: std4,
            url: "nooooo"
        },
        {
            pic: std5,
            url: "nooooo"
        },
        {
            pic: std6,
            url: "nooooo"
        },
        {
            pic: std7,
            url: "nooooo"
        },
        {
            pic: std8,
            url: "nooooo"
        },
        {
            pic: std9,
            url: "nooooo"
        },
        {
            pic: std10,
            url: "nooooo"
        },
    ];
    // this for the button
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 3, 4]
    //  this for the photo change
    const image = [std1, std2, std3, std4, std5, std6, std7, std8, std9, std10]
    const [currentpic, setCurrentpic] = useState(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentpic(image[Math.floor(Math.random() * image.length)])
        }, 5000)
        return () => clearInterval(interval);
    }, [])
    //  --------------------------------------------------------
    // this for the review
    let num = [1, 2, 3, 4, 5]
    // this for the video
     const vid = [
        {
            pic:vid1,
            url:"#",

        },
        {
            pic:vid2,
            url:"#"
        },
        {
            pic:vid3,
            url:"#"
        },
        {
            pic:"none",
            url:"#"
        },
        {
            pic:vid5,
            url:"#"
        },
        {
            pic:vid6,
            url:"#"
        },
     ]
    return (
        <>
            <main>
                <Navbar />
                <section>
                    {/* this for the home page */}
                    <div className="home center">
                        <div className="h-txt center">
                            <h1>India's 1'st Institute to Provide Free Training</h1>
                        </div>
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <h2>placement student</h2>
                                <img
                                    className="d-block w-100"
                                    src={Bg}
                                    alt="placement student image"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <h2>batch-1 student</h2>
                                <img
                                    className="d-block w-100"
                                    src={Batch1}
                                    alt="Batch-1 student image"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <h2>batch-2 student</h2>
                                <img
                                    className="d-block w-100"
                                    src={Batch2}
                                    alt="Batch-2 student image"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <h2>batch-3 student</h2>
                                <img
                                    className="d-block w-100"
                                    src={Batch3}
                                    alt="Batch-3 student image"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <h2>batch-4 student</h2>
                                <img
                                    className="d-block w-100"
                                    src={Batch4}
                                    alt="Batch-4 student image"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    {/* this for the student placement*/}
                    <div id="placement" className="s-place title center">
                        <h1>student placement</h1>
                        <div className="place-cover center">
                            <div className={`center pl-cover ${Hover ? 'anime-stop' : null}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
                                <Placement />
                            </div>
                        </div>
                    </div>
                    {/* -------------------------------------------------------------------------------- */}
                    {/* this for the student story */}
                    <div className="story full center title">
                        <h1>student success stories</h1>
                        <div className="s-cover center">
                            {/* this for the main pic */}
                            <div className="main-pic pic-box center">
                                <div className="pic-holder">
                                    <img src={currentpic} alt="" />
                                </div>
                            </div>
                            {/* this for the sub-pic*/}
                            <div className="sub-pic pic-box center">
                                <h3>Real Stories, Real Success</h3>
                                <div className="min-holder center">
                                    <Slider className="sm-pic" {...settings}>
                                        {yt.map((items) => {
                                            return (
                                                <>
                                                    <div className="min-card">
                                                        <img src={items.pic} alt="story of student" />
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </Slider>
                                </div>
                            </div>
                            {/* ______________________________ */}
                        </div>
                        <div className="btn-run center">
                            <div className="top-btn r-btn center">
                                {arr.map((items) => {
                                    return (
                                        <>
                                            <button><h4><FaLessThan /></h4>accenture</button>
                                        </>
                                    )
                                })}
                            </div>
                            <div className="bot-btn r-btn center">
                                {arr.map((items) => {
                                    return (
                                        <>
                                            <button><h4><FaLessThan /></h4>accenture</button>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/*-------------------------------------------------------------------------------------------- */}
                    {/* this for the review */}
                     <Review/>
                    {/* -------------------------------------------------------------------------- */}
                    {/* this for the why choose*/}
                    <div id="why" className="choose full title center">
                        <h1>why choose us</h1>
                        <div className="choose-cover center">
                            <div className="c-holder center c-h1">
                               <Choose nam="box1" photo={w4} head="free breakfast" txt="early morning session (4:30-6-30 AM)"/>
                               <Choose nam="box2" photo="none" head="Portfolio Building" txt=" to Showcase Your Skills"/>
                               <Choose nam="box3" photo={w3} head="Mock Interviews" txt="to Boost Confidence"/>
                            </div>
                            <div className="c-holder center ch-2">
                               <Choose nam="box4" photo={w2} head="daily biometric" txt="attendance for discipline"/>
                               <Choose nam="box5" photo={w3} head="Mock Interviews" txt="to Boost Confidence"/>
                            </div>
                            <div className="c-holder center ch-3">
                               <Choose nam="box6" photo={w5} head="ID card" txt="for professional touch"/>
                               <Choose nam="box7" photo={w1} head="placement Support" txt="to Boost Confidence"/>
                               <Choose nam="box8" photo={w2} head="daily biometric" txt="attendance for discipline"/>
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------------------------------- */}
                    {/* this for the blog */}
                    <div className="full center title video-page">
                         <h1>videos</h1>
                         <div className="b-cover center">
                             {vid.map((item)=>{
                                return(
                                    <>
                                      <a href={item.url}>
                                         <div className="v-holder">
                                           <img src={item.pic} alt="bloges" />
                                         </div>   
                                      </a>
                                    </>
                                )
                             })}
                         </div>
                    </div>
                    {/* this for the course */}
                    <div id="course" className="course center title full">
                         <h1>our courses</h1>
                          <div className="course-cover center">
                              <Course/>   
                          </div>
                          <div className="tool-image">
                             <img src={Tool} alt="tools using" />
                          </div>
                    </div>
                    {/* --------------------------------------------------- */}
                    {/* this for the contact us */}
                    <div id="contact" className="full contact-us center">
                        <div className="cont-pic cont-holder center">
                           <img src={Model} alt="for the fro,m image"/>
                        </div>
                        {/* this for the form*/}
                        <div className="cont-form cont-holder center">
                          <Form_card/>
                        </div>
                    </div>
                    {/* this for the footer*/}
                 </section>
                 <Footer/>
            </main>
        </>
    )
}