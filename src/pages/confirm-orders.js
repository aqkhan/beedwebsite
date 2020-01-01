import React from "react";
import Layout from "../components/layout";
import MainComponent from "../components/confirmationComponent";
import SEO from "../components/seo";

const ConfirmPage = () => {
    return (
        <div className="recipt-page">
            <SEO title="Confirm Order"/>
            <Layout>
                <MainComponent/>
            </Layout>
        </div>
    )
}

export default ConfirmPage