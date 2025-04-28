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
import std20 from "../images/place 20.png"
import std21 from "../images/place21.png"
import std22 from "../images/place22.png"
export default function Placement() {
    const details = [
        {
            image: std1,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std2,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std3,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std4,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std5,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std6,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std7,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std8,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std9,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std10,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std11,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std12,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std13,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std14,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std15,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std16,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std17,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std18,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std19,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std20,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std21,
            nam: "****",
            company: "not no",
            course: "course"
        },
        {
            image: std22,
            nam: "****",
            company: "not no",
            course: "course"
        }
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
                                <b>arivarasu T</b>
                                <p>role:python developer</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}
