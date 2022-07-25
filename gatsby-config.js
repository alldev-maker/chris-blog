const { prismicRepo } = require("./prismic-configuration")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Chris Terrel Jones`,
    description: `Chris Terrel Jones Blogs`,
    author: `Chris`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        },
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Merriweather\:400,700,900`,
          `Allerta Stencil\:400`,
          `Coustard\:400`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: prismicRepo,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: require("./src/utils/linkResolver").linkResolver,
        schemas: {
          blog_post: require("./custom_types/blog_post.json"),
          about_me: require("./custom_types/about_me.json"),
          faqs: require("./custom_types/faqs.json"),
          category: require("./custom_types/category.json"),
          social_media: require("./custom_types/social_media.json"),
        },
      },
    },
  ],
}
