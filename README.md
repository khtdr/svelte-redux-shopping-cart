[![Greenkeeper badge](https://badges.greenkeeper.io/khtdr/svelte-redux-shopping-cart.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/khtdr/svelte-redux-shopping-cart.svg?branch=master)](https://travis-ci.org/khtdr/svelte-redux-shopping-cart)
[![Dependency Status](https://david-dm.org/khtdr/svelte-redux-shopping-cart/master.svg)](https://david-dm.org/khtdr/svelte-redux-shopping-cart/master)
[![devDependency Status](https://david-dm.org/khtdr/svelte-redux-shopping-cart/master/dev-status.svg)](https://david-dm.org/khtdr/svelte-redux-shopping-cart/master#type=dev)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkhtdr%2Fsvelte-redux-shopping-cart.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkhtdr%2Fsvelte-redux-shopping-cart?ref=badge_shield)

This is a port of the [Redux Shopping Cart](https://github.com/reactjs/redux/tree/master/examples/shopping-cart/) example to [Svelte](https://svelte.technology/).  The bindings between Svelte and Redux are provided by the [svelte-redux](https://github.com/UnwrittenFun/svelte-redux) package.  The bundle is build with [Webpack](https://webpack.js.org/) and is configured with hot-reloading available.

### Getting Started

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

Tests
cypress/integration/

Server Doc Root
public/

  - Entry point \
[src/index.js](https://github.com/khtdr/svelte-redux-shopping-cart/blob/master/src/index.js)
  - Mock API Wrapper
[src/api](https://github.com/khtdr/svelte-redux-shopping-cart/blob/master/src/api)
  - Components

[src/components/*.html](https://github.com/khtdr/svelte-redux-shopping-cart/blob/master/src/components)

Containers
src/layouts:

Redux Impl.
src/redux:
actions
constants
reducers
store.js

