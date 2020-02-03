import React from "react";

export default () => (
    <style jsx="true">{`
.bg-light{
     background: red!important;
     padding: 20px 0px;
}

.navbar-light .navbar-nav .nav-link{
    color: rgba(0,0,0,.95);
    font-weight: 400;
    font-size: 20px;
}
.products-container h1 span{
color:#e01907
}



.logo-img{
width:80px;
}
.header-list{
padding-left:0;
list-style:none;
display: flex;
justify-content: space-between;
margin-bottom:0;
    align-items: center;
}
.header-list li{
float:left;
font-weight: 600;
cursor: pointer;
}
.header-list li a{
color:unset!important;
text-decoration:none!important;
}
.user-img-div{
height:50px;
width:50px;
border-radius:50%;
// background-image:url("http://amp.beantownthemes.com/interior/wp-content/uploads/sites/6/team1.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.lougout-div ul{
list-style:none;
margin-bottom:0px;
position:absolute;
padding-left: 0;
background-color: #7cbb7c;
padding: 4px 10px;
 top: 34px;
left: 10px;

}
.logout-dropdown{
position:relative;
    display: flex;
    align-items: center;
}
.logout-dropdown li{
cursor:pointer;
}
.logout-dropdown i{
font-size: 35px;
margin-left: 31px;
cursor:pointer;
transition: all 0.4s ease;
}
.rotate-arrow{
transform: rotateZ(-180deg);
}
.nav-main{
    position: absolute;
    width: 100%;
    top: 0;
    padding-top: 15px;
    z-index:2;
}
.user-img-list{
    font-size: 11px;
    border-top: 0.5px solid rgba(255, 255, 255, 0.6);
    padding: 15px 20px;
    width: 100%;
}





.burger-button {
  position: absolute;
    top: 0vh;
    right: 2vh;
  z-index: 9;
  padding:5px;
}
/*this is where you can chand the color of the buttons*/
.burger-button span{
  width: 28px;
  border: 1px solid #9dbd3a;
  background-color: #9dbd3a;
  display: block;
  border-radius: 22px;
  transition: 0.2s;
}
.burger-button.active span{
/*   border-color: green; */
  background-color:#9dbd3a;
}

.burger-top, .burger-bottom{
  position: absolute;
}

.burger-top{
  top: -02px;
}

.burger-bottom{
  bottom: -02px;
}
/* make sure this has the same top as the burger button has padding*/
.burger-button.active .burger-top{
  position: absolute;
  top: 5px;
  transform: rotateZ(45deg);
}

.burger-button.active .burger-middle{
/*   transform: rotateZ(270deg); */
  border-color: rgba(0,0,0,0);
  background-color:rgba(0,0,0,0);
}

/* make sure this has the same bottom as the burger button has padding*/

.burger-button.active .burger-bottom{
  position: absolute;
  bottom: 5px;
  transform: rotateZ(-45deg);
}

.burger-menu {
    display: flex;
    position: fixed;
    top: -100vh;
    left:0;
    right: 0;
    bottom: 100vh;
    background-color: #f9f9f9;
    padding:5px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    z-index: 8;
    // transition:0.2s;
    align-content:space-around;
  justify-content:space-around;
  flex-direction:column;
}
.burger-menu.active{
  top:0;
  bottom:0;
}
 .hide-res-list {
        display: none !important;
    }
       .ham-nav {
        display: flex;
        justify-content: flex-end;
    }

    .show-res-list {
        display: flex !important;
    }
.responsive-nav-div{
animation: slide 0.2s ;
  animation-direction: alternate;
}
   @keyframes slide {
  from {left: -100vw;}
  to {left: 0vw;}
}
.responsove-header{
display:none
}
 .responsive-nav-div ul li a{
        color: white!important;
            font-weight: 600;
    }
    .logout-button{
      background-color: #638a22;
      color:white;
          border: none;
    outline: none;
    padding: 5px 24px;
    border-radius: 4px;
    }
    .dropdown-button{
    background-color:#9dbd3a;
    align-items: center;
    color: white;
    min-width: 200px;
    justify-content: space-between;
    outline:none!important;
     border-radius: 0px;
}
.dropdown-button:focus{
 outline:none!important;
 box-shadow:none
}
.dropdown-button:hover{
    background-color:#9dbd3a;
    align-items: center;
    color: white;

    justify-content: space-between;
}
.dropdown-list {
position:absolute;

    background-color: #9dbd3a;

    color: white;
    min-width: 200px;
    top: 41px;
    padding-left: 0;
    list-style: none;
    text-align: center;
}
.dropdown-list  li{
    width: 100%;
    text-align: left;
    padding-left: 15px;
    font-weight:normal!important;
        border-bottom: 1px solid white;
        // background-color:#03ca06;
            padding: 6px;
}

  `}</style>
);
