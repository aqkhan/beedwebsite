import React from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo";
import ProductsPage from "../components/productsComponent"

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <ProductsPage/>
    </Layout>
)

export default IndexPage
