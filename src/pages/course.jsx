import React from "react";
import java from "../images/course5.png"
import python from "../images/course6.png"
import Dm from "../images/course4.png"
import ui_ux from "../images/course3.png"
import Web from "../images/course2.png"
export default function Course() {
    const datas = [
        {
            img: java,
            name: "full stack java",
        },
        {
            img: python,
            name: "full stack python",
        },
        {
            img: Web,
            name: "web developer",
        },
        {
            img: Dm,
            name: "digital marketing",
        },
        {
            img: ui_ux,
            name: "ui/ux",
        },
    ]
    return (
        <>
            {datas.map((card) => {
                return (
                    <>
                        <div className="course-box center">
                            <div className="pic-co text-center">
                                <img src={card.img} alt="course pic" />
                            </div>
                            <div className="text-co text-center">
                                <h5 className="p-1">{card.name}</h5>
                                <p className="p-1">master front-end and back-end technologies to build interactive and dynamic websites.</p>
                                <a href="#"><button>join us!</button> </a>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}