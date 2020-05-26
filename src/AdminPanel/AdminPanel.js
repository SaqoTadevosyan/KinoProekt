import React, { Component } from "react";

import fire from "../fire/config";
import style from "./Panel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContextConsumer } from "../themeContext";
import { Input  } from "antd";

import {  faEdit } from "@fortawesome/free-regular-svg-icons";
import {  faPlus } from "@fortawesome/free-solid-svg-icons";
import { Select } from 'antd';
import Table from "./Table/Table"
import UploadButton from "./UploadButton";

class AdminPanel extends Component {
  state = {
    profile:true,
    payment:false,
    categoryList:["assa","sadsa","sad"],
    category: ["category"],
    cast: ["cast"],
    film: {
      src: "",
      name: "",
      age: "",
      category: [],
      info: [],
      cast: [[]],
      rating: ["rating"],
    },
  };
  handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    let film = this.state.film;
    if (name == "rating") {
      let tmp = [];
      for (let i = 0; i < Number(value); i++) {
        tmp.push("rating");
      }
      console.log(tmp);
      film[name] = tmp;
      this.setState({ film: film }, () => console.log(this.state));
      return;
    }

    film[name] = value;
    this.setState({ film: film }, () => console.log(this.state));
  };

  createData = (id) => {
 
    let obj = this.state.film;
    obj.id=id
    let time=new Date().toISOString()
    obj.time = time
obj.views=0
    fire
      .database()
      .ref("/" + id)
      .set(obj);
  };

  handleSelectCategory = (e) => {
  let  film=this.state.film
  film.category=e
this.setState({film:film})
    






  };

  handleSelectCast = (e) => {
    let index = e.target.id;
    let film = this.state.film;

    if (e.target.name == "actress") {
      film.cast[index][0] = e.target.value;
      this.setState({ film: film }, () => console.log(this.state.film));
      return;
    }
    film.cast[index][1] = e.target.value;
    this.setState({ film: film }, () => console.log(this.state.film));
  };
  render() {
    return (
      <div className={style.container}>
        <div id="logo"></div>
        <div className={style.leftbox}>
          <nav className={style.nav}>
            <a name="profile" onClick={()=>{
              this.setState({profile:true})
              this.setState({payment:false})
            }} className={style.active}>
              <i className="fa fa-user">
                <FontAwesomeIcon icon={faPlus} />
              </i>
            </a>
            <a name="payment" onClick={()=>{
             
              this.setState({profile:false})
              this.setState({payment:true})}}>
              <i className="fa fa-credit-card">  <FontAwesomeIcon icon={faEdit} /></i>
            </a>

            
          </nav>
        </div>
        <div className={style.rightbox}>
        <div className={this.state.profile ?  style.profile:style.noshow}>
          <div className={style.container55}>
            <div className={style.firstContainer} style={{marginTop:"15px"}}>

              <Input 
             style={{marginBottom:"15px"}}
                
                name="name"
                placeholder="Name"
                onChange={this.handleChange.bind(this)}
              />
              
                <Input
                style={{marginBottom:"15px"}}
                  
                  placeholder="year"
                  name="year"
                  placeholder="Year"
                  onChange={this.handleChange.bind(this)}
                  type="number"
                />
               
                <Input
                style={{marginBottom:"15px"}}
                 
                  name="age"
                  placeholder="Age"
                  onChange={this.handleChange.bind(this)}
                  type="number"
                />

                <Input
                style={{marginBottom:"15px"}}
                  placeholder="Basic usage"
                  name="rating"
                  placeholder="rating"
                  onChange={this.handleChange.bind(this)}
                  type="number"
                />

                <Input
                style={{marginBottom:"15px"}}
                 
                  name="img"
                  placeholder="Img"
                  onChange={this.handleChange.bind(this)}
                />

                <Input
                style={{marginBottom:"15px"}}
               
                  name="info"
                  placeholder="Info"
                  onChange={this.handleChange.bind(this)}
                />
               </div>
           
            <div className={style.secondContainer}>
            <Input
                style={{marginTop:"15px",marginBottom:"15px"}}
                  
                  name="country"
                  placeholder="Country"
                  onChange={this.handleChange.bind(this)}
                />
                 <Input
                style={{marginBottom:"15px"}}
                  
                  name="long"
                  placeholder="Time"
                  onChange={this.handleChange.bind(this)}
                />
 <Input
                style={{marginBottom:"15px"}}
                  
                  name="language"
                  placeholder="Language"
                  onChange={this.handleChange.bind(this)}
                />
                <Input
                style={{marginBottom:"15px"}}
                  placeholder="Basic usage"
                  name="src"
                  placeholder="Film URL"
                  onChange={this.handleChange.bind(this)}
                />
                
                <div style={{marginBottom:"15px"}}>
                <Select style={{marginBottom:"15px"}}
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Please select category"
    
    onChange={this.handleSelectCategory.bind(this)}
  >
   <option  value="drama">Drama</option>
                        <option  value="comedy">Comedy</option>
                        <option  value="biography">Biography</option>
                        <option  value="sport">Sport</option>
                        <option  value="action">Action</option>
                        <option  value="family">Family</option>
  </Select>
                  

                 
                
                </div>
             
                {this.state.film.cast.map((elem, index) => {
                  return (
                    <div className={style.cast} key={index} style={{marginBottom:"15px"}}>
                      
                      <Input style={{marginBottom:"15px"}} placeholder="passenger name" style={{ width: '50%' }}
                        onChange={this.handleSelectCast.bind(this)}
                        name="actress"
                        id={index}
                        key={index}
                        placeholder="actress"
                      />
                         <Input style={{marginBottom:"15px"}} placeholder="passenger name" style={{ width: '50%' }}
                        onChange={this.handleSelectCast.bind(this)}
                        name="personaj"
                        id={index}
                        key={index}
                        placeholder="personaj"
                      />
                       <button className={style.minibtn}
                  onClick={() => {
                    let tmp = this.state.film.cast;
                    tmp.push(["cast"]);
                    this.setState({ tmp }, () => console.log(this.state.film));
                  }}
                >
                  +
                </button>
                    </div>
                  );
                })}
               
                <ThemeContextConsumer>
                  {(context) => (
                    <a href="/"  className={style.btn}
                    
                      onClick={this.createData.bind(this, context.film.length)}
                    >
                      Add
                    </a >
                  )}
                </ThemeContextConsumer>
              </div>
              </div>
            </div>
            </div>
            <div
              className={
                this.state.payment ? style.payment : style.noshow
              }
            >
              <Table/>
            </div>

            
        </div>
        
     
    );
  }
}

export default AdminPanel;
