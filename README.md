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

This project is aim to be deploy through ssh
Fill `user`/`host`/`key` field in the `conf.sh` and run one of these commands, it will be aimed later to be deploy using docker.


```shell
# First deploy hook
> npm run init

# Update deploy hook
> npm run update
```


## deps

* express - web server
* pm2 - use for deployment
* babel use for transpiling
* eslint  use check the code format
* prettier use for formating the code
* nodemon use to restart server when changes happen