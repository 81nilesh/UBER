# API Documentation

## User Registration
Endpoint for registering new users in the system.

### Endpoint
POST /api/users/register

### Description
Creates a new user account with the provided information.

### Request Body

### Request Body Example
{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "password123"
}

### Response Example
{
  "id": 1,
  "username": "john_doe",
  "email": "john.doe@example.com",
  "createdAt": "2021-01-01T00:00:00.000Z",
  "updatedAt": "2021-01-01T00:00:00.000Z"
}

## User Login
Endpoint for authenticating existing users.

### Endpoint
POST /api/users/login

### Description
Authenticates a user and returns an authentication token.

### Request Body

## Get User Profile
Endpoint for retrieving authenticated user's profile.

### Endpoint
GET /api/users/profile

### Description
Returns the profile information of the currently authenticated user.

### Authentication
Requires a valid JWT token in the Authorization header or cookies.

### Response Examples

#### Success Response (200 OK)
