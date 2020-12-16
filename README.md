<img alt="Magic mashroom"
    src="https://github.com/kimbali/pokemons-app/blob/main/src/images/pokemon-logo.png?raw=true"
    height="100px" />
	
## [Live Demo](https://pokemon-catalog.netlify.app)

## How was done

1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

2. Has 3 pages with its corresponging URL:

   - /catalog (https://pokemon-catalog.netlify.app/catalog) -> Prints all pokemons with infinite scroll. 
   - /pokemon/:id (https://pokemon-catalog.netlify.app/pokemon/25) -> Prints a single pokemon details with all data. 
   - /sorting/:type (https://pokemon-catalog.netlify.app/sorting/Grass) -> Sort by type. 

3. Selecting a country flag, the general `LanguageContext` is updated and provided to all routes, which changes the idiom of the pokemons names. 

4. `Layout HOK` is used to wrapp each route with the same estructure.

5. `useNearScreen` is a hook that uses interesction observer to observe the visibility of an element in the DOM in order to do some action. It's used to throw the infinite scroll calls. If the object doesn't exists on the browser, a [pollyfil](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) is imported dinamicaly. 

6. `logic.js` methods are the ones that connect the APP with the API. A reusable method was created in order to avoid reapeting code called `_call`.

7. Pokemons can be sorted by a `type` selector. First the list of types is created and then user has a selector to choose one. With this call all pokemons come in once.  

## Local script 

`npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

Is deployed in Netlify [SEE WEB PAGE](https://pokemon-catalog.netlify.app)
API is desployed in Heroku. 

## Included NPM libraries

### wouter

Wouter is a tiny router for modern React and Preact apps that relies on Hooks.
Examples of methods: Switch, Route, Redirect, useLocation, Link. 
[wouter documentation](https://www.npmjs.com/package/wouter)

### node-sass

For styles. Interesting things to be mentioned: 
1. A mixin called `media(x)` handles the responsivnes of the web. The app has been developed with the **mobile first approach**. 
2. `display: grid` was used to print the pokemons list with a variable number of elements per row with variable list element widths. It creates a nice effect :)
3. Gneral config vars are setted in `config.scss`. 

### react-country-flag

Used to print an image of the corresponding country flag of the language choosed. 
[react-country-flag](https://www.npmjs.com/package/react-country-flag)

### just-debounce-it

It has a method that reproduce a debounced call after X miliseconds. Used for the infinit scroll api calls.
[just-debounce-it](https://www.npmjs.com/package/just-debounce-it)

## TO MENTION

- And external API is used to print the pokemon images using the id. [example](https://pokeres.bastionbot.org/images/pokemon/6.png) Super nice coincidence with the ids. In case these resounce is not found, it's shown a local image of the pokedex. 

- Infinite scroll created API brings chuncks that are concatenated to the existing one. Only is available in `/catalog` route. 

- `jsconfig.json` handles imports without `../../` to many dots. Very usefull. 

- The use of hooks. 

- Conventional commits. [what is this a conventionl commit](https://www.conventionalcommits.org/en/v1.0.0/)

## TODO LIST

- [ ] Register is prepared on the api to be stored in a data base. The first aproach was to store it in firebase but the future versions are willing to store it in mongoDB, as it was done in one of my personal projects. [see github project with authentication logic for two diferent type of users](https://github.com/kimbali/hostess1.0/tree/main/hostess-api)

- [ ] ESLint and webpack integration.

- [ ] React test.  


## Author
[Kim Garcia Anton](https://github.com/kimbali)
Javascript Programmer 👩‍💻 


<img alt="Magic mashroom"
    src="https://github.com/kimbali/pokemons-app/blob/main/src/images/pokedex.png?raw=true"
    height="100px" /> 
<img alt="Magic mashroom"
    src="https://github.com/kimbali/pokemons-app/blob/main/src/images/pokedex.png?raw=true"
    height="100px" />
<img alt="Magic mashroom"
    src="https://github.com/kimbali/pokemons-app/blob/main/src/images/pokedex.png?raw=true"
    height="100px" />
<img alt="Magic mashroom"
    src="https://github.com/kimbali/pokemons-app/blob/main/src/images/pokedex.png?raw=true"
    height="100px" />
<img alt="Magic mashroom"
    src="https://github.com/kimbali/pokemons-app/blob/main/src/images/pokedex.png?raw=true"
    height="100px" />



