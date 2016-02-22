# Deathwing

> Pain... Agony.... My hatred burns through the cavernous deeps. The world heaves with my torment. Its wretched kingdoms quake beneath my rage... But at last... The whole of Azeroth will break... ...And all will burn beneath the shadow of my wings...

-- *[Deathwing the Destroyer](http://wowwiki.wikia.com/wiki/Deathwing)*

**Deathwing** is a small project developed to be used as a living guide or reference on how to build a single web application over [React](https://facebook.github.io/react/) + [Redux](http://redux.js.org/) technologies, and hosted as a [SAAS](https://en.wikipedia.org/wiki/Software_as_a_service) where any agile team can use the actual retrospective application tool for their own projects completely free.

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

### SASS
[SASS](http://sass-lang.com/) is a mature and heavily use CSS preprocessor with lots of capabilities in terms of CSS construction, scalability, and management. Completely compatible with all versions of CSS, SASS allows the developer write with a familiar syntax if you use the latest version of the language and the SCSS file extension.

## Tools
// TODO Description

### Webpack
[Webpack](https://webpack.github.io/) is a module bundler that brings a lot of exiting features like [Code Splitting](http://webpack.github.io/docs/code-splitting.html) allowing you to load modules on demand, [Loaders](http://webpack.github.io/docs/loaders.html) for easy transformations and tool integration into your workflow, and integrates a powerful plugin system that allows you to customize webpack for your needs and distribute common plugins as open source.

### Babel
Babel is a transpiler for JavaScript best known for its ability to turn ECMAScript 2015 into code that runs in your browser or on your server today, it has support for the latest version of JavaScript, JSX, and Flow through syntax transformers and the [React preset](http://babeljs.io/docs/plugins/preset-react/), and you can compose your own transformation pipeline using existing plugins or write your own.

### Mocha + Expect + Enzyme
[Mocha](https://mochajs.org/) is the TDD framework that provides the base of the Deathwing's TDD workflow, allowing you to run asynchronous tests with a simple and easy to read reporting interface.

[Expect](https://github.com/mjackson/expect) is an awesome assertion library that let you write assertions in a simple and natural language like "I expect this value to be equal to 3" or "I expect this array to contain 3".

[Enzyme](https://github.com/airbnb/enzyme) is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output while using a intuitive and flexible API similar to jQuery's API for DOM manipulation and traversal.

### ESLint
[ESLint](http://eslint.org/) is a powerful and pluggable open source JavaScript [linting][1] utility used to find problematic patterns or code that doesn't adhere to certain style guidelines in the project. You can take advantage of this tool by installing an extension in your prefered IDE or Editor. 

## Services
// TODO Description

### Auth0
[Auth0](https://auth0.com/) is an enterprise-grade platform for modern identity where you can easily and quickly connect your apps, choose identity providers, add users, set up rules, customize your login page and access analytics from your Auth0 dashboard.

### Firebase
[Firebase](https://www.firebase.com/) powers the appplication's backend provinding its realtime features and storing all the users data while shares the authentication responsabilities with Auth0.

[1]: https://en.wikipedia.org/wiki/Lint_(software)