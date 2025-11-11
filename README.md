# MovieDb - A movie and tv series database

This is a simple movie and tv series database built with Angular 20 and styled with Tailwind CSS. It uses the [TMDB API](https://www.themoviedb.org/) to retrieve data and [FireBase](https://firebase.google.com/) as authentication sevice. For security purpuse the api key and firebase config is not included in the repository, if you want to use this app you need to create your own api key and firebase config and replace the ones in the environment variables in the .env file.

## Features  
- User registration & login via secure authentication  
- View movie details (description, cast, reviews)  
- Rate limiting for API requests to avoid exceeding quota  
- Built using Angular CLI (v20.3.7)  

## Tech Stack  
- Angular 20.x (TypeScript, HTML, CSS)  
- RxJS for asynchronous HTTP requests  
- Angular CLI for scaffolding & builds  
- External movie API (e.g., The Movie Database API)  
- Tailwind CSS for styling  
- Firebase as authentication service 

## Installation

1. Clone this repo:  
```bash
   git clone https://github.com/JungleGiu/movieDb.git
   cd movieDb
```

2. Install dependencies:  
```bash
   npm install
# or pnpm install
# or yarn install
```

3. Start the development server:  
```bash
   ng serve
   # or npm start
```

4. Navigate to http://localhost:4200/ in your browser.

5. Configure environment variables:

- Create src/env.ts 

- Setup and configure the environment variables in the .env file, consider you should configure for the API key and a firebase config object.

6. Build for production:

```bash

ng build --prod
```

7. Running tests:

```bash
ng test
```

8. Running e2e tests:

```bash
ng e2e
```

## Folder Structure

The project is structured as follows:

```bash
movieDb/
├── .vscode/
├── public/
├── src/
│   ├── app/
│   │   ├── auth/                     # Authentication logic (Firebase + route guards)
│   │   │   ├── auth-guard.spec.ts
│   │   │   ├── auth-guard.ts
│   │   │   ├── firebase-auth.spec.ts
│   │   │   └── firebase-auth.ts
│   │   ├── components/               # Reusable UI components
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── movie-card/
│   │   │   ├── movies-list/
│   │   │   ├── pagination/
│   │   │   └── thumbnails/
│   │   ├── models/                   # Interfaces and data models
│   │   ├── pages/                    # Page-level components and routing targets
│   │   │   ├── cast-crew-details/
│   │   │   ├── cast-crew/
│   │   │   ├── landing/
│   │   │   ├── login/
│   │   │   ├── movie-details/
│   │   │   ├── movies/
│   │   │   ├── not-found/
│   │   │   ├── register/
│   │   │   ├── series-details/
│   │   │   ├── series/
│   │   │   └── server-error/
│   │   ├── pipes/                    # Custom Angular pipes
│   │   │   ├── error-translate-pipe.spec.ts
│   │   │   └── error-translate-pipe.ts
│   │   ├── services/                 # API and utility services
│   │   │   ├── api.spec.ts
│   │   │   └── api.ts
│   │   ├── app.config.ts
│   │   ├── app.css
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   ├── app.spec.ts
│   │   └── app.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── postcssrc.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── README.md
```


## Routing Structure

| Path          | Component         | Guard     |
| ------------- | ----------------- | --------- |
| `/`           | LandingPage       | —         |
| `/login`      | LoginPage         | —         |
| `/register`   | RegisterPage      | —         |
| `/movies`     | MoviesPage        | AuthGuard |
| `/movie/:id`  | MovieDetailsPage  | AuthGuard |
| `/series`     | SeriesPage        | AuthGuard |
| `/series/:id` | SeriesDetailsPage | AuthGuard |
| `/cast/:id`   | CastCrewPage      | AuthGuard |
| `**`          | NotFoundPage      | —         |


## Contributing

Contributions, bug reports, and feature requests are welcome!
Please open an issue or submit a pull request.

Fork the repository

Create your feature branch (git checkout -b feature/my-feature)

Commit changes (git commit -m 'Add new feature')

Push to branch (git push origin feature/my-feature)

Open a Pull Request 


## License


This project is released under the [MIT License](LICENSE).

## Acknowledgments

- [Angular](https://angular.io/)
- [Angular CLI](https://cli.angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)

## Author

- [JungleGiu](https://github.com/JungleGiu)