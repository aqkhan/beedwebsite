import React, {useState, useEffect} from "react";
import LoginComponent from "../components/loginpageComponent";
import Layout from "../components/layout";
import Loader from "../components/loader"
const loginPage = () => {
    // const [showloader, setshowloader] = useState(false)

    // useEffect(() => {
    //
    //     setshowloader(true);
    //     setTimeout(() => {
    //         setshowloader(false)
    //     }, 1000)
    // }, [])

    return  (
        <div className="main-login-page">
            <Layout>
                <LoginComponent/>
            </Layout>
        </div>

    )
}
export default loginPage