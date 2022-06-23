/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `keySpace`,
    siteUrl: `https://keytrain.github.io/keyspace`,
    description: `words`,
  },
  pathPrefix: "/keyspace",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md`,
        path: `${__dirname}/src/md`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-smartypants`],
      },
    },
  ],
}
