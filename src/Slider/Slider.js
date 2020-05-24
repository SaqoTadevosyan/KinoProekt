import React, { Component } from "react";
import style from "./slider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
class Slider extends Component {
  state = {
    currdeg: 0,
    carousel: {
      height: "100%",
      width: "100%",
      position: "absolute",
      transformStyle: "preserve-3d",
      transition: "transform 1s",
      transform: `rotateY(0deg)`,
    },
  };
  render() {
    return (
      <div className={style.slider}>
        <div className={style.container}>
          <div style={this.state.carousel}>
            <div className={`${style.item} ${style.a}`}>
              <img src="./slide01.jpg"></img>
            </div>
            <div className={`${style.item} ${style.b}`}><img src="./slide02.jpg"></img></div>
            <div className={`${style.item} ${style.c}`}><img src="./slide03.jpg"></img></div>
            <div className={`${style.item} ${style.d}`}><img src="./slide01.jpg"></img></div>
            <div className={`${style.item} ${style.e}`}><img src="./slide02.jpg"></img></div>
            <div className={`${style.item} ${style.f}`}><img src="./slide03.jpg"></img></div>
          </div>
        </div>
        <div
          className={style.next}
          onClick={() => {
            let currdeg= this.state.currdeg - 60
            this.setState({currdeg:currdeg})
            this.setState({
              carousel: {
                height: "100%",
                width: "100%",
                position: "absolute",
                transformStyle: "preserve-3d",
                transition: "transform 1s",
                transform: `rotateY(${currdeg}deg)`,
              },
            })
            
          }}
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
        <div className={style.prev}   onClick={() => {
            let currdeg= this.state.currdeg + 60
            this.setState({currdeg:currdeg})
            this.setState({
              carousel: {
                height: "100%",
                width: "100%",
                position: "absolute",
                transformStyle: "preserve-3d",
                transition: "transform 1s",
                transform: `rotateY(${currdeg}deg)`,
              },
            })
            
          }}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </div>
      </div>
    );
  }
}

export default Slider;
