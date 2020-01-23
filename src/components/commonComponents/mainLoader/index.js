import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
    <div className="main-loader-div container">
    <ContentLoader
        height={400}
        width={470}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
    >
        <rect x="17" y="62" rx="5" ry="5" width="243" height="243"/>
        <rect x="273" y="70" rx="0" ry="0" width="87" height="11"/>
        <rect x="273" y="88" rx="0" ry="0" width="47" height="4"/>
        <rect x="274" y="101" rx="0" ry="0" width="71" height="5"/>
        <rect x="274" y="155" rx="0" ry="0" width="102" height="26"/>
        <rect x="275" y="140" rx="0" ry="0" width="84" height="5"/>
        <rect x="276" y="200" rx="0" ry="0" width="82" height="6"/>
        <rect x="276" y="217" rx="0" ry="0" width="100" height="23"/>
        <rect x="279" y="261" rx="0" ry="0" width="87" height="27"/>
        <rect x="407" y="156" rx="0" ry="0" width="107" height="24"/>
        <rect x="407" y="216" rx="0" ry="0" width="106" height="24"/>
        <rect x="407" y="140" rx="0" ry="0" width="71" height="4"/>
        <rect x="408" y="199" rx="0" ry="0" width="71" height="5"/>
    </ContentLoader>
    </div>
)

export default MyLoader