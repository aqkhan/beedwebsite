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
.filter-div{
    display: flex;
    justify-content: flex-end;
}
.single-search-div{
    border: 1px solid #bcbdbd;
   padding: 2px 6px;
}
.single-search-div input,.single-search-div select{
border:none!important;
-webkit-appearance: none;
    appearance: none;
}
.single-search-div input:active,.single-search-div select:active{
border:none!important;
outline:none!important;
}
.single-search-div input:focus,.single-search-div select:focus{
border:none!important;
outline:none!important;
}
.filter-select select{
       padding: 2px 110px 2px 2px;

}
.filter-section{
    padding: 30px 0px;
}

.single-product-card{
height:400px;
margin-bottom:20px;
box-shadow: 0 1px 3px 0 #bcbdbd, 0 0 0 1px #d4d4d5;
border: none;
transition:0.5s ease;
cursor:pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.single-product-card:hover {
 transition-timing-function: ease;
  -ms-transform: scale(1.05); /* IE 9 */
  -webkit-transform: scale(1.05); /* Safari 3-8 */
  transform: scale(1.05);
}
.single-product-thumbnaail{
height:285px;
// background-image:url("https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555275829/shape/mentalfloss/istock-509469214.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.single-product-detail{
padding:10px 20px;
}
.single-product-detail p{
margin-bottom:0px
}
.single-product-detail .single-product-title{
font-weight:600;
    margin-bottom: 5px;
}
.single-product-detail .single-product-farm{
  margin-bottom: 5px;
}
.view-more-btn{
    background-color: #9dbd3a;
    color: white;
    outline:none;

}
.view-more-btn:hover{
    color: white;
}
.view-more-btn:focus{
outline:none!important
}
a{
color:unset!important
}
  `}</style>
);
