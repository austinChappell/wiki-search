# Project Title

Wiki Search

## Project Description

This is a wikipedia search engine, using the wikipedia API.

### Things to know

This project uses a decent amount of jQuery. The initial variables are assigned strings that will eventually become pieces of HTML.

The form, when submitted, runs an anonymous function, with the parameter 'e'. This event parameter is passed so the preventDefault function can be used. This keeps the page from being reloaded, allowing the content to be rendered to the DOM. This means that the search input also needs to be cleared inside this function as well.

The value of the search input is saved into a variable called 'search', and is then cleared. The search container is moved up by changing its class.

The API endpoint is set to limit the search results to 10, and a for loop is used to render the results to the page.
