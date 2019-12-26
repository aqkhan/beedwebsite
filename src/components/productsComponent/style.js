import React from "react";

export default () => (
    <style jsx="true">{`
.products-container img{
background-color:#f2f2f2;
    }
.card{
margin-bottom:20px;
box-shadow: 0 1px 3px 0 #bcbdbd, 0 0 0 1px #d4d4d5;
border: none;
transition:0.5s ease;
cursor:pointer;
}
.card:hover {
 transition-timing-function: ease;
  -ms-transform: scale(1.05); /* IE 9 */
  -webkit-transform: scale(1.05); /* Safari 3-8 */
  transform: scale(1.05);
}
.card-title,.card-text{
color:black!important;
text-decoration:none!important;
}
a:hover{
text-decoration:none!important;
}
  `}</style>
);
