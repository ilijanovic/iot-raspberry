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

Add the following information to make it work:

    MONGODB_URI=<YOUR MONGODB URI>
    PRIVATE_KEY=<YOUR PRIVATE KEY FOR THE JSON WEB TOKEN (JWT)>

## General configuration

Under `/api/config/config.js` you are able to set some general configurations like:

1. `saltRounds`: For your password hashing. Default is 10
2. `tokenExpiration`: Expiration time for your JWT. Default is 1h (3600000)
3. `cookieName`: Set the name of your cookie that holds the token
