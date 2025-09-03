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

---

# User Profile Endpoint

## Endpoint
`GET /users/profile`

## Description
This endpoint returns the authenticated user's profile information. The request must include a valid authentication token (JWT) in the cookie or Authorization header.

## Request Headers
- `Authorization: Bearer <JWT_TOKEN>` (if not using cookies)

## Responses

### Success
- **Status Code**: 200 OK
- **Response Body**:
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}

### Error
- **Status Code**: 401 Unauthorized
- **Response Body**:
{
  "message": "Authentication required"
}

---

# User Logout Endpoint

## Endpoint
`GET /users/logout`

## Description
This endpoint logs out the authenticated user by clearing the authentication token from cookies and blacklisting the token. The request must include a valid authentication token (JWT) in the cookie or Authorization header.

## Request Headers
- `Authorization: Bearer <JWT_TOKEN>` (if not using cookies)

## Responses

### Success
- **Status Code**: 200 OK
- **Response Body**:
{
  "message": "Logged out successfully"
}

### Error
- **Status Code**: 401 Unauthorized
- **Response Body**:
{
  "message": "Authentication required"
}

This documentation provides a clear overview of how to use the /users/register, /users/profile, and /users/logout endpoints, including the required data and possible responses.