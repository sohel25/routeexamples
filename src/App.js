// import logo from './logo.svg';
   import React from "react";
  import { Route, Switch  } from "react-router-dom";
  import About from "./component/About";
  import Contact from "./component/Contact";
  import Service from "./component/Services";

  import Error from "./component/Error";
  import Menu from "./component/Menu";
  const App = () =>{
  const Name = ()=>{
    return <h2>Hello I am name Page</h2>
  }
  return (
     <>
    <h1>use '/' and '/contact ' for routing</h1>
    <h3>===========================================</h3>
    <Menu/>
    <Switch>
    <Route exact path='/' component ={()=><About name="About"/>} />
    <Route exact path='/service' render ={()=><Service name="Service"/>} />
    <Route exact path='/contact' render ={()=><Contact name="Contact"/>} />
    <Route exact path='/contact/name' component ={Name} />
    <Route component ={Error} />

    {/* <About/>
    <Contact/> */}
    </Switch>
    </>
  )
};

export default App;
