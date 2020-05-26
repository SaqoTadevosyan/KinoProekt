import React,{useState,useEffect} from 'react';
import style from "./upcoming.module.css"
import Item from '../Item/Item';


export default function Sort(props){

const [data, setdata] = useState(props.filmList[props.pageNumber]);

useEffect(() => {
    console.log(props.pageNumber)
   setdata(props.filmList[props.pageNumber])
 
   console.log(props.filmList)
   if(props.sortType=="new" ){
      
       let newData=[...props.filmList[props.pageNumber]]
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
      
    let newData=[...props.filmList[props.pageNumber]]
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
      
    let newData=[...props.filmList[props.pageNumber]]
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
}, [props.filmList,props.sortType,props.pageNumber]);

return(
    
    <div className={style.filmlist}>
       {console.log(data)}
{data.length>0 ?   data.map((elem)=>{
    
return <Item info={elem} id={elem.id}/>
}):null}
   
  
   </div>
    
)
}