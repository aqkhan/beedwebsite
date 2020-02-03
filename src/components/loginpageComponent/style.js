import React from "react";

export default () => (
    <style jsx="true">{`
.login-container{
margin-top:30px;
    // width: 30%;
    margin: 0 auto;
      height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.main-div-login{
max-height:506px;
 box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.01);
  background-color: #f2f2f2;
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
// border: 1px solid rgba(34,36,38,.15);
    padding-right: 1em;
     padding-left: 1em;
      padding-top: 1em;
        box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
        width:100%;
         height:100%;
        background-color:white;
}
.login-container form button:hover{
 width: 100%;
  height: 53px;
    color: #ffffff;
  background-color: #638a22;

}
.login-container form button{
 width: 100%;
  height: 53px;
  background-color: #638a22;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.31px;
  text-align: center;
  color: #ffffff;
}
.login-container form button:active{
  width: 100%;
   color: #ffffff;
  height: 53px;
  background-color: #638a22;
outline:none!important;
}
.login-container form button:focus{
 width: 100%;
 height: 53px;
   color: #ffffff;
 background-color: #638a22;
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
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.27px;
  color: #638a22;
  text-align:right
}
.dont-have-account span{
font-weight:600;
color:#9dbd3a;
}
.dont-have-account {

text-align:center
}
.form-group label{
font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.31px;
  color: #202020;
}
.login-bg-image{
background-size:cover;
background-repeat:no-repeat;
    background-position: center;
}

.main-login-page{
background-color:#f2f2f2;
}

  `}</style>
);
