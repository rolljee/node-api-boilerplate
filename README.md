# Node Api boilerplate

The purpose is to create a goos starter pack to create an NodeJs API

## Usage

* Route must be declare in `/routes/routes.js`
* Api method created within the `/src/api.js`

### Dev environment

```shell
# Start the project in dev mode
> npm run dev
```


### Deployment

```shell
# First deploy hook
> npm run init

# Update deploy hook
> npm run update
```


## deps

* express - web server
* pm2 - used for deployment
* nodemon - restart server when changes happen

* babel - use for transpiling
* eslint to check the code format
* prettier - use for formating the code