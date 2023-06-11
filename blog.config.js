const BLOG = {
  title: 'sowwn',
  author: 'Sho',
  email: 'hoangson.vothanh@gmail.com',
  link: 'sowwn.dev',
  description: 'On the road become a data scienctist',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Bangkok', // Your Notion posts' date will be interpreted as this timezone. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: 'light', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#fffefc', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#18181B', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2022, // If leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: true,
  showAbout: true,
  showArchive: false,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://lh3.googleusercontent.com/pw/AJFCJaWoGA0m1zqboIy3nPsOmR5Gv3SUao57xchATINDz99sX0unxHX3R-I67DCHWPVeoKmiXHY8IC2fNdkCTAES-8fMrOK5y7fGaHm-pJTQid0Mk91yi7TIY2L4GcGIKOA2TnR9urqbLcVxWRO6FQht4QNu=w1390-h1390-s-no?authuser=0', // The link to generate OG image, don't end with a slash
  socialLink: 'https://www.facebook.com/rc.sho0',
  seo: {
    keywords: ['Blog', 'sowwn', 'Website', 'Notion','Hoàng Sơn','AI Engineer','Brain Tumor Segmentation', 'Hoang Son-Vo Thanh'],
    googleSiteVerification: 'Fhnfx7nkN-8Gb5VWT9Wi0A_jto1QPulr6U7LK0' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: '', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: '', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
