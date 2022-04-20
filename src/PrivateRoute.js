import React, { useState, useEffect } from "react";
import {Route,Redirect ,useHistory} from 'react-router-dom';
import axios from "axios";
const PrivateRoute = ({children,location,...rest}) =>{
    
    let history = useHistory();
    let token = localStorage.getItem("access_token");
    
    // const getUser = useEffect(() => {
    //   axios
    //     .get("http://127.0.0.1:8000/api/user/profile/", {
    //       headers: { Authorization: `Bearer ${token}` },
    //     })
    //     .then((res) => {
    //         return (<Route {...rest} render={children}/>);
    //     })
    //     .catch((err) => {
    //       console.log(err.response.data);
    //     });
    // }, []);
  
    let  isAuth = location.state ?true:false
      
    return (<Route {...rest} render={()=>isAuth?(children):(<Redirect to={'/'}/>)}/>);
}
export default PrivateRoute; 