# REST API-PHP

This project focuses on implementing Restful web services using simple vanilla PHP

## Scenario

- Build a task list system that will allow users to log in and create, update and delete tasks.
- Each user’s tasks will be private to them and other users will not be able to view them.
- We are responsible for database backend, the web services and Authentication module.
- We are not responsible for the front end or the server setup.

## What is a RESTful API

- REST API is an interface that is stateless. It uses Client ↔ Server model via a Request ↔ Response architecture and utilize the standard HTTP verbs and status codes
- It is important to note that REST is not a standard, it is of principles that if an API was to follow would make it RESTful.
- REST is generally preferred over SOAP due to its simpler implementation and mostly uses JSON for response output.
- JSON is simpler and less verbose than XML which is what SOAP uses.

> **REST** : Representational State Transfer.
>
> **Stateless** : For each request the receiving system doesn’t know about any last requests
>
> **HTTP Verbs** : GET, POST, PATCH, DELETE to create, read, update and delete data(CRUD)

## HTTP Verbs

| HTTP Verb | Functionality |
| --------- | ------------- |
| POST      | Create        |
| GET       | Retrieve      |
| PATCH     | Update        |
| PUT       | Replace       |
| DELETE    | Delete        |

## Common HTTP Response Status Codes:

| Status Code | Meaning               |
| ----------- | --------------------- |
| 200         | OK                    |
| 201         | Created               |
| 400         | Bad Request           |
| 401         | Unauthorized          |
| 403         | Forbidden             |
| 404         | Not Found             |
| 405         | Method Not allowed    |
| 409         | Conflict              |
| 500         | Internal Server Error |

[FULL LIST OF HTTP STATUS CODES](https://httpstatuses.com)

## How RESTful WebServices implemented

| HTTP Verb                        | URL                                   | Explanation                                                        |
| -------------------------------- | ------------------------------------- | ------------------------------------------------------------------ |
| GET                              | https://api.mysite.com/products       | This would return list of all products                             |
| GET                              | https://api.mysite.com/products/{:id} | This would return one product that has ID of what ever you pass in |
| POST<br>along with <br>json body | https://api.mysite.com/products       | create a new product and return as a response to the request.      |

> It is best practice to have endpoints as plurals. Since it doesn’t matter if you are retrieving one user or many users, the endpoints would be consistent, but if you just wanted 1 user then you would add the user ID at the end of the route

> Never use routes like /getUsers, /createUser, /deleteUser - these don’t follow REST principles as you are mixing verbs with nouns(getUser). Keep the verbs for use in the HTTP request(GET, POST, PUT, PATCH) and noun as part of route(/users).

