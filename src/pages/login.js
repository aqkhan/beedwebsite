import React from "react";
import LoginComponent from "../components/loginpageComponent";
import Layout from "../components/layout";
import SEO from "../components/seo";
const loginPage = () => {
    return (
        <div className="main-login-page">
            <SEO title="Login"/>
            <Layout>
                <LoginComponent/>
            </Layout>
        </div>

    )
}
export default loginPage