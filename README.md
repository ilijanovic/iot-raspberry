# iot

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

For the database you will need to create an `.env` file in the root directory.

Add the following information to make it work:

    MONGODB_URI=<YOUR MONGODB URI>
    PRIVATE_KEY=<YOUR PRIVATE KEY FOR THE JSON WEB TOKEN (JWT)>
