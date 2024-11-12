# `pokedex-vue-frontend`

This project is a frontend application developed with Vue.js to visualize and explore "Pokeneas," fictional creatures inspired by Antioquia. The application consumes the [pokedex-express-backend](https://github.com/kristianrpo/pokedex-express-backend) API to retrieve information about the Pokeneas, displaying their attributes, abilities, images, and characteristic phrases.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Authors](#authors)

## Installation

To get started, clone this repository and install the dependencies.

```bash
git clone git@github.com:EvelynZapata20/pokedex-vue-frontend.git
cd pokedex-vue-frontend
npm install
```

## Usage
To run the application, use the following command:
```bash
npm run dev
```

## Pages
The application provides two main pages, each corresponding to an endpoint in the backend.

### 1. Basic Info
![alt text](image-1.png)

### 2. Insight
![alt text](image.png)

## Project Structure
This application follows a modular architecture to separate different responsibilities and make the codebase easier to manage.
```bash
.
├── node_modules          # Dependencies installed via npm
├── public                # Public files accessible directly at the app's root
│   └── favicon.ico       # Icon file displayed in the browser tab for the application
├── src                   # Main source code directory
│   ├── assets            # Static files like images, fonts, etc.
│   │   └── css           # Folder for custom CSS files
│   │       └── app.css   # Main CSS file containing global styles for the app
│   ├── router            # Configuration for the app's routes
│   │   └── index.js      # Router configuration file defining the app's views and routes
│   ├── services          # Services to interact with external APIs
│   │   └── PokeneaService.js  # Service file with functions to make HTTP requests to the Pokeneas backend
│   ├── views             # Main views of the application, corresponding to the main pages
│   │   ├── BasicInfoView.vue   # View that displays basic information about Pokeneas
│   │   └── InsightView.vue     # View that shows detailed information about Pokeneas, such as image and phrase
│   ├── App.vue           # Root Vue component that wraps the entire application
│   └── main.js           # Entry point of the application where Vue and router are initialized
├── .env                  # Environment variables file, used for sensitive configurations or environment-specific settings
├── .gitignore            # Specifies files and folders to ignore in version control
├── babel.config.js       # Babel configuration for JavaScript compatibility with different browsers
├── Dockerfile            # Docker configuration for building and deploying the app in a container
├── jsconfig.json         # JavaScript configuration that customizes the development environment in VSCode
├── package-lock.json     # Locks the versions of dependencies for consistent installations
├── package.json          # Defines project dependencies, scripts, and metadata
└── README.md             # Project documentation
└── vue.config.js         # Configuration file to customize Vue CLI settings for build and dev server

```

## Environment variables
Create a .env file in the root directory to store environment variables. This file will allow you to configure the backend API URL.

In the .env file, define the following variable:

```
VUE_APP_EXPRESS_BACKEND_URL=http://localhost:3000
```

Replace http://localhost:3000 with the actual URL where your Express API is running.

## Authors
This project was developed by [Kristian Restrepo][1] and [Evelyn Zapata][2].

[1]: https://github.com/kristianrpo 
[2]: https://github.com/EvelynZapata20 