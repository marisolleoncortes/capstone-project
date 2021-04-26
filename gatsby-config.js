module.exports = {
  siteMetadata: {
    title: "Stay Fresh",
    siteUrl: "https://nifty-leakey-b9b73e.netlify.app",
    titleTemplate: "%s - Stay Fresh",
    description:
      "Need fruits & vegetables? We deliver to your doorstep!",
    url: "https://nifty-leakey-b9b73e.netlify.app", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@stayfresh",
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
