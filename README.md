# Postgraphile Demo

Demonstrate postgraphile to query postresql db with graphql

## Getting Started

### Prequesties

Node.js + npm

### Installation

Run `npm install` and wait till finished

#### Setup

Create `.env` file according to the `.env_sample` file in the repository  
`DB_LINK`=postgress://username:password@host:port/DBName  
`SCHEMA_NAME`=schema name  
`PORT`=the port that the app will run

## Running the app
Run `npm start`  
Go to the browser and enter `localhost:PORT/graphiql`  
and the service will appear  
* GraphQL API Url : `localhost:PORT/graphql`