import { useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";
export default function Form_card() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [choose, setChoose] = useState('')
    const [message, setMessage] = useState('')
    const [nameError, setNameError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [chooseError, setChooseError] = useState("")
    const [messageError, setmessageError] = useState("")
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [select_val, setSelect_val] = useState('')
    // this for the passwordvisible
    console.log(name)

    // this for the validation
    const handle = (e) => {
        e.preventDefault();

        let valid = true;

        setNameError("")
        setChooseError("")
        setPhoneError("")
        setmessageError("")

        if (!name.trim()) {
            setNameError("name require...!")
            valid = false
        }

        if (!phone.trim()) {
            setPhoneError("phone no require...!")
            valid = false
        }

        if (!select_val.trim()) {
            setChooseError("course require...!")
            valid = false
        }

        if (!message.trim()) {
            setmessageError("message require...!")
            valid = false
        }

        // this for the final validation

        if (valid) {
            console.log("userdata :", { name, phone, message, choose })
            setSubmitSuccess(!submitSuccess);
        }
    }
    // this for the selection
    const sel_change = (e) => {
        setSelect_val(e.target.value)
    }
    return (
        <>
            {submitSuccess ? <div className="success center"><h2>thankyou for the submit...😊</h2></div> :
                <form action="" onSubmit={handle}>
                    {/* this for the heading */}
                    <div className="header">
                        <h4>ready to launch your tech career</h4>
                    </div>
                    <div className="value">
                        <input type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name" className={`lab ${name ? 'top' : ""}`}>enter your name*</label>
                        {nameError && <p>{nameError}</p>}
                    </div>
                    <div className="value">
                        <input type="number"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <label htmlFor="name" className={`lab ${phone ? 'top' : ""}`}>enter your phone no*</label>
                        {phoneError && <p>{phoneError}</p>}
                    </div>
                    <div className="value">
                        <input type="text"
                            value={select_val}
                            onChange={(e) => setChoose(select_val)}
                        />
                        <label htmlFor="name" className={`lab ${select_val ? 'top' : ""}`}>enter your name</label>
                        {chooseError && <p>{chooseError}</p>}
                        <select value={select_val} onChange={sel_change}>
                            <option value=""></option>
                            <option value="full stact java">full stack java</option>
                            <option value="full stact python">full stack python</option>
                            <option value="full stact mearn">full stack mearn</option>
                            <option value="UI/UX designer">UI/UX designer</option>
                            <option value="digital mareketing">digital mareketing</option>
                            <option value="full stack web development">full stack web development</option>
                        </select>
                    </div>
                    <div className="value">
                        <textarea name="message" id="msg" rows={5}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <label className={`lab ${message ? 'top' : ''}`} htmlFor="message">message*</label>
                        {messageError && <p>{messageError}</p>}
                    </div>
                    <div className="f-btn nav-block">
                        <button>submit</button>
                         <span><CgArrowTopRight style={{fontSize:"25px",fontWeight:'bolder'}}/></span>
                    </div>
                </form>


            }
        </>
    )
}