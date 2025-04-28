import React from "react";

export default function Choose(val){
    return(
        <>
          <div className={`c-box ${val.nam} center`}>
              <div className="c-txt center">
                 <h5>{val.head}</h5>
                 <p>{val.txt}</p>
              </div>
              <div className="c-pic">
                  <img src={val.photo} alt="support" />
              </div>
          </div>
        </>
    )
}