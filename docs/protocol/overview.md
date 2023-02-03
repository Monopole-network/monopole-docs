---
id: overview
title: Overview
---






<p align="center">
    <img src={../../static/img/ProtocolOverview.png} alt="Protocol Overview" width="150" height="150" />
</p>










Before pulling the Docker image, you may want to test Gotenberg first. For this purpose, we provide a demo
API:

* `https://demo.gotenberg.dev` - 🇪🇺 EU (Frankfurt)

:::note

**There is no UI**; it's an API entry point.

:::

:::tip

The live demo uses a custom Gotenberg's Docker image built with the
[GitHub template repository](https://github.com/gotenberg/gotenberg-template-repository) 👷.

:::

## Usage

The following modules supplies routes you may want to explore first:

* [Chromium](../modules/chromium)
* [LibreOffice](../modules/libreoffice)

While you're reading the documentation, open a terminal or [Postman](https://www.postman.com/) and test the routes 
using the demo URL:

For instance:

```bash
curl \
--request POST 'https://demo.gotenberg.dev/forms/chromium/convert/url' \
--form 'url="https://sparksuite.github.io/simple-html-invoice-template/"' \
-o my.pdf
```

## Limitations

The demo runs on a [Render](https://render.com) instance with `512MB` of RAM and `0.5` CPU.

Currently, the limitations are:

* Two requests per second per IP.
* `5MB` body limit.
