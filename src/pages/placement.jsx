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
export default function Placement() {
    const details = [
        {
            image: std1,
            nam: "Bhahirathan M",
            company: "Minar Soft",
            course: "Junior Software Developer",
            c_logo:""
        },
        {
            image: std2,
            nam: "Monika .G",
            company: "staar homes",
            course: "Digital marketing Executive",
             c_logo:""
        },
        {
            image: std3,
            nam: "Tharun .S",
            company: "Code99 IT Academy",
            course: "marketing analyst",
             c_logo:""
        },
        {
            image: std4,
            nam: "Mohamed Sheik Abdul Khader .A ",
            company: "digidaly",
            course: "google ads",
             c_logo:""
        },
        {
             image: std5,
             nam: "Mathan Karthik .A ",
             company: "maynee",
             course: "ads manger",
              c_logo:""
        },
        {
            image: std6,
            nam: "ASIYA RYHANA .A",
            company: "UltraGITS",
            course: "Digital Marketing Executive",
             c_logo:""
        },
        {
            image: std7,
            nam: "Arivarasu .T",
            company: "cloverbridge technologies pvt ltd.",
            course: "python developer",
             c_logo:""
        },
        {
            image: std8,
            nam: "Geetha .S",
            company: "Kriha IT Solutions",
            course: "Front-End developer",
             c_logo:""
        },
        {
            image: std9,
            nam: "Ashwini M",
            company: "calsoft",
            course: "full stack Python",
             c_logo:""
        },
        {
            image: std10,
            nam: "Balaji .M",
            company: "Aspire systems",
            course: "Software Trainee",
             c_logo:""
        },
        {
            image: std11,
            nam: "Harish Ragavendira .M",
            company: "izeon innovative",
            course: "web Development Trainee",
             c_logo:""
        },
        {
            image: std12,
            nam: "Hariharan .S",
            company: "The Atom",
            course: "Full stack developer",
             c_logo:""
        },
        {
            image: std13,
            nam: "Prabakaran .S",
            company: "Shortfundly",
            course: "Web Developer",
             c_logo:""
        },
        {
            image: std14,
            nam: "Ramji.R",
            company: "Northern IT Limited Services",
            course: "Customer Care Executive",
             c_logo:""
        },
        {
            image: std15,
            nam: "Sriram.S",
            company: "Code99 IT Academy",
            course: "UI/UX design",
             c_logo:""
        },
        {
            image: std16,
            nam: "Sneka.M",
            company: "DHL Information Technology Services",
            course: "Software Developer",
             c_logo:""
        },
        {
            image: std17,
            nam: "Mohamed Inamul Haq",
            company: "Minar Soft",
            course: "Junior Software Developer",
             c_logo:""
        },
        {
            image: std18,
            nam: "Faaik.A.K",
            company: "HCLTechnologies",
            course: "Arabic process associate",
             c_logo:""
        },
        {
            image: std19,
            nam: "Gowtham.R",
            company: "zidio development",
            course: "full stack web developer",
             c_logo:""
        },
        {
            image: std20,
            nam: "Shenbaga Devi.C",
            company: "The Pomegranates",
            course: "Google Ads Specialist",
             c_logo:""
        },
        {
            image: std21,
            nam: "Joel Alan.J",
            company: "Aditya Birla Capital",
            course: "Digital marketing executive",
             c_logo:""
        },
        {
            image: std22,
            nam: "Moorthy Sivabalan.B",
            company: "CognitiveMobile Technology Pvt. Ltd.",
            course: "Associate Software Engineer",
            c_logo:""
        },
        {
            image: std23,
            nam: "Mohammed Farook Imran.T.N",
            company: "Minar Soft",
            course: "Software developer role",
             c_logo:""
        },
    ]
    return (
        <>
            {details.map((item, i) => {
                return (
                    <>
                        <div className="place-card center">
                            <div className="c-nam">
                                <img src={"https://images.jdmagicbox.com/comp/goa/28/0832p832std21228/catalogue/inspirisys-solutions-ltd-panjim-goa-computer-part-dealers-opnz5ifprc.jpg"} alt="company name" />
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
