import React from "react";
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
import std11 from "../images/place11.png"
import std12 from "../images/place12.png"
import std13 from "../images/place13.png"
import std14 from "../images/place14.png"
import std15 from "../images/place15.png"
import std16 from "../images/place16.png"
import std17 from "../images/place17.png"
import std18 from "../images/place18.png"
import std19 from "../images/place19.png"
import std20 from "../images/place20.png"
import std21 from "../images/place21.png"
import std22 from "../images/place22.png"
import std23 from '../images/place23.png'
// company logo
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


export default function Placement() {
    const details = [
        {
            image: std1,
            nam: "Bhahirathan M",
            company: "Minar Soft",
            course: "Junior Software Developer",
            c_logo:com1,
            class:"box1",
        },
        {
            image: std2,
            nam: "Monika .G",
            company: "staar homes",
            course: "Digital marketing Executive",
             c_logo:com2,
             class:"box2"
        },
        {
            image: std3,
            nam: "Tharun .S",
            company: "Code99 IT Academy",
            course: "marketing analyst",
             c_logo:com3,
             class:"box3",
        },
        {
            image: std4,
            nam: "Mohamed Sheik Abdul Khader .A ",
            company: "digidaly",
            course: "google ads",
             c_logo:com4,
             class:'box4'
        },
        {
             image: std5,
             nam: "Mathan Karthik .A ",
             company: "maynee",
             course: "ads manger",
              c_logo:com5
        },
        {
            image: std6,
            nam: "ASIYA RYHANA .A",
            company: "UltraGITS",
            course: "Digital Marketing Executive",
             c_logo:com6,
             class:"box6",
        },
        {
            image: std7,
            nam: "Arivarasu .T",
            company: "cloverbridge technologies pvt ltd.",
            course: "python developer",
             c_logo:com7,
             class:"box7",
        },
        {
            image: std8,
            nam: "Geetha .S",
            company: "Kriha IT Solutions",
            course: "Front-End developer",
             c_logo:com8
        },
        {
            image: std9,
            nam: "Ashwini M",
            company: "calsoft",
            course: "full stack Python",
             c_logo:com9, 
             class:"box9",
        },
        {
            image: std10,
            nam: "Balaji .M",
            company: "Aspire systems",
            course: "Software Trainee",
             c_logo:com10
        },
        {
            image: std11,
            nam: "Harish Ragavendira .M",
            company: "izeon innovative",
            course: "web Development Trainee",
             c_logo:com11,
             class:"box11",
        },
        {
            image: std12,
            nam: "Hariharan .S",
            company: "The Atom",
            course: "Full stack developer",
             c_logo:com12,
             class:"box12",
        },
        {
            image: std13,
            nam: "Prabakaran .S",
            company: "Shortfundly",
            course: "Web Developer",
             c_logo:com13,
        },
        {
            image: std14,
            nam: "Ramji.R",
            company: "Northern IT Limited Services",
            course: "Customer Care Executive",
             c_logo:com14
        },
        {
            image: std15,
            nam: "Sriram.S",
            company: "Code99 IT Academy",
            course: "UI/UX design",
             c_logo:com3,
             class:"box3",
        },
        {
            image: std16,
            nam: "Sneka.M",
            company: "DHL Information Technology Services",
            course: "Software Developer",
             c_logo:com16,

        },
        {
            image: std17,
            nam: "Mohamed Inamul Haq",
            company: "Minar Soft",
            course: "Junior Software Developer",
             c_logo:com1,
             class:"box1",

        },
        {
            image: std18,
            nam: "Faaik.A.K",
            company: "HCLTechnologies",
            course: "Arabic process associate",
             c_logo:com18
        },
        {
            image: std19,
            nam: "Gowtham.R",
            company: "zidio development",
            course: "full stack web developer",
             c_logo:com19
        },
        {
            image: std20,
            nam: "Shenbaga Devi.C",
            company: "The Pomegranates",
            course: "Google Ads Specialist",
             c_logo:com20,
             class:"box20"
        },
        {
            image: std21,
            nam: "Joel Alan.J",
            company: "Aditya Birla Capital",
            course: "Digital marketing executive",
             c_logo:com21
        },
        {
            image: std22,
            nam: "Moorthy Sivabalan.B",
            company: "CognitiveMobile Technology Pvt. Ltd.",
            course: "Associate Software Engineer",
            c_logo:com22,
            class:"box22"
        },
        {
            image: std23,
            nam: "Mohammed Farook Imran.T.N",
            company: "Minar Soft",
            course: "Software developer role",
             c_logo:com1,
             class:"box1",
        },
    ]
    return (
        <>
            {details.map((item, i) => {
                return (
                    <>
                        <div className="place-card center">
                            <div className={`c-nam center ${item.class}`}>
                                <img src={item.c_logo} alt={item.company} />
                            </div>
                            <div className="p-pic center">
                                <div className="p-cover center">
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                            <div className="p-details center">
                                <b>{item.nam}</b>
                                <p>role:{item.course}</p>
                                <small>company:{item.company}</small>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}
