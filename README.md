# Admin Panel

A ReactJS based web client for admin functions. Used to bootstrap initial projects to have a default layout.

## Tech Stack

* [`esbuild`](https://esbuild.github.io/)
* [`react-bootstrap`](https://react-bootstrap.netlify.app/)
* [`dotenv`](https://github.com/motdotla/dotenv)
* [`postcss`](https://github.com/postcss/postcss)
* [`sass`](https://sass-lang.com/)
* [`axios`](https://github.com/axios/axios)


## Setup

1. Install all packages

```bash
npm install
```

2. Copy `.env.dist` to `.env` and change values accordingly.

* `API_BASE_URL`: Backend server
* `TOKEN_KEY_BEARER`: Key for token (makes use of `localStorage`)
* `CURRENT_USER`: Key for the logged in user

3. (optional) Run the mock server

```bash
npm run mock-server
```

4. Run the application server

```bash
npm run start
```
