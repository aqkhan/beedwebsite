import React from "react";

export default () => (
    <style jsx="true">{`
.login-container{
margin-top:30px;
    width: 30%;
    margin: 0 auto;
        height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.login-container h1{
padding-top:20px;
padding-bottom:20px;
    font-size: 26px;
        text-align: center;
}
.login-container  .form-group {
margin:8px 0px
}
.login-container  .form-control {
    padding: 25px 10px;
}
.login-container form{
border: 1px solid rgba(34,36,38,.15);
    padding: 1em;
        box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
        width:100%;
}
.login-container form button:hover{
background-color: #9dbd3a !important;
    color: #fff;
    text-shadow: none;

}
.login-container form button{
border: none!important;
background-color: #9dbd3a !important;
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
    font-size:12px
}
.error-div{
min-height: 30px;
}
.error-div p{
margin-bottom:0px;
color:red;
font-size:12px;
}
.forgot-password{
color:#9dbd3a;
    text-align: right;
}
.dont-have-account span{
font-weight:600;
color:#9dbd3a;
}
.dont-have-account {

text-align:center
}
.form-group label{
font-weight: 600;
}
  `}</style>
);
