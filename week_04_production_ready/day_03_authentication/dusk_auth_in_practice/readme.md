#Authentication applied

##Add users to an app

1. Create a user table (see sequelize lesson)
	* attributes / columns
		* e-mail
		* password
		* name
2. Create a sign up form (GET /auth/signup)
	* should have form fields for each column listed above
3. Create a signup POST route
	* route: POST /auth/signup
	* Check if e-mail already registered
		* Creates new user if not registered
		* Tells user they are already registered otherwise
	* ENCRYPTS PASSWORD!!!!! (use before create)
4. Create a login form (GET /auth/login)
5. Set up sessions middleware
6. Create a login POST route (does login)
	* route: POST /auth/login
	* Checks e-mail / password against database
	* Logs user in (create session)
7. Create a GET /auth/logout route (clears the session)
8. Create getUser() method (as middleware)

##Assignment

Fork and clone this: [Auth lab](https://github.com/wdi-sea-01/auth_lab)