import React from "react";
import Layout from "../components/layout";
import ProductDetailComponent from "../components/productDetail";
import WrapRootElement from "../apollo/wrap-root-element"
const DetailPage = () => {
    return (
        <WrapRootElement>
            <Layout>
                <ProductDetailComponent/>
            </Layout>
        </WrapRootElement>
    )
}
export default DetailPage