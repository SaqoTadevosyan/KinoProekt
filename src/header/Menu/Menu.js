import React, { useState } from "react";
import style from "./menu.module.css";
export default function Menu() {
  return (
    <div>
      <div className={style.menu}>
        <ul>
          <li className={style.home}>
            <a href="/">Home</a>
            <div className={style.homeMenu}>
              <ul>
                <li>index1</li>
                <li>index2</li>
                <li>index3</li>
                <li>index4</li>
              </ul>
            </div>
          </li>

          <li>
            <a href="#">Movie</a>
          </li>
          <li>
            <a href="#">TV show</a>
          </li>
          <li>
            <a href="#">Video</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
