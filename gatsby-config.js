module.exports = {
  siteMetadata: {
    title: "Stay Fresh",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "12XKJTcGwRLqZtL4J-lrOiz0qVBcl6VEyXTO0Hm_eXQ",
        spaceId: "4yl7w504wmhg",
      },
    },
    
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "12345",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
