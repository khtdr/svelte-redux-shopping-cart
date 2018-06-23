[![Greenkeeper badge](https://badges.greenkeeper.io/khtdr/svelte-redux-shopping-cart.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/khtdr/svelte-redux-shopping-cart.svg?branch=master)](https://travis-ci.org/khtdr/svelte-redux-shopping-cart)
[![Dependency Status](https://david-dm.org/khtdr/svelte-redux-shopping-cart/master.svg)](https://david-dm.org/khtdr/svelte-redux-shopping-cart/master)
[![devDependency Status](https://david-dm.org/khtdr/svelte-redux-shopping-cart/master/dev-status.svg)](https://david-dm.org/khtdr/svelte-redux-shopping-cart/master#type=dev)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkhtdr%2Fsvelte-redux-shopping-cart.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkhtdr%2Fsvelte-redux-shopping-cart?ref=badge_shield)

This is a port of the [Redux Shopping Cart](https://github.com/reactjs/redux/tree/master/examples/shopping-cart/) example to [Svelte](https://svelte.technology/).  The bindings between Svelte and Redux are provided by the [svelte-redux](https://github.com/UnwrittenFun/svelte-redux) package.  The bundle is build with [Webpack](https://webpack.js.org/) and is configured with hot-reloading available.

### Getting Started

<img src="https://raw.githubusercontent.com/khtdr/svelte-redux-shopping-cart/master/sreenshot.png" style="float:left; display:block;max-width:100%;height:auto;width:250px;" />

  1. Clone the repo
  2. Install dependencies
  3. Start the server

```bash
git clone git@github.com:khtdr/svelte-redux-shopping-cart.git
cd ./svelte-redux-shopping-cart && yarn
yarn start
```
Open: `http://localhost:8080`

:question: If port 8080 is taken, find and change the port number in `package.json`:
```
  "start": "http-server public -p 8080 -o"
```

![App Screenshot](https://raw.githubusercontent.com/khtdr/svelte-redux-shopping-cart/master/sreenshot.png)

### Development and Testing

To enable hot-reloading:
```
yarn run dev
```

To enable hot-reloading and open Cypress tests:
```
yarn run test
```

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
