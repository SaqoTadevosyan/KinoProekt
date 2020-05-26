import React,{useState} from 'react';
import style from "./item.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar} from '@fortawesome/free-solid-svg-icons'
import {withRouter} from 'react-router-dom';
import fire from "../fire/config"
 function Item(props){
     
return(
    <div className={style.item}>
        <div className={style.detail}>
        <div className={style.shadow} >
            <button  onClick={()=> props.history.push('/film/' +props.id)}>Detail</button>
            <button>treiler</button>
        </div>
<img src={props.info.img}></img>
        </div>
        <div className={style.info}>
            <div className={style.name}>
                
            <h4>{props.info.name}</h4>
<h6>{props.info.category+"  "}</h6>
            <div className={style.ratingStar}>
                {props.info.rating.map((i,index)=>{
                   
return  <i  key={index}><FontAwesomeIcon icon={faStar}/> </i>
                })}
          
           

            </div>
            </div>
          
        </div>
 
   </div>
  
   
)
}

export default withRouter(Item)