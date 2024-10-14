import React, { useState } from "react";


export default function UseOnclickOutisdeTest(){
    const [showContent,setShowContent]=useState(false)
    return <div>{
        showContent ? <div></div>:<button onClick={()=>setShowContent(true)}>Show Content</button>}</div>
}

