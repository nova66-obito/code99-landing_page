import { useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";
export default function Form_card() {
        const [name,setName] = useState('')
        const [phone,setPhone] = useState('')
        const [choose,setChoose] = useState('')
        const [message,setMessage] = useState('')
        console.log(name)
        console.log(message)
        // this for the select
        const [select_val, setSelect_val] = useState('')

        const sel_change = (e) =>{
             setSelect_val(e.target.value)
        }
        const [box,setbox] = useState(false);
        const clk = () =>{
            setbox(!box);
        }
        console.log(box)
    return (
        <>
            <form action="" onSubmit={clk}>
                {/* this for the heading */}
                <div className="header">
                    <h4>ready to launch your tech career</h4>
                </div>
                {/* this for the name */}
                <div className={`value ${name ? 'up-name' : ""}`}>
                    <input type="text" required onChange={(e) => setName(e.target.value)} 
                    />
                    <label htmlFor="">your full name*</label>
                    {name &&  <small>this required name</small> }
                </div>
                {/* this for the number */}
                <div className={`value ${phone ? 'up-phone' : ""}`}>
                    <input type="number" required onChange={(e) => setPhone(e.target.value)}
                     />
                    <label htmlFor="">your mobile number*</label>
                </div>
                {/* this for the course */}
                <div className="value">
                    <div className={`in-select d-flex  ${select_val ? 'sel-up' : ""}`}>
                        <input type="text" value={select_val} onChange={(e) => setChoose(e.target.value)}
                         required
                        />
                        <label htmlFor="course" className="link">select your course*</label>
                        <select value={select_val} onChange={sel_change}>
                            <option value=""></option>
                            <option value="full stack java">full stack java</option>
                            <option value="full stack python">full stack python</option>
                            <option value="web developer">web developer</option>
                            <option value="digital marketing">digital marketing</option>
                            <option value="UI/UX designer">UI/UX designer</option>
                        </select>
                    </div>
                </div>
                {/* this for the message */}
                <div className={`value txt-area ${message ? 'area' : ""}`}>
                    <textarea name="message" rows={3} id="" required onChange={(e) => setMessage(e.target.value)}></textarea>
                    <label htmlFor="">message*</label>
                </div>
                {/* this for the buuton*/}
                <div className="f-btn">
                    <button onClick={clk}> submit </button>
                    <button><CgArrowTopRight /></button>
                </div>
            </form>
        </>
    )
}