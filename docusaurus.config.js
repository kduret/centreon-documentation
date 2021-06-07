/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
const path = require('path');
const versions = require('./versions.json');
const math = require('remark-math');
const katex = require('rehype-katex');

// This probably only makes sense for the beta phase, temporary
function getNextBetaVersionName() {
  const expectedPrefix = '21.10';

  const lastReleasedVersion = versions[0];
  if (!lastReleasedVersion.includes(expectedPrefix)) {
    throw new Error(
      'this code is only meant to be used during the 2.0 beta phase.',
    );
  }
  const version = parseInt(lastReleasedVersion.replace(expectedPrefix, ''), 10);
  return `${expectedPrefix}${version + 1}`;
}
*/

const isDev = process.env.NODE_ENV === 'development';

const baseUrl = process.env.BASE_URL || '/';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Centreon',
  tagline: 'Documentation',
  //organizationName: 'centreon',
  //projectName: 'centreon',
  //baseUrl,
  baseUrlIssueBanner: true,
  //url: 'https://centreon.com',
  url: 'https://kduret.github.io', // Your website URL
  baseUrl: '/',
  projectName: 'kduret.github.io',
  organizationName: 'kduret',
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  //onBrokenLinks: 'throw',
  //onBrokenMarkdownLinks: 'warn',
  favicon: 'img/docusaurus.ico',
  customFields: {
    description:
      'An optimized site generator in React. Docusaurus helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more.',
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
  ],
  presets: [
    [
      'redocusaurus',
      {
        specs: [
          {
            specUrl: 'https://raw.githubusercontent.com/centreon/centreon/master/doc/API/centreon-api-v2.1.yaml',
            routePath: '/centreon-web/',
          },
        ],
      }
    ],
    [
      '@docusaurus/preset-classic',
      {
        debug: true, // force debug plugin usage
        docs: {
          // routeBasePath: '/',
          //path: 'versioned-docs/',
          sidebarPath: 'sidebars.js',
          //lastVersion: '21.10',
          versions: {
            /*
            current: {
              label: "21.10",
              path: "21.10"
              //contentPath: "toto",
              //path: "i18n/en/docusaurus-plugin-content-docs/docs/"
            },
            */
            /*
            "21.04": {
              label: "21.04",
              //path: "toto"
            },
            */
          },
        },
      },
    ],
  ],
  themeConfig: {
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'v1-new-domain',
      content:
        '⭐️ Centreon 21.04.0 is now available ! Checkout the <a target="_blank" rel="noopener noreferrer" href="https://demo.centreon.com">demo</a> ⭐️',
    },
    image: 'img/docusaurus-soc.png',
    // metadatas: [{name: 'twitter:card', content: 'summary'}],
    gtag: {
      trackingID: 'UA-141789564-1',
    },
    algolia: {
      apiKey: '47ecd3b21be71c5822571b9f59e52544',
      indexName: 'dev_centreon_kduret',
      contextualSearch: true,
    },
    navbar: {
      hideOnScroll: true,
      title: 'Centreon',
      logo: {
        alt: 'Centreon Logo',
        src: 'https://docs.centreon.com/current/en/img/logo-centreon.png',
        srcDark: 'https://docs.centreon.com/current/en/img/logo-centreon.png',
        href: 'https://centreon.com/',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'introduction',
          label: 'Docs',
        },
        {
          to: '/centreon-web',
          position: 'left',
          label: 'API',
        },
        // right
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: 'https://docs.centreon.com/older/',
              label: 'Older',
            },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Introduction',
              to: 'docs',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
    },
  },
});
