# acim.iamalexbrady.com

## Install
1. Clone/download repo
2. `yarn install`
3. `cd docs && bundle install`

## Usage
**Development** (local)

Open 3 terminals and run the following commands (run in parallel).

1. `yarn run jekyll-dev` - Generates site on changes to `/public`.
2. `yarn run watch-assets` - Compiles SASS and images on changes to `/public/assets`.
3. `yarn run browser-sync` - Starts web server hosting content from `/public` at `http://localhost:3000` and injects changes.

Your site is now available at **`http://localhost:3000`**

**Production**

1. `yarn run build-assets` - Cleans, builds and minifies assets to `/docs/assets`.
2. Push changes to GitHub

### Open-Source

Public alexbrady material is provided under the [alexbrady license](https://github.com/iamalexbrady/iamalexbrady.github.io/blob/master/docs/_pages/alexbrady_license.md).

alexbrady material not provided under the alexbrady license are listed below with the appropriate intellectual property claims:

* 

All material originally copywritten or licensed by a 3rd party are subject said party's intellectual property claims, and are provided for educational purposes only. We take care to ensure the license is listed with the material. Please refer to the licenses provided.

**The Software**

The iamalexbrady.github.io software is provided at [this repository.](https://github.com/iamalexbrady/iamalexbrady.github.io) Contributions are welcome.

[Pull Request Template](https://github.com/iamalexbrady/iamalexbrady.github.io/blob/master/docs/_pages/pr_template.md)

* **GitHub Pages ready**
* **Fast site generation** - Jekyll
* **Fast SCSS compilations** - Gulp task compiles SCSS to CSS
* **Live reload** - Changes are instantly injected into the browser
* **Asset pipline** - CSS is minified and images are loselessy compressed

<!-- ## See also
* [Gatsby](https://github.com/gatsbyjs/gatsby) - Build blazing fast, modern apps and websites with React
* [Next.js](https://github.com/zeit/next.js) - React based framework with server side rendering (SSR)
 -->
