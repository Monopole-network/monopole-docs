const lightCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Monopole",
  tagline:
    "The first global solution matching investors and projects for Impact Leveraging Blockchain technology with full transparency and decentralization",
  trailingSlash: false,
  url: "https://docs.monopole.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "monopole-network",
  projectName: "monopole-docs",
  themeConfig: {
    algolia: {
      appId: "JP2Q0HN2DE",
      apiKey: "67f1a7e15197ecf88d4c85f39a2e1789",
      indexName: "gotenberg",
      contextualSearch: true,
    },
    announcementBar: {
      id: "support_us",
      content: `⭐️  &nbsp; Join our 15,000+ community members on  <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/5CKjNHF3es">Discord</a>! &nbsp; ⭐️`,
    },
    navbar: {
      title: "Monopole Docs",
      logo: {
        alt: "Monopole Logo",
        src: "img/logo.png",
      },
      hideOnScroll: false,
      items: [
        {
          type: "doc",
          label: "Documentation",
          docId: "introduction",
        },
        {
          type: "search",
          position: "right",
        },
        {
          label: "Version 0.x",
          to: "/docs/0.x/introduction",
          position: "right",
        },
        {
          href: "https://discord.gg/5CKjNHF3es",
          label: "Help",
          position: "right",
        },
        {
          href: "https://github.com/Monopole-network",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Monopole Logo",
        src: "img/logo.png",
        href: "https://github.com/Monopole-network",
      },
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Protocol",
              to: "/docs/protocol/live-demo",
            },
            {
              label: "Modules",
              to: "/docs/modules/api",
            },
            {
              label: "Customize",
              to: "/docs/customize/ownership",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Follow @monopole_mnpl on twitter",
              href: "https://twitter.com/monopole_mnpl",
            },
            {
              label: "Help",
              href: "https://discord.gg/5CKjNHF3es",
            },
            {
              label: "GitHub",
              href: "https://github.com/Monopole-network",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Landing Page",
              href: "https://monopole.network/",
            },
            {
              label: "Web App",
              href: "https://app.monopole.network/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Monopole.<br /> `, //Built with <a href="https://docusaurus.io" target="_blank">Docusaurus</a>.
    },
    prism: {
      theme: lightCodeTheme,
      additionalLanguages: ["solidity", "php", "csharp", "powershell"],
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/Monopole-network/monopole-docs/edit/main/",
          lastVersion: "current",
          versions: {
            current: {
              label: "1.x",
              path: "",
            },
            "0.x": {
              label: "0.x",
              path: "0.x",
              banner: "unmaintained",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-Q1MDM8KFVG",
        },
      },
    ],
  ],
  plugins: ["@docusaurus/plugin-ideal-image"],
};
