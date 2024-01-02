# 0x00. ES6 Basics

## Learning Objectives

Javascript ES6

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Technologies & Tools :computer:

[![Jest](https://img.shields.io/badge/≡-Jest-C21325?logo=Jest&style=flat-square&labelColor=282828&logoColor=C21325)](https://jestjs.io/)
[![Git](https://img.shields.io/badge/≡-Git-F05032?logo=git&style=flat-square&labelColor=282828)](https://git-scm.com/)
[![Ubuntu](https://img.shields.io/badge/≡-Ubuntu-E95420?&style=flat-square&logo=Ubuntu&labelColor=282828)](https://ubuntu.com/)
[![Babel](https://img.shields.io/badge/≡-Babel-F9DC3E?logo=Babel&style=flat-square&labelColor=282828)](https://babeljs.io/)
[![JavaScript](https://img.shields.io/badge/≡-JavaScript-F7DF1E?logo=javascript&style=flat-square&labelColor=282828)](https://developer.mozilla.org/en-US/docs/Web/javascript)
[![GNU_Bash](https://img.shields.io/badge/≡-GNU_Bash-4EAA25?logo=GNU-Bash&style=flat-square&labelColor=282828)](https://www.gnu.org/software/bash/)
[![Node.js](https://img.shields.io/badge/≡-Nodejs-339933?logo=Node.js&style=flat-square&labelColor=282828)](https://nodejs.org/en/)
[![Vim](https://img.shields.io/badge/≡-Vim-019733?logo=Vim&style=flat-square&logoColor=019733&labelColor=282828)](https://www.vim.org/)
[![Vagrant](https://img.shields.io/badge/≡-Vagrant-1563FF?logo=vagrant&style=flat-square&logoColor=1563FF&labelColor=282828)](https://www.vagrantup.com/)
[![Cmder](https://img.shields.io/badge/≡-Cmder-1A1A1A?logo=cmder&style=flat-square&logoColor=5391FE&labelColor=1A1A1A)](https://cmder.net/)
[![ESLint](https://img.shields.io/badge/≡-ESLint-4B32C3?logo=ESLint&style=flat-square&labelColor=282828&logoColor=4B32C3)](https://eslint.org/)
[![GitHub](https://img.shields.io/badge/≡-GitHub-181717?logo=GitHub&style=flat-square&labelColor=282828)](https://github.com/)

---

## Resources :books:

Read or watch:

- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)

---

## Requirements :hammer:

- Ubuntu 18.04 LTS using NodeJS 12.22.x
- Jest Testing Framework
- ESLint

### Install NodeJS 12.22.x

```console
$ curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
$ sudo bash nodesource_setup.sh
$ sudo apt install nodejs -y
```

### Check version

```console
$ nodejs -v
v12.22.1
$ npm -v
6.14.12
```

### Install Jest, Babel, and ESLint

```console
$ npm install --save-dev jest
$ npm install --save-dev babel-jest @babel/core @babel/preset-env
$ npm install --save-dev eslint
```

## Files :card_file_box:

### [0. Const or let?](./0-constants.js)

### [1. Block Scope](./1-block-scoped.js)

### [2. Arrow functions](./2-arrow.js)

### [3. Parameter defaults](./3-default-parameter.js)

### [4. Rest parameter syntax for functions](./4-rest-parameter.js)

### [5. The wonders of spread syntax](./5-spread-operator.js)

### [6. Take advantage of template literals](./6-string-interpolation.js)

### [7. Object property value shorthand syntax](./7-getBudgetObject.js)

### [8. No need to create empty objects before adding in properties](./8-getBudgetCurrentYear.js)

### [9. ES6 method properties](./9-getFullBudget.js)

### [10. For...of Loops](./10-loops.js)

### [11. Iterator](./11-createEmployeesObject.js)

### [12. Let's create a report object](./12-createReportObject.js)
