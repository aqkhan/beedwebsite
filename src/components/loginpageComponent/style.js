import React from "react";

export default () => (
    <style jsx="true">{`
.login-container{
margin-top:30px;
    width: 60%;
    margin: 0 auto;
}
.login-container h1{
padding-top:20px;
padding-bottom:20px;
    font-size: 30px;
}
.login-container  .form-group {
margin:30px 0px
}
.login-container  .form-control {
    padding: 25px 10px;
}
.login-container form{
border: 1px solid rgba(34,36,38,.15);
    padding: 1em;
        box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
}
.login-container form button:hover{
background-color: #cf590c!important;
    color: #fff;
    text-shadow: none;

}
.login-container form button{
border: none!important;
background-color: #cf590c!important;
    color: #fff;
    text-shadow: none;
}
.login-container form button:active{
outline:none!important;
}
.login-container form button:focus{
outline:none!important;
}
.error{
    color: red;
    margin-top: 15px;
    margin-bottom: 0;
    font-weight: 500;
}
  `}</style>
);
