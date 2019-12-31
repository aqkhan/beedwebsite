import React from "react";

export default () => (
    <style jsx="true">{`

.recipt-page .nav-main ,.recipt-page footer {
display:none!important;

}
.recipt-page{
background-color:#9dbd3a;
height:100vh;
}
.recipt-page .container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    }
  .recipt-page  .details h1{
        font-size: 70px;
    color: white;
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
        text-align: center;
    }
     .recipt-page  .details p{
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    margin-top: 25px;
    animation: fadeInText 2s 0ms forwards;

    }

    @keyframes fadeInText {
  from {
    transform: translateY(30px);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
.confirmation-soory{
color:#d01e1e!important;
}
  `}</style>
);
