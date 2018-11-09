# Review Questions

## What is Node.js?

Node.js is a runtime environment to use JavaScript server-side. Node allows us to use JavaScript on the backend, providing an opportunity to write all our code in one language.

## What is Express?

Express is a lean web application framework. Very minimalistic, express prefers to give oyu a bunch of options and let you pick what plugins you need, unstead of baking them in unnecessarily.

## Mention two parts of Express that you learned about this week.

Middleware and Routing

## What is Middleware?

Middleware are appendages that provide additional functionality to applications. They can also be useful to abstract away recurring tasks and in the process clean up your code.

Express itself is middleware.

Middleware augments your Request object with additional information, and it can also already respond to the client.

## What is a Resource?

In the context of TESTful Web API's, everything is a resource. JSON data is the resource used for CRUD operations when building API's.

## What can the API return to help clients know if a request was successful?

HTTP status codes

## How can we partition our application into sub-applications?

By separating route handlers and converting them to middleware to use in your main file like index.js or server.js

## What is express.json() and why do we need it?

Baked in middleware that parses requests through JSON.
