import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContextConsumer } from "../themeContext";
import {
  faStar,
  faHeart,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-regular-svg-icons";
import style from "./prew.module.css";
import { faShare } from "@fortawesome/free-solid-svg-icons";

export default function Prew(props) {

  return (
    
    <div className={style.container}>
      <div className={style.player}>
        <div className={style.vidio}>
          <iframe
            width="500"
            height="400"
            src={props.film.src}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={style.info}>
          <h2>{props.film.name }</h2>
          <div className={style.category}>
            {props.film.age } |{" "}
            {props.film.category.map((elem) => {
              return elem + "   ";
            }) }{" "}
            | {props.film.year} {props.film.rating.map(()=>{
                return (

<FontAwesomeIcon icon={faStar} />
           
   
                )
            })}
            
          </div>
        </div>
      </div>

      <div className={style.about}>
        <a href="#">О ФИЛЬМЕ</a>
        <a href="#">ТРЕЙЛЕРЫ</a>
        <div>
          <p>{props.film.info }</p>
        </div>
      </div>
      <div className={style.cast}>
        <h3>Cast & Crew</h3>
        <div className={style.actress}>
          {props.film.cast.map((item) => {
            return (
              <div className={style.item}>
                <img src={item[2]}></img>

                <h5>{item[1]}</h5>
                <h5>{item[0]}</h5>
              </div>
            );
          }) }
        </div>
      </div>
    </div>
    
  );
}
