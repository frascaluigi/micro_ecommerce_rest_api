<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

MICRO API REST E-COMMERCE

### Route

* / -> *Welcome route*
* /auth/login -> *This route is for login; you can use every user that is in file _user.csv_ with password **_easytouse_** to do a succesfully login*

* /item -> *(**UNPROTECTED ROUTE**) This route shows all items that are present in file _item.csv_*
  * /item/:id -> *you can reach the single item with its id*

* /order -> *(**PROTECTED ROUTE**) This route shows all orders that are present in file _order.csv_*
  * /order/:id -> *you can reach the single order with its id*
  * /order/:id/detail -> *you can have the detail of the single order*

* /user -> *(**PROTECTED ROUTE**) This route shows all users that are present in file _user.csv_*
  * /user/:id -> *you can reach the single user with its id*
  * /user/:id/orders -> *you can have the list of all orders of a single user*

### Take into consideration

* For the sake of simplicity all users can see all orders and the whole informations about users

* The JWT secret is hardcoded, don't try this on production 😵‍💫

* The **.env** file it was committed on Git; I mean that this is a env file for development environment. Never commit a env file for others environments.


## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## How to use

### Login 
`
curl -X POST http://127.0.0.1:3001/auth/login/ -H "Content-Type: application/json" -d '{"username":"joyful@gmail.com", "password":"easytouse"}'
{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpveWZ1bCIsImlkIjoiMTAwMDEiLCJpYXQiOjE2NzQ0MTQzNzQsImV4cCI6MTY3NDQxNTI3NH0._-ywY3GqsRfL3J3NytuUSZfnmQUbomRFIqpjVFsTXg0"}
`

### Retrieve all users

`
curl http://127.0.0.1:3001/user -H "Accept: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpveWZ1bCIsImlkIjoiMTAwMDEiLCJpYXQiOjE2NzQ0MTQzNzQsImV4cCI6MTY3NDQxNTI3NH0._-ywY3GqsRfL3J3NytuUSZfnmQUbomRFIqpjVFsTXg0"
`

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Frasca Luigi]

## License

Nest is [MIT licensed](LICENSE).
