# `pokedex-vue-frontend`

This project is a frontend application developed with Vue.js to visualize and
explore "Pokeneas," fictional creatures inspired by Antioquia. The application
consumes the
[pokedex-express-backend](https://github.com/kristianrpo/pokedex-express-backend)
API to retrieve information about the Pokeneas, displaying their attributes,
abilities, images, and characteristic phrases.

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

The application provides two main pages, each corresponding to an endpoint in
the backend.

### 1. Basic Info

<img width="712" alt="image" src="https://github.com/user-attachments/assets/a4cfdb60-ca57-4e7d-864e-730406d9bfc9">

### 2. Insight

<img width="707" alt="image" src="https://github.com/user-attachments/assets/7fd73a8a-9e2a-4ac4-a768-c86ab254ee4a">

## Project Structure

This application follows a modular architecture to separate different
responsibilities and make the codebase easier to manage.

```bash
.
├── src
│   ├── assets               # Contains assets for styling and media.
│   │   └── css              # Contains global and component-specific stylesheets.
│   ├── routes               # Defines routes for navigating between views.
│   ├── services             # Contains services for handling API requests and business logic.
│   ├── views                # Directory for application views, each with its own folder for organization.
│   │   ├── BasicInfo        # BasicInfo view and its specific files.
│   │   └── Insight          # Insight view and its specific files.
│   ├── App.vue              # Root component of the Vue application.
│   └── main.js              # Entry point for initializing the Vue instance and mounting the application.
├── public
│   ├── favicon.ico          # Icon displayed in the browser tab.
│   └── index.html           # Main HTML file and entry point for the application.
├── .env                  # Environment variables file, used for sensitive configurations or environment-specific settings
├── .gitignore            # Specifies files and folders to ignore in version control
├── babel.config.js       # Babel configuration for JavaScript compatibility with different browsers
├── Dockerfile            # Docker configuration for building and deploying the app in a container
├── jsconfig.json         # JavaScript configuration that customizes the development environment in VSCode
├── package-lock.json     # Locks the versions of dependencies for consistent installations
├── package.json          # Defines project dependencies, scripts, and metadata
└── README.md             # Project documentation
└── start.sh              # File to inject .env in production
└── vue.config.js         # Configuration file to customize Vue CLI settings for build and dev server

```

## Environment variables

Create a .env file in the root directory to store environment variables. This
file will allow you to configure the backend API URL.

In the .env file, define the following variable:

```
VUE_APP_EXPRESS_BACKEND_URL=http://localhost:3000
```

Replace http://localhost:3000 with the actual URL where your Express API is
running.

## Authors

This project was developed by [Kristian Restrepo][1] and [Evelyn Zapata][2].

[1]: https://github.com/kristianrpo
[2]: https://github.com/EvelynZapata20
