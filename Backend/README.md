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

# Captain Registration Endpoint

## Endpoint
`POST /captains/register`

## Description
This endpoint allows a new captain to register by providing their personal and vehicle details. The input data is validated, the password is hashed, and a new captain is created in the database.

## Request Body
The request body must be in JSON format and include the following fields:

- `fullname`: An object containing:
  - `firstname`: A string representing the captain's first name (minimum length: 3 characters, required).
  - `lastname`: A string representing the captain's last name (minimum length: 3 characters, required).
- `email`: A string representing the captain's email address (must be a valid email, required).
- `password`: A string representing the captain's password (minimum length: 6 characters, required).
- `vehicle`: An object containing:
  - `color`: A string representing the vehicle color (minimum length: 3 characters, required).
  - `plate`: A string representing the vehicle plate (minimum length: 3 characters, required).
  - `capacity`: A number representing the vehicle capacity (required).
  - `vehicleType`: A string representing the vehicle type (must be one of: "Car", "Bike", "Auto", required).

### Example Request
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "Car"
  }
}

## Responses

### Success
- **Status Code**: 201 Created
- **Response Body**:
{
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "Car"
    }
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
      "msg": "Firstname should be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Lastname should be at least 3 characters long",
      "param": "fullname.lastname",
      "location": "body"
    },
    {
      "msg": "Password should be atleast 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Vehicle color should be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Vehicle plate should be at least 3 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Vehicle capacity should be a number",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}

---

This documentation describes the /captains/register endpoint, including required fields, validation, and possible responses.