import React from "react";

export default () => (
    <style jsx="true">{`
.header-main-text-desc h1{
font-size:50px;
font-weight:bold;
font-family: 'Roboto Slab', serif;
}
.header-main-text-desc .span1{
color: #7c8945;
}
.header-main-text-desc .span2{
color: #03ca06;
}
.header-main-text-desc{
    width: 60%;
}
.header-main-text-desc p{
font-weight:600;
padding-top: 25px;
font-family: 'Roboto', sans-serif;
}
.main-header{
min-height:600px;
background-color:#f6f6f6;
 // background-image: url("https://i.ibb.co/rwggftG/bgggg.png");
 background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
        display: flex;
    justify-content: center;
    align-items: center;
}
.content-div{
    padding-top: 115px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    position:relative
    }
    .content-div img{
       position: absolute;
    right: 0;
    top: 45px;
    }
  `}</style>
);
