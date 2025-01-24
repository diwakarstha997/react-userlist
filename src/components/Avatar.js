import React from "react";
import man from "../assets/man.svg"
import woman from "../assets/woman.svg"

export const Avatar = ({gender}) => {
    return (
        <div style={{width:"50px", height:"50px", borderRadius:"50%"}}>
            <img src={gender=="m"?`${man}`:`${woman}`} alt="profile" width="100%"/>
        </div>
    )
}