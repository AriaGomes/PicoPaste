# PicoPaste
Self-hosted pastebin application made using a MERN framework. Included are the React frontend and express backend applications.

## Made Using
* MongoDB
* Express
* React
* NodeJS
* JS & Typescript
* TailwindCSS

## Getting Started
Configure the `config.env` file as seen below

```env
PORT=5000
MONGO=<Your_mongo_URI>
```

(Make sure `PORT=5000` as UI only looks for 5000 as of now. Will change to use env in future)

Start the backend application with `yarn start-server`. Start the UI with `yarn start-ui`. If given a valid mongo URI the application is ready to use.

