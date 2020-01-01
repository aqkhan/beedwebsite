import React from "react";
import LoginComponent from "../components/loginpageComponent";
import Layout from "../components/layout";
const loginPage = () => {
    return (
        <div className="main-login-page">
            <Layout>
                <LoginComponent/>
            </Layout>
        </div>

    )
}
export default loginPage