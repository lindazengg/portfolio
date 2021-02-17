/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
	plugins: [
	  `gatsby-plugin-sass`,
	  {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
	  {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
                resolve: `gatsby-plugin-google-fonts`,
                options: {
                    fonts: [
                        `poppins:300,400,500,600,700`
                    ], display: 'swap'
                }
            }
  ],
	pathPrefix: "/portfolio"
}
