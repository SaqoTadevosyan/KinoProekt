import React, { useState, useEffect } from "react";
import style from "./upcoming.module.css";
import Item from "../Item/Item";
import fire from "../fire/config"
import { Pagination } from 'antd';
import { ThemeContextConsumer } from "../themeContext";
import Sort from "./Sort";
export default function Upcoming() {
  const [filter, setFilter] = useState("new");
  const [filmList, setfilmList] = useState([]);
  const [pageNumber, setpageNumber] = useState(0);
   let pageCreate=(filmList)=>{
    let itemList = filmList;

    let size =4;
    let subarray = [];
    for (let i = 0; i < Math.ceil(itemList.length / size); i++) {
      subarray[i] = itemList.slice(i * size, i * size + size);
    }
    console.log(subarray)
setfilmList(subarray)
   }
   useEffect(() => {
    let db = [];
    fire
      .database()
      .ref("/")
      .once("value")
      .then((snapshot) => {
        db = snapshot.val();
      })
      .then(() => {
       pageCreate(db)})
     return () => {
       
     };
   }, []);
   let pageChange=(page)=>{
setpageNumber(page-1)
   }
  return (
    
      
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
            {filmList[0] ? <Sort filmList={filmList} sortType={filter} pageNumber={pageNumber}/>:null}
            
          </div>
          <Pagination defaultCurrent={1} total={filmList.length*10} onChange={pageChange}/>
        </div>
      )
    
  
}
