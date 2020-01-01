import React from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo";
import ProductsPage from "../components/productsComponent";
import WrapRootElement from "../apollo/wrap-root-element"

const IndexPage = () => {
    return (
        <WrapRootElement>
        <Layout>
            <SEO title="Home"/>
            <ProductsPage/>
        </Layout>
        </WrapRootElement>
    )
}


export default IndexPage
