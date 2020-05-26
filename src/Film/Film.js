import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fire from "../fire/config";
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
import firebase from "../fire/config";
class Film extends Component {
  state = {
    data: [],
  };

  componentDidMount = () => {
    let db = [];
    fire
      .database()
      .ref("/"+this.props.match.params.id )
      .once("value")
      .then((snapshot) => {
        db = snapshot.val();
      })
      .then(() => {
        this.setState({
          data: db,})})
        
      
  };

  updateView = (id, views) => {
    firebase
      .database()
      .ref("/" + id)
      .update({ views: views + 1 });
  };

  render() {
    return (
      <div className={style.container}>
        <div className={style.firstBlock}>
          <img src={this.state.data.img} />
          <div className={style.info}>
            <div className={style.details}>
              <div className={style.category}>
                {this.state.data.category ?    this.state.data.category.map((elem) => {
                  return elem + "   ";
                }):null}
              </div>
              <div className={style.name}>{this.state.data.name}</div>
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
                    {this.state.data.long}minutes
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

                  <div className={style.infovalue}>{this.state.data.year}</div>
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
                    {this.state.data.country}
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
                    {this.state.data.language}
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
                    { this.state.data.rating ?   this.state.data.rating.map((elem) => {
                      return (
                        <i>
                          <FontAwesomeIcon icon={faStar} />
                        </i>
                      );
                    }):null}
                  </div>
                </div>
              </div>
            </div>
            <div className={style.about}>
              <p>{this.state.data.info}</p>
            </div>
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
              <div
                onClick={this.updateView.bind(
                  this,
                  this.props.match.params.id,
                  this.state.data.views
                )}
              >
                <iframe
                  width="1140"
                  height="690"
                  src={this.state.data.src}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className={style.thirdBlock}>
          <div className={style.title}>
            <i>
              <FontAwesomeIcon icon={faUsers} />
            </i>
            <h3 style={{ color: "black" }}>Actors</h3>
          </div>
          <div className={style.actorsList}>
            {this.state.data.cast ?   this.state.data.cast.map((elem, index) => {
              return (
                <div className={style.actor}>
                  <div>
                    <img src={elem[2] || "http://localhost:3000/up8.jpg"}></img>
                  </div>

                  <h4>{elem[1]}</h4>
                  <h5>{elem[0]}</h5>
                </div>
              );
            }):null}
          </div>
        </div>
      </div>
    );
  }
}

export default Film;
