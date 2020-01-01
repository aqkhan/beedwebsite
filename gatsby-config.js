
module.exports = {
    siteMetadata: {
        title: `Trap house connection`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                // icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        "gatsby-plugin-mdx",
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/products`,
            },
        },
        // {
        //     resolve: "gatsby-source-graphql",
        //     options: {
        //         typeName: "query",
        //         fieldName: "query",
        //         url: "https://vft2h7l6zrbudbynw462k2ndnu.appsync-api.us-east-1.amazonaws.com/graphql",
        //         // HTTP headers
        //
        //
        //     },
        // },

    ],

}
