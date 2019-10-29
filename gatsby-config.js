const feedOptions = {
  title: "title",
  description: "description",
  feed_url: "http://example.com/rss.xml",
  site_url: "http://example.com",
  image_url: "http://example.com/icon.png",
  docs: "http://example.com/rss/docs.html",
  managingEditor: "Dylan Greene",
  webMaster: "Dylan Greene",
  copyright: "2013 Dylan Greene",
  language: "en",
  categories: ["politics", "pouloulou"],
  pubDate: "May 20, 2019 04:00:00 GMT",
  ttl: "60",
  custom_namespaces: {
    itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
  },
  custom_elements: [
    { "itunes:subtitle": "A show about everything" },
    { "itunes:author": "John Doe" },
    {
      "itunes:summary":
        "All About Everything is a show about everything. Each week we dive into any subject known to man and talk about it as much as we can. Look for our podcast in the Podcasts app or in the iTunes Store",
    },
    {
      "itunes:owner": [
        { "itunes:name": "John Doe" },
        { "itunes:email": "john.doe@example.com" },
      ],
    },
    {
      "itunes:image": {
        _attr: {
          href: "http://example.com/podcasts/everything/AllAboutEverything.jpg",
        },
      },
    },
    {
      "itunes:category": [
        {
          _attr: {
            text: "Technology",
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
    description: `Podcast d'entretiens avec celles et ceux qui, à travers le monde, restent malgré les gaz.`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
