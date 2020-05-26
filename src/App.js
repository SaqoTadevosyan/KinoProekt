import "./App.css";
import 'antd/dist/antd.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Film from "./Film/Film";
import React, { Component } from "react";
import AdminPanel from "./AdminPanel/AdminPanel";
import Footer from "./Footer/Footer";
class App extends Component {
  state = {};

  render() {
    return (
      
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/film/:id" component={Film} />
            <Route path="/panel"  component={()=>{
              return <AdminPanel/>
            }} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      
    );
  }
}

export default App;
