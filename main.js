const express = require('express');
const { postgraphile } = require('postgraphile');
const Filter = require('postgraphile-plugin-connection-filter');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(cors());

app.use(
    postgraphile(
        process.env.DB_LINK,
        process.env.SCHEMA_NAME,
        {
            watchPg : true,
            graphiql : true,
            enhanceGraphiql : true,
            appendPlugins : [Filter]
        }
    )
);

app.listen(process.env.PORT);

console.log("App started at port " + process.env.PORT + "\n");
