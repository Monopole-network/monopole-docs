/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  "version-1.x": [
    {
      type: "doc",
      id: "introduction",
      label: " 🍻 Introduction",
    },
    {
      type: "category",
      label: " 🧬 The Protocol",
      items: ["protocol/overview", "protocol/crosschain", "protocol/fees"],
    },
    {
      type: "category",
      label: " 📝 Smart Contracts",
      items: ["smart-contracts/overview", "smart-contracts/deployments"],
    },
    {
      type: "category",
      label: " ⚙️ API",
      items: ["api/overview", "api/metadata"],
    },
    {
      type: "doc",
      id: "links",
      label: " 🖇 Links",
    },
    {
      type: "link",
      label: "GitHub",
      href: "https://github.com/Monopole-Network/",
    },
    {
      type: "link",
      label: "Twitter",
      href: "https://twitter.com/monopole_mnpl",
    },
    {
      type: "link",
      label: "Discord",
      href: "https://discord.gg/5CKjNHF3es",
    },
  ],
};
