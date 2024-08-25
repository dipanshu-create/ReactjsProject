import React,{useState} from "react"
import Modal from "./modal"
import "./modal.css"

export default function ModalTest(){
    const [showModalPopup,setShowModalPopup]=useState(false)
    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup)
    }
    function onClose(){
        setShowModalPopup(false)
    }
    return <div>
        <button onClick={handleToggleModalPopup}>open model popup</button>
        {
            showModalPopup && <Modal onClose={onClose} body={<div>Customized body</div>}/>         }
    
    </div>
}
