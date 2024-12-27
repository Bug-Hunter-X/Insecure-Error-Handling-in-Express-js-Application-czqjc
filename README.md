# Insecure Error Handling in Express.js Application

This repository demonstrates a common error in Node.js Express.js applications: insecure error handling.  The application fails to properly handle asynchronous errors, leading to sensitive information potentially being leaked to the client.

## Bug Description
The `bug.js` file contains an Express.js server with an asynchronous operation that might throw an error.  The error handling is flawed:  instead of sending a generic error message, it sends the entire error object to the client, which could reveal sensitive details like stack traces and internal server information.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle errors, providing a generic error message to the client while logging the full error details on the server for debugging purposes. 

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install express`
4. Run `node bug.js`
5. Make a request to `http://localhost:3000/` (the error will be exposed).
6. Run `node bugSolution.js`
7. Make a request to `http://localhost:3000/` (a generic error will be sent)
