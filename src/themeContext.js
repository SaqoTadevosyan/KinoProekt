import React, { Component } from "react";
import fire from "./fire/config"
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    data: []
  };

  componentWillMount=()=>{
    let db=[]
    fire.database().ref('/' ).once('value').then((snapshot)=> {
      db=snapshot.val()
      
    }).then(()=>{
     this.setState({data:db},()=>{

       console.log(this.state.data)
     })
      
    })
   }

  render() {
    return (
      <Provider
        value={{ film: this.state.data}}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
