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
import w5 from '../images/why5.png';
// this for the video
import vid1 from "../images/vid1.png";
import vid2 from "../images/vid2.png";
import vid3 from "../images/vid3.png";
import vid4 from "../images/vid4.png";
import vid5 from "../images/vid5.png";
import vid6 from "../images/vid6.png";
import vid7 from "../images/vid7.png";
import vid8 from "../images/vid8.png";
import vid9 from "../images/vid9.png";
import vid10 from "../images/vid10.png";
import vid11 from "../images/vid11.png";
import vid12 from "../images/vid12.png";
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
// this for the company logo

// slider
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// icons
import { FaLessThan } from "react-icons/fa";
import Tool from "../images/tools.png";
import Bg from "../images/back-ground.png";
import Course from "./course";
import Review from "./slider";
import Uper from "../images/uper.png";
// this for the company logo
import com1 from '../images/c-1.png';
import com2 from '../images/c-2.png';
import com3 from '../images/logo.png';
import com4 from '../images/c-4.png';
import com5 from '../images/c-5.png';
import com6 from '../images/c-6.png';
import com7 from '../images/c-7.png';
import com8 from '../images/c-8.png';
import com9 from '../images/c-9.png';
import com10 from '../images/c-10.png';
import com11 from '../images/c-11.png';
import com12 from '../images/c-12.png';
import com13 from '../images/c-13.png';
import com14 from '../images/c-14.png';
import com16 from '../images/c-16.png';
import com18 from '../images/c-18.png';
import com19 from '../images/c-19.png';
import com20 from '../images/c-20.png';
import com21 from '../images/c-21.png';
import com22 from '../images/c-22.png';
export default function Land_page() {
    const [Hover, setHover] = useState(false);
    const [video ,setVideo] = useState(false);
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
    const arr = [
        {
            company:com1,
        },
        {
            company:com2,
        },
        {
            company:com3,
        },
        {
            company:com4,
        },
        {
            company:com5,
        },
        {
            company:com6,
        },
        {
            company:com7,
        },
        {
            company:com8,
        },
        {
            company:com9,
        },
        {
            company:com10,
        },
        {
            company:com11,
        },

    ]
    const arr2 = [
        {
            company:com12,
        },
        {
            company:com13,
        },
        {
            company:com14,
        },
        {
            company:com16,
        },
        {
            company:com18,
        },
        {
            company:com19,
        },
        {
            company:com20,
        },
        {
            company:com21,
        },
        {
            company:com22,
        },
        {
            company:com1,
        },
        {
            company:com2,
        },
        {
            company:com4,
        },
    ]
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
            pic: vid1,
            url: "#",

        },
        {
            pic: vid2,
            url: "#"
        },
        {
            pic: vid3,
            url: "#"
        },
        {
            pic: vid4,
            url: "#"
        },
        {
            pic: vid5,
            url: "#"
        },
        {
            pic: vid6,
            url: "#"
        },
        {
            pic: vid7,
            url: "#"
        },
        {
            pic: vid8,
            url: "#"
        },
        {
            pic: vid9,
            url: "#"
        },
        {
            pic: vid10,
            url: "#"
        },
        {
            pic: vid11,
            url: "#"
        },
        {
            pic: vid12,
            url: "#"
        },
    ]
    // scroll event for the icon
    const [view, setView] = useState(false);
    const [height, setHeight] = useState(0);
     useEffect(() => {
        const onScroll = () => setHeight(window.scrollY);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
      }, []);
      useEffect(() => {
        if (height > 40) {
          setView(true)
        } 
        else{
          setView(false)            
        }
      },[height]);
    return (
        <>
            <main>
                <Navbar />
                <section>
                    {/* this for the home page */}
                    <div className="home center">
                        <div className="h-txt center">
                            <h1>India's 1st Institute to Provide Free IT Training</h1>
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
                                <h2>batch-I student</h2>
                                <img
                                    className="d-block w-100"
                                    src={Batch1}
                                    alt="Batch-1 student image"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <h2>batch-II student</h2>
                                <img
                                    className="d-block w-100"
                                    src={Batch2}
                                    alt="Batch-2 student image"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <h2>batch-III student</h2>
                                <img
                                    className="d-block w-100"
                                    src={Batch3}
                                    alt="Batch-3 student image"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <h2>batch-IV student</h2>
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
                        {/* this for the icon */}
                        <div className={`w-icon ${view ? "view" :'' }`}>
                            <a href="#"> <img src={Uper} alt="icon" /></a>
                        </div>
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
                                           <div className="com-logo">
                                             <img src={items.company} alt="company logo" />
                                           </div>
                                        </>
                                    )
                                })}
                            </div>
                            <div className="bot-btn r-btn center">
                                {arr2.map((items) => {
                                    return (
                                        <>
                                           <div className="com-logo">
                                             <img src={items.company} alt="company logo" />
                                           </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/*-------------------------------------------------------------------------------------------- */}
                    {/* this for the review */}
                    <Review />
                    {/* -------------------------------------------------------------------------- */}
                    {/* this for the why choose*/}
                    <div id="why" className="choose full title center">
                        <h1>why choose us</h1>
                        <div className="choose-cover center">
                            <div className="c-holder center c-h1">
                                <Choose nam="box1" photo={w4} head="free breakfast" txt="early morning session (4:30-6-30 AM)" />
                                <Choose nam="box2" photo="none" head="Portfolio Building" txt=" to Showcase Your Skills" />
                            </div>
                            <div className="c-holder center ch-2">
                                <Choose nam="box4" photo={w3} head="daily biometric" txt="attendance for discipline" />
                                <Choose nam="box5" photo={w2} head="Mock Interviews" txt="to Boost Confidence" />
                            </div>
                            <div className="c-holder center ch-3">
                                <Choose nam="box6" photo={w5} head="ID card" txt="for professional touch" />
                                <Choose nam="box7" photo={w1} head="placement Support" txt="to Boost Confidence" />
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------------------------------- */}
                    {/* this for the blog */}
                    <div id="video" className="full center title video-page">
                        <h1>videos</h1>
                        <div className={`b-cover`}>
                            {vid.map((item) => {
                                return (
                                    <>
                                        <div className={`v-holder ${video ? 'animet' : ""}`} onMouseEnter={()=>setVideo(true)} onMouseLeave={()=>setVideo(false)}>
                                            <img src={item.pic} alt="insta video" />
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    {/* this for the course */}
                    <div id="course" className="course center title full">
                        <h1>our courses</h1>
                        <div className="course-cover center">
                            <Course />
                        </div>
                        <div className="tool-image">
                            <img src={Tool} alt="tools using" />
                        </div>
                    </div>
                    {/* --------------------------------------------------- */}
                    {/* this for the contact us */}
                    <div id="contact" className="full contact-us center">
                       <Form_card/>
                    </div>
                    {/* this for the footer*/}
                </section>
                <Footer />
            </main>
        </>
    )
}