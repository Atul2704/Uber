# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their details. It validates the input data, hashes the password, and creates a new user in the database. Upon successful registration, it returns an authentication token and the user details.

## Request Body
The request body must be in JSON format and include the following fields:

- `fullname`: An object containing:
  - `firstname`: A string representing the user's first name (minimum length: 3 characters, required).
  - `lastname`: A string representing the user's last name (minimum length: 3 characters, optional).
- `email`: A string representing the user's email address (minimum length: 5 characters, required).
- `password`: A string representing the user's password (minimum length: 6 characters, required).

### Example Request
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}

## Responses

### Success
- **Status Code**: 201 Created
- **Response Body**:
{
  "token": "JWT_TOKEN",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}

### Error
- **Status Code**: 400 Bad Request
- **Response Body**:
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name should be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password should be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}

This documentation provides a clear overview of how to use the /users/register endpoint, including the required data and possible responses.