module.exports = {
  pathPrefix: "/new-website",
  siteMetadata: {
    title: `Ryan O'Connor`,
    author: {
      name: `Ryan O'Connor`,
      summary: `New York`,
    },
    description: `Developer - Designer - Media`,
    siteUrl: `https://ryanoconnor.dev`,
    social: {
      twitter: `ryan7oconnor`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `@pauliescanlon/gatsby-remark-sticky-table`,
          {resolve: "gatsby-remark-custom-blocks",
          options: {
            blocks: {
              danger: {
                classes: "danger",
              },
              img25: {
                classes: "img25",
                title: "optional"
              },
            },
          },}
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryan O'Connor`,
        short_name: `Ryan O'Connor`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/SiteLogo.png`
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-react-helmet`,
      'gatsby-plugin-debug-build',
    
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
