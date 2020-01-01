import React from "react";
import Layout from "../components/layout";
import MainComponent from "../components/confirmationAdmin";
import SEO from "../components/seo";

const ADminpage = () => {
    return (
        <div className="recipt-page">
            <SEO title="Confirm Order"/>
            <Layout>
                <MainComponent/>
            </Layout>
        </div>
    )

}
export default ADminpage