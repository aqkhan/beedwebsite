import React, {useState, useEffect} from "react";
import LoginComponent from "../components/loginpageComponent";
import Layout from "../components/layout";
import Loader from "../components/loader"
const loginPage = () => {


    useEffect(() => {
        const [showloader, setshowloader] = useState(false)
        setshowloader(true);
        setTimeout(() => {
            setshowloader(false)
        }, 1000)
    }, [])
    return !showloader ? (
        <div className="main-login-page">
            <Layout>
                <LoginComponent/>
            </Layout>
        </div>

    ) : <Loader/>
}
export default loginPage