# Yummy Recipes React

Yummy Recipes application using react library that allows a user do the following:

- Register, login, reset password and logout.
- Create, update, view and delete a category.
- Create, update, view and delete a recipe.

## Testing API


```
$ git clone https://github.com/JoyyToo/YummyRecipes-ReactJS.git
$ cd yummyrecipes-react
```

## Installing dependencies
```
$ npm install
```

## Start The Server
Start the server which listens at port 3000 by running the following command:
```
npm start
```

## Running tests
```
npm test
```

### Available endpoints

| url | Method|  Description| Authentication |
| --- | --- | --- | --- |
| /register | POST | Registers new user | FALSE
| /login | POST | Handles POST request for /auth/login | TRUE
| /logout | GET | Logs out a user | TRUE
| /reset-password | POST | Reset user password | TRUE
| /category | GET | Get every category of logged in user|TRUE
| /category/{_id} | GET | Get category with {id} of logged in user|TRUE
| /category | POST | Create a new category|TRUE
| /category/{_id}  | PUT | Update a category with {id} of logged in user|TRUE
| /category/{_id} | DELETE | Delete category with {id} of logged in user|TRUE
| /recipe | POST | Creates a recipe|TRUE
| /recipes/{id} | GET | Gets a single recipe|TRUE
| /recipe/{id} | PUT | Updates a single recipe|TRUE
| /recipe/{id} | DELETE | Deletes a single recipe|TRUE
