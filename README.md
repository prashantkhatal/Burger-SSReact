# Server + client React express Project

***

## Instructions
Applied some extra css related to scrolling of panels, if want to reset css changes, remove all css from assets\style\burger_style.css file.

Check password for mysql db in file burger-api\config\connection.js before starting the app. If any issue persist make password: "" in the file  

***

## Installation

To install, clone the repository and follow the steps 
1. npm install
2. npm start 

It will crearte build in build folder for server as well as client react app.
To access server side react app hit http://localhost:3000 
To access full client package on web hit  http://localhost:3000/client

***
***
## Heroku Installation 

1. Checkout/download project from git repository https://github.com/prashantkhatal/Burger-SSReact
2. create app on heroku https://dashboard.heroku.com/new-app
3. Add Heroku Postgres add-on from https://dashboard.heroku.com/apps/burger-management/resources
	- Check credentials here for postgres database https://data.heroku.com/datastores/d12a267f-df88-4bd8-9859-a347888d7341#administration
	- These credential might need to login to postgres using pgadmin and later to import sql scripts.

4. Add config urls in Config vars section 
	- Goto https://dashboard.heroku.com/apps/burger-management/settings in Config Vars add following variables 
	- NPM_CONFIG_PRODUCTION = false
	- NODE_MODULES_CACHE = false

5. Push project from local to heroku 
	- heroku login from heroku CLI
		- type "heroku login" cmd and follow process
		- add heroku remote "heroku git:remote -a burger-management"
		- type "git add ." and enter
		- commit you changes using 'git commit -m "First commit"'
		- Push and deploy changes using "git push heroku master"
    - For futher changes just git add, commit and push to heroku
