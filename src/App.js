import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Header from "./components/Header";
import Home from "./components/Home";
import {useEffect} from 'react';
import {getUserAuth} from "./actions";
import {connect} from 'react-redux';
import alanBtn from '@alan-ai/alan-sdk-web';



const alankey='ba8999268c1d2b44860cddeff634b1482e956eca572e1d8b807a3e2338fdd0dc/stage';

function App(props) {
  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand:({command}) =>{
        if(command === 'testCommand'){
          alert("this code works")
        }
      }
    })
    props.getUserAuth();
  },[]);
    
  return (
    <div className="App">
      <Router>
      <Switch> 
         <Route exact path="/">
         <Login />
         
         </Route>
         <Route path="/home">
           <Header />
           <Home />
         </Route>
      </Switch>
      
      </Router>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return{};
};
const mapDispatchToProps=(dispatch)=>({
  getUserAuth: ()=>dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
