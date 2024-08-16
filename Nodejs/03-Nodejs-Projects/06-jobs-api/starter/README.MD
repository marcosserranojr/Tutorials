#### Setup

```bash
npm install && npm start
```

#### Database Connection

1. Import connect.js
2. Invoke in start()
3. Setup .env in the root
4. Add MONGO_URI with correct value

#### Routers

- auth.js
- jobs.js

#### User Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

#### Register User

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

#### Login User

- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token

##### Jobs

- Create Jobs
- Get All Jobs
- Dynamically pass the Bearer TOKEN under the Authorization tab as a global variable via script tab (Login/Register) in Postman to test routes 
- Get Single Job
- 

#### Mongoose Errors

- Validation Errors
- Duplicate (Email) - check for 11000 code in error-handler.js
- Cast Error

#### Security

- helmet
- cors
- xss-clean
- express-rate-limit

----------------------------- SWAGER -----------------------------

### Export Docs from Postman
- From collection select three dots
- Select Export
- select version
- select Location to save


### Import Postman doc file into apimatic to reformat

https://www.apimatic.io/ 

- Login - v6tempest@yahoo.com - old PW
- import doc.json file saved
- Edit api import
    - server configuration - update url
    - Endpoints 
        - skip authentication for register and login since public
        - edit the group to Auth and Jobs
- Export API Description
    - Export Format - OpenAPI v3.0(YAML)


Swagger UI

https://editor.swagger.io/

- Copy the export form apimatic into editor
- Remove any tags that are empty
- Remove hard coded parameters
  - Search in Swagger documents - Common Parameters example below

  ```yaml
  /jobs/{id}:
    parameters:
      - in: path
        name: id
        schema:
          type: string
        required: true
        description: the job id
  ```
  - Within the swagger editor update the get entry and remove the params and copy the above yaml once
  - the patch and delete will automatically use the same info
  - test the API routes
  - ensure two packages are installed in app - swagger-ui-express / yamljs
  - create yaml file to store swagger yaml
  - copy tested swagger yaml into file
  - update app.js with packages and route
