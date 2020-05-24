import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContextConsumer } from "../themeContext";
import {
  faStar,
  faHeart,
  faThumbsUp,
  faThumbsDown,
  faClock,
  faFlag,
} from "@fortawesome/free-regular-svg-icons";
import style from "./film.module.css";
import {
  faShare,
  faPlay,
  faGlobeEurope,
  faCamera,
  faVideo,
  faUsers,
  faGlobe,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";
import firebase from "../fire/config"
export default function Film(props) {
  let id = props.match.params.id || 0;
 
let updateView=(id,views)=>{
  

  firebase.database().ref("/"+id).update({"views":views +1})
}
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={style.container}>
          <div className={style.firstBlock}>
         
            <img src={context.film[id].img } />
            <div className={style.info}>
              <div className={style.details}>
                <div className={style.category}>
                  {context.film[id].category.map((elem) => {
                    return elem + "   ";
                  })}{" "}
                </div>
                <div className={style.name}>{context.film[id].name}</div>
                <div className={style.info2}>
                  <div className={style.infoblock}>
                    <div className={style.infokey}>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faClock} />
                      </i>
                      Time:
                    </div>

                    <div className={style.infovalue}>
                      {context.film[id].long}minutes
                    </div>
                  </div>
                  <div className={style.infoblock}>
                    <div className={style.infokey}>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faPlay} />
                      </i>
                      Year:
                    </div>

                    <div className={style.infovalue}>
                      {context.film[id].year}
                    </div>
                  </div>
                  <div className={style.infoblock}>
                    <div className={style.infokey}>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faFlag} />
                      </i>
                      Country:
                    </div>

                    <div className={style.infovalue}>
                      {context.film[id].country}
                    </div>
                  </div>
                  <div className={style.infoblock}>
                    <div className={style.infokey}>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faGlobe} />
                      </i>
                      Language:
                    </div>

                    <div className={style.infovalue}>
                      {context.film[id].language}
                    </div>
                    
                  </div>
                  <div className={style.infoblock}>
                    <div className={style.infokey}>
                      {" "}
                      <i>
                        <FontAwesomeIcon icon={faPercent} />
                      </i>
                      Rating:
                    </div>

                    <div className={style.infovalue}>
                      {context.film[id].rating.map((elem)=>{
                        return(   <i>
                           <FontAwesomeIcon icon={faStar} />
                         </i>)
                      })}
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className={style.about}><p>{context.film[id].info}</p></div>
                
            </div>
          </div>
         <div className={style.secondBlock}>
           <div className={style.player}>
             <div className={style.title}>
                     <i>
                        <FontAwesomeIcon icon={faVideo} />
                      </i>
                      <h3>Watch Now</h3>
<div>
  <button>Player 1</button>
  <button>Player 2</button>
</div>
<div onClick={updateView.bind(this,id,context.film[id].views)}>
<iframe width="1140" height="690" src={context.film[id].src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
             </div>
                      
           </div>
         </div>
          <div className={style.thirdBlock}>
            <div className={style.title}>
                        <i>
                        <FontAwesomeIcon icon={faUsers} />
                      </i>
                      <h3 style={{color:"black"}}>Actors</h3>
                      </div>
                      <div className={style.actorsList}>
            {context.film[id].cast.map((elem,index)=>{
return( <div className={style.actor}>
  <div>
  <img src={elem[2] || "http://localhost:3000/up8.jpg"}></img>
 
    </div>
  
    <h4>{elem[1]}</h4>
<h5>{elem[0]}</h5>

</div>)
            })}
          </div>
          </div>
          
        </div>
      )}
    </ThemeContextConsumer>
  );
}
