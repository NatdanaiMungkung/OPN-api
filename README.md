
## Description

Covid Timeline Generator Backend

## Installation

```bash
$ npm install
```

## Running the app (make sure that port 3000 is free before run the project)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Graphql playground
http://localhost:3000/graphql

# Tech Stack
* NextJs for frontend
* GraphQL
* NestJS for Backend
* SQLite for storage

# Why SQLite ?
Easy to setup without any complicated dependency, suitable for POC project

# improvement points (given enough time and use cases)
* Migrate from sqlite to Use other db software (eg. postgresql, mariadb)
* Unit Test
* E2E test
* Containerized (Docker)
* CI/CD (eg. github action)
* Authorization and authentication implement
* Refactor for maintainability and extendability
* Implement checking condition (eg. max 8 patients and timeline must not conflicted) on both frontend and backend layer (Currently check only on Frontend)
* Add healthcheck and metric to monitor usage


