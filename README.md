> 1 - Feb - 2023

## Real-Estate

# React + Tailwind CSS | [Live Link](https://realestate-lp.netlify.app)

## This app based on - vite 

after clone or download, for `install` dependencies, please type at terminal...
```js
yarn
```

& to `start` or `run` this application, please type...
```
yarn dev
```

## Technology used:
* Vite
* React
* React-icons
* Tailwind CSS


## Project dependencies package installation cmd...
* yarn create vite
* yarn add -D tailwindcss postcss autoprefixer
* yarn add -D react-icons
* yarn add -D react-router-dom
* yarn add -D @headlessui/react
* npx tailwindcss init -p


## Learning Context :-
* File & folder structure
* CSS writing structure
* Responsive mobile menu
* Searching mechanism
* Parent hover child effect...
* Show search result number
* Reset search result
* 404 Page not found add
* Auto navigation to home page
* Usage of headless-ui
* FAQ accordion add
* Client side pagination
* Related Search
* Image gallery


```js
Note: context api file name extension must be '.jsx' - not '.js' 
otherwise it will be generate error at runtime...
```

## Project Hierarchy :-
```jsx
🟨
src
├── assets
|   ├── img/...
|   |   ├── agents/...
|   |   ├── apartments/...
|   |   ├── faq/...
|   |   └── houses/...
|   |
|   └── index.js
|
├── components
|   ├── AccordionItem.jsx
|   ├── Banner.jsx
|   ├── DropdownCountry.jsx
|   ├── DropdownPriceRange.jsx
|   ├── DropdownProperty.jsx
|   ├── FAQ.jsx
|   ├── Footer.jsx
|   ├── Header.jsx
|   ├── House.jsx
|   ├── HouseList.jsx
|   ├── index.js
|   ├── PageNotFound.jsx
|   ├── Pagination.jsx
|   ├── RelatedSearch.jsx
|   └── Search.jsx
|
├── constants
|   └── index.js
|
├── context
|   └── HouseContext.jsx
|
├── db
|   └── data.js
|
├── helper
|   ├── getImageName.js
|   └── getSearchResults.js
|
├── pages
|   ├── Home.jsx
|   ├── index.js
|   └── PropertyDetails.jsx
|
├── style
|   └── index.css
|
├── App.jsx
└── main.jsx
🟨
```