import React, {useEffect} from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo";
import ProductsPage from "../components/productsComponent"

const IndexPage = () => {
    useEffect(() => {
        let auser = localStorage.getItem("beedUser");
        if (!auser) {
            window.location.href = "/login"
        }
    }, [])
    return (
        <Layout>
            <SEO title="Home"/>
            <ProductsPage/>
        </Layout>
    )
}


export default IndexPage
