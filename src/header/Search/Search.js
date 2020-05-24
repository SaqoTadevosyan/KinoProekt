import React from "react";
import style from "./search.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import algoliasearch from 'algoliasearch/lite';

export default function Search() {
  let searchTeg=""
  let handleChange=(e)=>{
searchTeg=e.target.value
  }
  let handleSelect=()=>{

  }
  return (
    <div>
        <div className={style.searchBar}>
            <select onChange={handleSelect.bind(this)}>
              <option>All</option>
            </select>
            
        <input placeholder="Search" onChange={handleChange.bind(this)}></input>
        <button><FontAwesomeIcon icon={faSearch}/></button>
        </div>
      
    </div>
  );
}
