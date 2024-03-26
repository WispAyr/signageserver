# Express Server for piSignage API

This project creates an Express server to interact with the piSignage API, including a login token display and a page for entering environmental variables (username and password).

## Setup

Install the necessary packages:

```bash
npm install express dotenv axios ejs


Running the Server
Start the server with:

```bash
node server.js

Features
## Environment Variable Input: Accessible via the root (/) route, allowing dynamic input of credentials.
Token Display: On /home, displays the authentication token received from the piSignage API.
Views
Index View: Form for entering environment variables.
Home View: Displays the authentication token.
Error View: Shows errors during API interaction.
For detailed implementation and more features, refer to the server.js and views in the project repository.

```css
Copy code

