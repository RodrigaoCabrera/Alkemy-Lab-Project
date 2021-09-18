# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.


React-spinner-loader provides simple React SVG spinner component which can be implemented for async await operation before data loads to the view. [React Spinner Loader] (https://github.com/mhnpd/react-loader-spinner)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
# Alerts

The app comes with three alert methods that will use [sweet alert 2](https://sweetalert2.github.io/) to display information to the user. These methods are

 - showErrorAlert
 - showSuccessAlert
 - showInfoAlert
 
 All of these methods will be explained further below.

## Files

There is only one file that contains and exports the three methods callled alertsService.js and is contained in src/Services/ .

### showErrorAlert

This method fires an alert with an error icon and a particular message. This message should be receive via parameter but in case it's not there's a default message asking the user to check the request and try again.

### showSuccessAlert

This method fires an alert with an success icon and a title saying that the operation went through. This method can receive a timer, which will be a number containing the time in ms. after which the alert will close itself. The timer also has a default value of undefined in case no parameter is passed into the function. 

### showInfoAlert

This method fires an alert with an info icon and a particular message. This message must be receive via parameter since there is no default message.


