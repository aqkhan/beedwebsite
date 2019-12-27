import React from "react";

export default () => (
    <style jsx="true">{`
.product-detail-container{
 margin-top: 165px;
}
.product-image{
min-height:450px;
background-size:cover;
background-repeat:no-repeat;
background-image:url("https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555275829/shape/mentalfloss/istock-509469214.jpg");
}


.product-detail-div .title{
    font-size: 26px;
    font-weight: 600;
    }
    .product-detail-div .price,.product-detail-div .in-stock{
    font-size: 16px;
    font-weight: 600;
    color:#9dbd3a
    }
    .product-detail-div .farm-name,.product-detail-div .product-id{
     font-size: 16px;
    font-weight: 600;
    }
    .product-detail-div{
    padding-top:10px
    }
   .product-detail-div  .price{
   margin:16px 0px
    }
.product-detail-div .in-stock{
margin-top:20px
}
.product-quantity-order .add-remove-div{
    height: 35px;
    width: 36px;
    border: 1px solid rgba(0,0,0,.1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
          margin: 0px 10px;
    }
    .product-quantity-order input{
    border: 1px solid rgba(0,0,0,.1);
    }
     .product-quantity-order input::-webkit-inner-spin-button,
     .product-quantity-order input::-webkit-outer-spin-button
     {
    border: 1px solid rgba(0,0,0,.1);
     -webkit-appearance: none;
    }
    .product-quantity-order input{
  -moz-appearance:textfield;
}
.product-quantity-order input:focus{
outline:none!important
}
.changing-price{
 border: 1px solid rgba(0,0,0,.1);
   height: 38px;
   width: 100%;
}
.changing-price p {
margin-bottom:0;
}
.changing-price{
    display: flex;
    justify-content: space-between;
        padding: 7px 20px;
}
.headings{
font-weight:600
}
.date-col{
margin-top:40px
}
.fa-calendar{
margin-left:10px;
}
.product-detail{
    padding-top: 60px;
}
.product-detail h1{
    padding-top: 60px;
}
.view-more-btn{
    background-color: #9dbd3a;
    color: white;
    outline:none;
    margin-top: 20px;

}
.view-more-btn:hover{
    color: white;
}
.view-more-btn:focus{
outline:none!important
}
  `}</style>
);
