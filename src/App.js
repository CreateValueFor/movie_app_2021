import React from "react"; 
import About from "./routes/about";
import {HashRouter,Route} from "react-router-dom";
import Home from "./routes/home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App(){
  return <HashRouter>
    <Navigation/>
    <Route path='/' exact = {true} component={Home}/>  
    <Route path='/about' component={About}/>
    <Route path='/movie/:id' component={Detail}/>
  </HashRouter>
}

export default App;