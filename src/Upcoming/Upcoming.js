import React, { useState } from "react";
import style from "./upcoming.module.css";
import Item from "../Item/Item";

import { ThemeContextConsumer } from "../themeContext";
import Sort from "./Sort";
export default function Upcoming() {
  const [filter, setFilter] = useState("new");
  const [filmList, setfilmList] = useState([]);
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={style.container}>
          <h2>UPCOMING MOVIES</h2>
          <div className={style.selectBut}>
            <a
              className={
                filter == "new" ? `${style.active}` : `${style.pasive}`
              }
              onClick={() => {
                setFilter("new");
              }}
            >
              New
            </a>
            <a
              className={
                filter == "views" ? `${style.active}` : `${style.pasive}`
              }
              onClick={() => {
                setFilter("views");
              }}
            >
              Most viewed
            </a>
            <a
              className={
                filter == "rating" ? `${style.active}` : `${style.pasive}`
              }
              onClick={() => {
                setFilter("rating");
              }}
            >
              Best Rating
            </a>
          </div>
          <div className={style.filmlist}>
            <Sort filmList={context.film} sortType={filter} />
          </div>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
