import React, {useEffect} from "react"
import Header from "../header/header";
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css"
import Footer from "../footer"
import Favicon from '../../images/favicon.ico';

const Layout = ({children}) => {

    return (
        <>
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="/css/main.css"/>
            <link rel="icon" href={Favicon} />
            {/*<Favicon url="/images/favicon.ico"/>*/}
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
