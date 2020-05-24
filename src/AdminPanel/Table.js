import React, { Component } from "react";

import { Input , Select } from "antd";
import fire from "../fire/config";
import style from "./table.module.scss";
import DButton from "./DButton";
class Table extends Component {
  state = {
    data: [],
    edit: null,
    updateObj:{}
  };
 updateItem=(id)=>{
 let data=this.state.data;
 let updateObj=this.state.updateObj
  data[id]=updateObj
  fire
      .database()
      .ref("/"+id).update(updateObj)
  console.log(data.id,"updateObj")
  this.setState({data:data})
  this.setState({edit:null})
 }
  deleteItem = (id) => {
  let  data=this.state.data
    data.splice(id,1)
    fire
    .database()
    .ref("/").set(data)
    this.setState({data:data})
   
    
  };
  handleChange=(e)=>{
let inp=e.target.value;
let inpId=e.target.id
let obj=this.state.updateObj
obj[inpId]=inp
this.setState({updateObj:obj})
console.log(this.state.updateObj)
  }
  componentDidMount = () => {
 this.updateData()
  };
  updateData=()=>{
    let db = [];

    fire
      .database()
      .ref("/")
      .once("value")
      .then((snapshot) => {
        db = snapshot.val();
      })
      .then(() => {
        this.setState({ data: db });
      });
  }
 selectChange=(value)=> {
  let obj=this.state.updateObj
obj.category=value
this.setState({updateObj:obj})
    console.log(value);
  }
  
  render() {
    return (
        <div className={`${style.container}`}>
          <ul className={`${style.responsive_table}`}>
          <li className={`${style.table_header}`}>
      <div className={`${style.col} ${style.col_1}`}>Id</div>
      <div className={`${style.col} ${style.col_2}`}>Name</div>
      <div className={`${style.col} ${style.col_3}`}>Age</div>
      <div className={`${style.col} ${style.col_4}`}>Img</div>
      <div className={`${style.col} ${style.col_5}`}>Url</div>
      <div className={`${style.col} ${style.col_6}`}>Category</div>
      <div className={`${style.col} ${style.col_7}`}>Rating</div>
      <div className={`${style.col} ${style.col_8}`}>Year</div>
      <div className={`${style.col} ${style.col_9}`}>Operation</div>
      </li>
       
       
          {this.state.data.map((elem, index) => {
            return (
                <li className={`${style.table_row}`}>
            
            <div className={`${style.col} ${style.col_1}`} data-label="id">
                 
                    <Input style={{border:"none"}} id="id" onChange={this.handleChange} value={index} />
              
               </div>
               <div className={`${style.col} ${style.col_2}`} data-label="Name">
                  {this.state.edit == index ? (
                    <Input id="name" onChange={this.handleChange} placeholder={elem.name} />
                  ) : (
                    <Input style={{border:"none"}} value={elem.name} />
                  )}
                </div>
                <div className={`${style.col} ${style.col_3}`} data-label="Age">
                  {this.state.edit == index ? (
                    <Input id="age" onChange={this.handleChange}  placeholder={elem.age} />
                  ) : (
                    <Input style={{border:"none"}} value={elem.age} />
                  )}
                </div>
                <div className={`${style.col} ${style.col_4}`} data-label="img">
                  {this.state.edit == index ? (
                    <Input id="img" onChange={this.handleChange}  placeholder={elem.img} />
                  ) : (
                    <Input style={{border:"none"}} value={elem.img} />
                  )}
                </div>
                <div className={`${style.col} ${style.col_5}`} data-label="Url">
                {this.state.edit == index ? (
                    <Input id="src" onChange={this.handleChange}  placeholder={elem.src} />
                  ) : (
                    <Input style={{border:"none"}} value={elem.src} />
                  )}
                </div>
                <div className={`${style.col} ${style.col_6}`} data-label="Category">
                {this.state.edit == index ? (
                    <Select id="category" mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={elem.category}  onChange={this.selectChange} placeholder={elem.category} >
                      <option  value="---">----------</option>
                        <option  value="comedy">comedy</option>
                    </Select>
                  ) : (
                    <Input style={{border:"none"}} value={elem.category} />
                  )}
                </div>
                <div className={`${style.col} ${style.col_7}`} data-label="Rating">
                {this.state.edit == index ? (
                    <Input id="rating" onChange={this.handleChange}  placeholder={elem.rating.length} />
                  ) : (
                    <Input style={{border:"none"}} value={elem.rating.length} />
                  )}
                </div>
                <div className={`${style.col} ${style.col_8}`} data-label="Year">
                {this.state.edit == index ? (
                    <Input id="year" onChange={this.handleChange}  placeholder={elem.year} />
                  ) : (
                    <Input style={{border:"none"}} value={elem.year} />
                  )}
                </div>
                <div className={`${style.col} ${style.col_9}`} data-label="Operation">
                {this.state.edit == index ? (
                    <div>
                      <DButton name="Save"  func={this.updateItem.bind(this,index)} />{" "}
                      <a
                        onClick={() => {
                          this.setState({ edit: null });
                        }}
                      >
                        cancel
                      </a>
                    </div>
                  ) : (
                    <div>
                      <a
                        onClick={() => {
                          this.setState({ edit: index });
                          this.setState({ updateObj: elem });
                        }}
                      >
                        edit
                      </a>{" "}
                      <DButton
                        name="Delete"
                        func={this.deleteItem.bind(this, index)}
                      />
                    </div>
                  )}
                </div>
                
               
            </li>);
          })
          }
        </ul>
      </div>
    );
  }
}

export default Table;
