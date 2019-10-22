const config = {
  siteTitle: "Rikus Wiehahn's Rantings", // Site title.
  siteTitleShort: "Rikus' Rants", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Rants by Rikus Wiehahn", // Alternative site title for SEO.
  siteLogo: "/images/favicon.png", // Logo used for SEO and manifest.
  siteUrl: "https://rikuswiehahn.com", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-advanced-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A place where I can put all my ideas out there.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Rikus Wiehahn", // Username to display in the author segment.
  userEmail: "rikus@zeltta.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Hamilton, New Zealand", // User location to display in the author segment.
  userAvatar: "/images/mugshot.jpg", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/RikusWiehahn",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/RikusWiehahn",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:rikus@zeltta.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: `Copyright ©${new Date().getFullYear()}  Rikus Wiehahn`, // Copyright string for the footer of the website and RSS feed.
  themeColor: "#000", // Used for setting manifest and progress theme colors.
  backgroundColor: "#efefef" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
