> Current Svelte is `@v3`, but this example repo uses `Svelte@v2`

**You, yes you, should fork this repo, upgrade the Svelte dependendies to `v3`,
and submit a PR!**

<br clear="all" />
<br clear="all" />

[![Greenkeeper badge](https://badges.greenkeeper.io/khtdr/svelte-redux-shopping-cart.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/khtdr/svelte-redux-shopping-cart.svg?branch=master)](https://travis-ci.org/khtdr/svelte-redux-shopping-cart)
[![Dependency Status](https://david-dm.org/khtdr/svelte-redux-shopping-cart/master.svg)](https://david-dm.org/khtdr/svelte-redux-shopping-cart/master)
[![devDependency Status](https://david-dm.org/khtdr/svelte-redux-shopping-cart/master/dev-status.svg)](https://david-dm.org/khtdr/svelte-redux-shopping-cart/master#type=dev)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkhtdr%2Fsvelte-redux-shopping-cart.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkhtdr%2Fsvelte-redux-shopping-cart?ref=badge_shield)

<img align="right" width="500" src="https://raw.githubusercontent.com/khtdr/svelte-redux-shopping-cart/master/screenshot.png" style="max-width:100%;margin:20px" />

A port of the [Redux Shopping Cart](https://github.com/reactjs/redux/tree/master/examples/shopping-cart/) example, from [React](https://reactjs.org/) to [Svelte](https://svelte.technology/).  The bindings between Svelte and Redux are provided by the [svelte-redux](https://github.com/UnwrittenFun/svelte-redux) package.  The bundle is built with [Webpack](https://webpack.js.org/) and is configured with hot-reloading enabled in development.

<br clear="all" />

### Getting Started

  1. Clone the repo
  2. Install dependencies
  3. Start the server

```bash
git clone git@github.com:khtdr/svelte-redux-shopping-cart.git
cd ./svelte-redux-shopping-cart && yarn
yarn start
```

Or with [degit](https://github.com/Rich-Harris/degit)

```bash
degit khtdr/svelte-redux-shopping-cart your-project
cd ./your-project && yarn
yarn start
```

Open: <code>[http://localhost:8080](http://localhost:8080)</code>

:question: If port 8080 is taken, find and change the port number in `package.json`:
```json
  "start": "http-server public -p 8080 -o"
```

If you want to run tests on a different port, fix accordingly:
```bash
grep -ir 8080 * | grep -v node_modules
```

### Development and Testing

To enable hot-reloading, stop the server and run:
```bash
yarn run dev
```

Or to enable hot-reloading and open the Cypress test suite:
```bash
yarn run test
```

Open your browser to <code>[http://localhost:8080](http://localhost:8080)</code>. Edit source files and the page will update.

#### Source Code Structure

* <code>[public/](https://github.com/khtdr/svelte-redux-shopping-cart/blob/master/public)</code> Server Doc Root
* <code>[src/index.js](https://github.com/khtdr/svelte-redux-shopping-cart/blob/master/src/index.js)</code> Entry point
* <code>[src/api/](https://github.com/khtdr/svelte-redux-shopping-cart/blob/master/src/api)</code> Mock API Wrapper
* <code>[src/components/](https://github.com/khtdr/svelte-redux-shopping-cart/blob/master/src/components)</code> "Pure" Components
* <code>[src/layouts/](https://github.com/khtdr/svelte-redux-shopping-cart/blob/master/src/layouts)</code> "Container" Components
* <code>[src/redux/](https://github.com/khtdr/svelte-redux-shopping-cart/blob/master/src/redux)</code> Redux Implementation
    - <code>[src/redux/actions/](https://github.com/khtdr/svelte-redux-shopping-cart/blob/master/src/redux/actions)</code>
    - <code>[src/redux/constants/](https://github.com/khtdr/svelte-redux-shopping-cart/blob/master/src/redux/constants)</code>
    - <code>[src/redux/reducers/](https://github.com/khtdr/svelte-redux-shopping-cart/blob/master/src/redux/reducers)</code>
    - <code>[src/redux/store.js](https://github.com/khtdr/svelte-redux-shopping-cart/blob/master/src/redux/store.js)</code>
* <code>[cypress/integration/](https://github.com/khtdr/svelte-redux-shopping-cart/blob/master/cypress/integration)</code> Cypress.io Tests
