# Deathwing

> Pain... Agony.... My hatred burns through the cavernous deeps. The world heaves with my torment. Its wretched kingdoms quake beneath my rage... But at last... The whole of Azeroth will break... ...And all will burn beneath the shadow of my wings...

-- *[Deathwing the Destroyer](http://wowwiki.wikia.com/wiki/Deathwing)*

**Deathwing** is a small project developed to be used as a living guide or reference on how to build a single web application over [React](https://facebook.github.io/react/) + [Redux](http://redux.js.org/) technologies, and is hosted as a [SAAS](https://en.wikipedia.org/wiki/Software_as_a_service) where any agile team can use the actual retrospective application tool for their projects.

## Architecture

### Application Structure
    .
    ├── app
    │   ├── actions
    │   ├── components
    │   ├── containers
    │   ├── reducers
    │   ├── styles
    │   └── utils
    ├── build
    │   └── reports
    └── tests
        ├── actions
        ├── reducers
        └── utils

### Component Structure
    .
    ├── Component
    │   ├── Component.js
    │   ├── Component.scss
    │   └── Component.spec.js
    └── index.js

## Technologies
// TODO Description

### React
[React](https://facebook.github.io/react/) is a JavaScript library for building user interfaces, is the V in the MVC architecture. React uses [Virtual DOM](https://facebook.github.io/react/docs/glossary.html) to abstract the DOM away from the user and give better performance to your applications, and implements a one way data flow which is easier to reason about than traditional data binding.

### Redux
[Redux](https://github.com/reactjs/redux) is a predictable state container for JavaScript applications that helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as [live code editing combined with a time traveling debugger](https://github.com/gaearon/redux-devtools).

## Tools
// TODO Description

### Webpack
[Webpack](https://webpack.github.io/) is a module bundler that brings a lot of exiting features like [Code Splitting](http://webpack.github.io/docs/code-splitting.html) allowing you to load modules on demand, [Loaders](http://webpack.github.io/docs/loaders.html) for easy transformations and tool integration into your workflow, and integrates a powerful plugin system that allows you to customize webpack for your needs and distribute common plugins as open source.

### Babel
// TODO Description

### Mocha + Expect + Enzyme
[Mocha](https://mochajs.org/) is the TDD framework that provides the base of the Deathwing's TDD workflow, allowing you to run asynchronous tests with a simple and easy to read reporting interface.

[Expect](https://github.com/mjackson/expect) is an awesome assertion library that let you write assertions in a simple and natural language like "I expect this value to be equal to 3" or "I expect this array to contain 3".

[Enzyme](https://github.com/airbnb/enzyme) is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output while using a intuitive and flexible API similar to jQuery's API for DOM manipulation and traversal.

### ESLint
// TODO Description

## Services
// TODO Description

### Auth0
// TODO Description

### Firebase
// TODO Description
