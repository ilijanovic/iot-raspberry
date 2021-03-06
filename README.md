# Dashboard for IoT devices.

Project is still under development.

Version is currently in German. English version will come later on.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## MongoDB configuration

The following configurations are required. The application wont work if you dont have it.
For the database you will need to create an `.env` file in the root directory.

Inside of the `.env` you can define your enviroment variables for sensitive data like database password so it wont be exposed to the public.

Add the following information to make it work:

    MONGODB_URI=<YOUR MONGODB URI>
    PRIVATE_KEY=<YOUR PRIVATE KEY FOR THE JSON WEB TOKEN (JWT)>

## General configuration

Under `/api/config/config.js` you are able to set some general configurations like:

| option          | description                                       | default | type    | unit |
| --------------- | ------------------------------------------------- | ------- | ------- | ---- |
| saltRounds      | For password hashing                              | 10      | integer | -    |
| tokenExpiration | Expiration time for the JSON web token (jwt).     | 3600000 | integer | ms   |
| cookieName      | Sets the name of your cookie that holds the token | "iot"   | string  | -    |

Note here: cookie expiration time == token expiration time
The cookie deletes itself after that given amount of time

## Update chart

To update an chart send an JSON `POST` request to `/api/module/setData`

    {
        id: <socketID>
        chart: <chart type>
        data: <depending on what chart you use you will need different properties>
    }

Example with line chart:

    {
        id: "5f7341d87d6c1710e5a04d99",
        chart: "line",
        data: {
            label: "test",
            dataPoint: 23
        }
    }

Example with pie chart:

    {
        id: "5f7341d87d6c1710e5a04d99",
        chart: "pie",
        data: {
            dataPoint: 23,
            index: 0
        }
    }
