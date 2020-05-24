import React,{useState,useEffect} from 'react';
import style from "./upcoming.module.css"
import Item from '../Item/Item';


export default function Sort(props){

const [data, setdata] = useState([props.filmList]);
useEffect(() => {
    setdata(props.filmList)
    return () => {
        
    };
}, []);
useEffect(() => {
   setdata(props.filmList)
 
   console.log(data,props.filmList)
   if(props.sortType=="new" ){
      
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
   setdata(newData)
}
if(props.sortType=="rating"){
      
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
setdata(newData)
}
if(props.sortType=="views"){
      
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
setdata(newData)
}
    return 
}, [props.filmList,props.sortType]);

return(
    
    <div className={style.filmlist}>
       
{data.length>1 ?   data.map((elem,index)=>{
return <Item info={elem} id={index}/>
}):null}
   
  
   </div>
    
)
}