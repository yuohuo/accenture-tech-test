This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Accenture Tech Test

## How to run
#### Clone project repository from Github
`$ git clone https://github.com/franklw/accenture-tech-test.git`

#### Install dependencies
`$ npm install`

## Available Scripts

In the project directory, you can run:

### `$ npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `$ npm test`

Launches the test runner in the interactive watch mode.<br>

### `$ npm test -- --coverage`

Launches the test runner with coverage report.<br>

### `$ npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `$ sh ./docker_build.sh <image_name>`

Build docker image of application with nginx.

### `$ docker run -d -p <port>:80 --name <instance_name> <image_name>`

In the build folder, use this command to run docker image.

## Technology stack
- React
- Material UI
- Redux
- Redux Thunk
- Enzyme + Jest

## Project demonstration

![Diagram of cache block](./doc/demo.gif)

- **UX and Perceived Performance**  
    - Make this card grid user interface conform to user's mental model and visceral reaction, by using proper animation and indicator.
    - Take perceived performance in count, by giving instant feedback and gradual progression.

- **Data Cache**  
App store cache card in batch before user approaching the end of cache. When the user switches between pages, the update will be instant, and cached data won't need to refetch.


- **Debounce**  
Utilise Debounce to improves App performance by limiting the number of DOM updates, and avoid API request flood server.

- **Multi-stage Dockerizing**  
Multi-stage dockerizing make smooth production deploys.



## Data fetch and cache logic

### Flowchart of cache logic 
![Diagram of cache block](./doc/data_cache_logic_chart.png)

When user approaching the end of cache ( in the last batch of cached pages ) or user just started app, the caching mechanism will start to work. App caches a batch of pages in one time ( 4 pages by default, and this param can be modified through constant PAGES_PER_BATCH in `/scr/constants` folder ). 

### Flowchart of fetching logic 
![Diagram of cache blocks](./doc/data_fetch_logic_chart.png)

 ## Time consumed

 about 4 working days, which is around 32 hour.

## If I have more time

- More expandable and normalised Redux data structure.

- API handler level debounce middleware that  merge and reduce HTTP requests.

- Skeleton screen for better perceive experience.