import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
    <div className="card-loader">
        <ContentLoader
            height={70}
            width={35}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
        >
            <rect x="0" y="7" rx="0" ry="0" width="33" height="32"/>
            <rect x="0" y="43" rx="0" ry="0" width="30" height="2"/>
            <rect x="0" y="47" rx="0" ry="0" width="20" height="2"/>
            <rect x="0" y="51" rx="0" ry="0" width="20" height="2"/>
        </ContentLoader>
    </div>
)

export default MyLoader