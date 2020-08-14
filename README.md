This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and its intended for demo purposes. It features an app catalog based on [Giant Swarm app api](https://github.com/giantswarm/fe-hiring-task-api)

## Development

- Make sure you have the Giant Swarm api mentioned above running on [http://localhost:3000](http://localhost:3000)
- `yarn && yarn start` - app will ask to use another port, most likely [http://localhost:3001](http://localhost:3001)
- Open to view it in the browser.

## Test

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Deployment

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Architectural notes

- App uses React Context for state management which works well for the complexity of the demo, you can check it on the `state` folder
- Styling is archieved via the `styled components` library
- Folders are split per feature
- Tests use `jest` and `react testing library` along with `msw` for network request mocking
- Given the demo nature, the app is not Dockerized
- App uses `React Suspense` for lazy loading and good `FCP: First Contentful Paint`, and loading states while fetching data until `FMP: First Meaningful Paint`.
- Error handling is implemented for failed network requests
