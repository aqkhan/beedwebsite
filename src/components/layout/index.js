import React, {useEffect} from "react"
import Header from "../header/header";
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css"
import Footer from "../footer"


const Layout = ({children}) => {

    return (
        <>
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="/css/main.css"/>
        </Helmet>
        <Header/>
        {
            children
        }
        <Footer/>
        </>
    )
}


export default Layout
