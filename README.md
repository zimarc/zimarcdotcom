

```
npm run build
```
Copy the content of the ``public`` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in ``config/website.js``:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  siteTitle: 'Emma', // Navigation and Site Title
  siteTitleAlt: 'Emma - Gatsby Starter Portfolio', // Alternative Site title for SEO
  siteUrl: 'https://portfolio-emma.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Minimalistic bright portfolio with full-width grid and large images',
  author: 'LekoArts', // Author for schemaORGJSONLD
  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@emma', // Twitter Username
  ogSiteName: 'emma', // Facebook Site Name
  ogLanguage: 'en_US',
  googleAnalyticsID: 'UA-12345689-1',
  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
  // Settings for typography.jsx
  headerFontFamily: 'Merriweather',
  bodyFontFamily: 'Roboto',
  baseFontSize: '16px',
};
```

You can also configure the styling of the site by editing the theme variables in ``config/theme.js``. `overlay` are the colors that get randomly selected for the Index page and the project detail view.

```JS
import { darken } from 'polished';

const brand = {
  primary: '#cf1993',
  secondary: '#7b8acc',
};

const colors = {
  grey: '#25252',
  black: '#000',
  bg_color: '#f3f3f3',
  body_color: '#222',
  link_color: brand.primary,
  link_color_hover: `${darken(0.15, brand.primary)}`,
};

export const overlay = ['#f76262', '#216583', '#65c0ba', '#35477d', '#6c5b7b', '#203541', '#9951ff', '#480032'];

const theme = {
  brand,
  colors,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
};

export default theme;

```

**Attention:** You also need to edit ``static/robots.txt`` to include your domain!

imarc.com

Getting Started
npm run dev
npm run build

git help:
git config --global user.email "email@example.com"

git status
git add -A
git commit -m "[commit message]"
git push -u origin [branch name or master by defult]

https://github.com/joshnh/Git-Commands
