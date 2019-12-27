module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
      //     resolve: 'gatsby-plugin-apollo',
      //     options: {
      //         uri: 'https://vft2h7l6zrbudbynw462k2ndnu.appsync-api.us-east-1.amazonaws.com/graphql'
      //     },
      //     headers: {
      //         authorization: "eyJraWQiOiIybVdpaFdjYVBtUnJHVUVab1Y1bFE3MkpOczgwXC94Q1FrOWhzSDdlZmxaQT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxOTYxNWYyZC1jOWM1LTQzODAtYTMwMy1lNzVkODg3Zjc5ZDQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1VXUmVHNEpSZiIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiJhc3NhZCIsImF1ZCI6IjdjdnFvdG1mcDA2NWd2aGludTB0djRvMTR2IiwiZXZlbnRfaWQiOiJkZTRmNjUzYy00OGQ4LTRjNzAtYjNlYi0zZWU2YjdlNTAwNmYiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU3NzQ1NDcwNSwicGhvbmVfbnVtYmVyIjoiKzkyMzQyOTQ2MTIzNCIsImV4cCI6MTU3NzQ1ODMwNSwiaWF0IjoxNTc3NDU0NzA1LCJjdXN0b206c3RvcmUiOiIxMjM0NSIsImVtYWlsIjoiYXNzYWRAaWludGVsbGVjdC5jby51ayJ9.Y8uimtnUhPvntbPgWn0-OVlPQ4kLMVd260x0qygwDCkN0InFYsQubwXX8HPWRDCj7i_H1--FTWF58kHlaRqH95FQqf29tPB6aUp6PQjwEj7T9C_S1Kkv-NPRLt52SuTasQTMh1PYx5y81gl90Ej9bUpVTVHEoY6_sElB_IO1y-QPYY3D4gkv5UiSsppStjxIJ5fDMli31cMl59YknIHRaoJL9rdW5-vhWCIISGpuagf82Lm8Io4EQqpZeOWEmNNgljWwiyvFrlRX8a-GkhGwQG3hEfNPboH-7ieggDs5426Nq7UJdXnwyGJdbPPM8QqyP2w6JR47LHNa9qvA4hQx4g", //Your Auth token extraction logic
      //     },
      // }

  ],

}
