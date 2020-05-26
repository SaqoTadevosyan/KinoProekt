import React from "react"
import style from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle} from '@fortawesome/free-solid-svg-icons'
export default function Footer(){
    return(
        <div className={style.footer}>
            <div className={style.blocks}>
            <div>
            <h5>LANGUAGE MOVIES</h5>
            <ul>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>English movie</li>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>English movie</li>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>English movie</li>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>English movie</li>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>English movie</li>
            </ul>
            </div>
            <div><h5>MOVIES BY PRESENTER</h5>
            <ul>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>Action movie</li>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>Romantic movie</li>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>Adult movie</li>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>Comedy movie</li>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>drama movie</li>
            </ul>
            </div>
            <div><h5>BOOKING ONLINE</h5>
            <ul>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>www.example.com</li>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>www.example.com</li>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>www.example.com</li>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>www.example.com</li>
                <li><i><FontAwesomeIcon icon={faCircle}/></i>www.example.com</li>
            </ul></div>
            <div></div>
            </div>
        <h3>Copyright 2020-21 <span>Movie Pro</span> . All rights reserved - Create by <span>Sargis Tadevosyan https://github.com/SaqoTadevosyan</span></h3>
        </div>
    )
}