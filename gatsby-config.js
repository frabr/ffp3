
const feedOptions = {
  title: "FFP3",
  description: "Podcast d'entretiens politiques",
  feed_url: "https://ffp3.live/rss.xml",
  site_url: "https://ffp3.live",
  image_url: "https://ffp3.live/ffp3-white.png",
  docs: "http://ffp3.live/rss/docs.html",
  managingEditor: "FFP3",
  webMaster: "FAT77",
  copyright: "2019 FFP3",
  language: "fr",
  categories: ["politics"],
  pubDate: "May 20, 2019 04:00:00 GMT",
  ttl: "60",
  custom_namespaces: {
    itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
  },
  custom_elements: [
    { "itunes:subtitle": "Podcast d'entretiens politiques" },
    { "itunes:author": "FFP3" },
    {
      "itunes:summary":
      "Podcast d'entretiens avec celles et ceux qui, à travers le monde, restent malgré les gaz.",
    },
    {
      "itunes:owner": [
        { "itunes:name": "FFP3" },
        { "itunes:email": "brault.fra@gmail.com" },
      ],
    },
    {
      "itunes:explicit": "no",
    },
    {
      "itunes:image": {
        _attr: {
          href: "https://ffp3.live/ffp3-big.png",
        },
      },
    },
    {
      "itunes:category": [
        {
          _attr: {
            text: "Politics",
          },
        },
        {
          "itunes:category": {
            _attr: {
              text: "Gadgets",
            },
          },
        },
      ],
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: `ffp3`,
    description: `Podcast d'entretiens politiques.`,
    author: `frabr`,
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
        icon: `src/images/ffp3-white-stretch.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`, // Rajouté pour Bulma
    {
      resolve: `gatsby-source-filesystem`, // Rajouté pour le markdown
      options: {
        name: `markdown`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    // Pour le feed RSS
    {
      resolve: `gatsby-plugin-podcast-feed`,
      options: {
        feedOptions,
      },
    },
    // Pour les fonts google
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lora"],
        },
      },
    },
  ],
}
