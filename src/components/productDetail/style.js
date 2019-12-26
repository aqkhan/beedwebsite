import React from "react";

export default () => (
    <style jsx="true">{`
.detail-background{
min-height:250px;

background-image:url('https://parmsang.github.io/gatsby-starter-ecommerce/static/29fc60205ed965b9ff1461c401d5b4e4/7c0ed/a0b2f791-4315-4a14-8b70-53784330cfb6.png');
background-repeat:no-repeat;
background-position: center;
    background-repeat: no-repeat
}
.product-detail-container{
padding-top:50px;
}
.product-into p{
    font-size: 25px;
font-weight: 700;
color: rgba(0,0,0,.85);
}
.product-into{
padding-top:100px
}
.about-produc h1{
    font-size: 25px;
font-weight: 700;
color: rgba(0,0,0,.85);
}
.about-produc p{
font-size:20px;
}
.about-produc {
 padding: 35px 0px;
}
.product-detail-container hr{
height:0.5px;
width:100%;
margin:0;
background-color:rgba(34,36,38,.15);
}
.table-striped tbody tr{
background-color:white!important;
}
.before-table{
background-color:rgba(249,250,251,1);
  padding: 16px 10px;
   margin-top: 40px;
       border-bottom: none;
    border: 1px solid #dee2e6;
}
.before-table p{
font-size:20px;
font-weight: 700;
    margin-bottom: 0;
}
table td{
font-size:18px
}
.product-form{
margin-top:100px;
border: 1px solid rgba(34,36,38,.15);
    padding: 1em;
        box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
            width: 60%;
       margin: 100px auto 0px auto;
}
.product-form p{
font-size:25px;
}
.quantity-of-products{
width:20%
}
.quantity-of-products::-webkit-outer-spin-button,
.quantity-of-products::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
.quantity-of-products {
  -moz-appearance:textfield;
}
.quantity-group{
    display: flex;
    align-items: center;
}
.arrow-div{
height: 30px;
    width: 30px;
       border: 1px solid rgba(34,36,38,.15);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
        margin-right: 10px;

}
.add-remove-arrow{
margin-left: 30px;
    display: flex;
}

  `}</style>
);
