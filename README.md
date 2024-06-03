### MFE Challenge

This repository contains a main repo `root` that consumes a basic to do app that exists inside the `todo-app` repo.

It uses NextJS and Module Federation under the hood to expose the "ToDo" app, so it can be presented by our main application

### Instructions

#### Installation
Please make sure to install all dependencies within each project by running `npm install`

#### Running the app
* Run the `npm run build` command in the `todo-app` repo
* Run `npm run start`, it should start the app in `http://localhost:3001`
* Run `npm run build` command in the `root` app
* Run `npm run start`, it should start the app in `http://localhost:3000`
* Go to `http://localhost:3000` and you will be presented with our super to do list!

##### Running unit tests
* Run `npm run test`
* Tests are only available inside the `todo-app` repo