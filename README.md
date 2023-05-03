# HASTEN API

REST API for application where you can log in as an admin or user, get users by id or name and get policies.

![](header.png)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/nicoantoniw/api.git

# Go into the repository
$ cd api

# Install dependencies
$ npm install

# Run the app on localhost:3000
$ npm start
```


## API

#### /auth/login
* `POST` : login with email.

**Body parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `email` | required | string  | The email of the user.                                                                     |

#### /user/:parameter
* `GET` : Get a user by id or name.

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `parameter` | required | string  | This parameter could be the id or the name of the user.

#### /policy/user/:policyId
* `GET` : Get user linked to a policy id.

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `policyId` | required | string  | ID of the policy.

#### /policy/policies/:userId
* `GET` : Get list of policies linked to a user name.

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `userId` | required | string  | ID of the user.
