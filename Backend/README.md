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
