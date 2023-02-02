/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  "version-7.x": [
    {
      type: "doc",
      id: "introduction",
      label: " 📖 Introduction",
    },
    {
      type: "category",
      label: "Protocol",
      items: [
        "protocol/live-demo",
        "protocol/docker",
        "protocol/docker-compose",
        "protocol/kubernetes",
        "protocol/cloud-run",
      ],
    },
    {
      type: "category",
      label: "Modules",
      items: [
        "modules/api",
        "modules/chromium",
        "modules/libreoffice",
        "modules/webhook",
        "modules/prometheus",
        "modules/logging",
        "modules/more",
      ],
    },
    {
      type: "category",
      label: "Customize",
      items: [
        "customize/ownership",
        "customize/fonts",
        "customize/add-modules",
      ],
    },
    {
      type: "link",
      label: "Awesome",
      href: "https://github.com/gotenberg/awesome-gotenberg",
    },
  ],
};
