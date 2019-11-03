
<h2>About the Application</h2>

<ul>
<li>This application is used to fetch stock data from external server and display it inside a table</li>
<li>Fetch API has been used to fetch JSON file from the server and promise used to perform task according to the response(Resolve or Reject).</li>
<li>Observer subscribes to event using RxJS observables to perform the fetch according to the user input</li>
</ul>
<h2>Installation</h2>

<ul>
<li>Clone the repository</li>
<li>Navigate to project directory</li>
<li>Run npm install.</li>
<li>Run npm install rxjs</li>
</ul>

<h2>Build</h2>

Default build mode is production. This will build index.html , main.js and main.css files in the dist directory.
To build the app, run npm run build.
Launch the app by opening the file ./dist/index.html in a browser.

<h2>Development Server</h2>
Follow below steps to launch the app using webpack-dev-server.
<ul>
<li>Run npm start or npm run start.</li>
<li>This will open the app on a browser window.</li>
</ul>