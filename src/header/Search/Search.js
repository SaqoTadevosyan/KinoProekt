import React from "react";
import style from "./search.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { Select } from 'antd';
import { Input  } from "antd";
import algoliasearch from 'algoliasearch/lite';

export default function Search() {
  let searchTeg="";
  let handleChange=(e)=>{
searchTeg=e.target.value
  }
 let handleSelectCategory = (e) => {
    

      
  
  
  
  
  
  
    };
  let st=  {
     
      width: "50%",
      
    };


  return (
    <div>
        <div className={style.searchBar}>
        <Select 
        style={st}
    mode="multiple"
  
    placeholder="Please select category"
    
    onChange={handleSelectCategory.bind(this)}
  >
   <option  value="drama">Drama</option>
                        <option  value="comedy">Comedy</option>
                        <option  value="biography">Biography</option>
                        <option  value="sport">Sport</option>
  </Select>
            
        <Input size="small" placeholder="Search" onChange={handleChange.bind(this)}/>
        <button><FontAwesomeIcon icon={faSearch}/></button>
        </div>
      
    </div>
  );
}
