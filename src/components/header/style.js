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
background-image:url("http://amp.beantownthemes.com/interior/wp-content/uploads/sites/6/team1.jpg");
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
  `}</style>
);
