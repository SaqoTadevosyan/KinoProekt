import React,{useState} from 'react';
import style from "./header.module.css"
import Menu from './Menu/Menu';
import Search from './Search/Search';


export default function Header(){
    return(
        <div className={style.header}>
            <div className={style.firstBlock}>
            <img className={style.logo} src="http://localhost:3000/logo.png"></img>
           <Menu/>
            </div>
           <div className={style.secondBlock}>
<Search/>

           </div>
           
        </div>
    )
}