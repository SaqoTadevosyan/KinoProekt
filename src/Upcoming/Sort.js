import React,{useState,useEffect} from 'react';
import style from "./upcoming.module.css"
import Item from '../Item/Item';
import { Pagination } from 'antd';

export default function Sort(props){

const [data, setdata] = useState([]);
const [pageNumber, setpageNumber] = useState(0);
let sortBy=(type)=>{
    if(type=="new" ){
      
        let newData=[...props.filmList]
    newData.sort((a,b)=>{
       
        if(new Date(a.time)<new Date(b.time)){
            return 1
 
        }
        if(new Date(a.time)>new Date(b.time)){
            return -1
        }
        if(new Date(a.time)==new Date(b.time)){
            return 0
        }
    })
    pageCreate(newData)
 }
 if(type=="rating"){
       
     let newData=[...props.filmList]
 newData.sort((a,b)=>{
    
     if(new Date(a.rating.length)<new Date(b.rating.length)){
         return 1
 
     }
     if(new Date(a.rating.length)>new Date(b.rating.length)){
         return -1
     }
     if(new Date(a.rating.length)==new Date(b.rating.length)){
         return 0
     }
 })
 pageCreate(newData)
 }
 if(type=="views"){
       
     let newData=[...props.filmList]
 newData.sort((a,b)=>{
    
     if(new Date(a.views)<new Date(b.views)){
         return 1
 
     }
     if(new Date(a.views)>new Date(b.views)){
         return -1
     }
     if(new Date(a.views)==new Date(b.views)){
         return 0
     }
 })
 pageCreate(newData)
 }
}
let pageChange=(page)=>{
    setpageNumber(page-1)
       }
let pageCreate=(filmList)=>{
    let itemList = filmList;

    let size =4;
    let subarray = [];
    for (let i = 0; i < Math.ceil(itemList.length / size); i++) {
      subarray[i] = itemList.slice(i * size, i * size + size);
    }
    console.log(subarray)
setdata(subarray)
   }
useEffect(() => {
    
   setdata(props.filmList)
   sortBy(props.sortType)
  
   
    return 
}, [props.filmList,props.sortType,props.pageNumber]);

return(
    <div className={style.filmContainer}>
    <div className={style.filmList}>
      
{data.length>0 ?   data[pageNumber].map((elem)=>{
    
return <Item info={elem} id={elem.id}/>
}):null}
   </div>
   <Pagination style={{marginTop:"40px"}} defaultCurrent={1} total={data.length*10} onChange={pageChange}/>
   </div>
    
)
}