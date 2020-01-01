import React from "react";
import Layout from "../components/layout/index"
import SEO from "../components/seo";
import Contact from "../components/contactus";

function ContactUs() {
    return (
        <Layout>
            <SEO title="Contact Us"/>
            <Contact/>
        </Layout>
    )
}

export default ContactUs;