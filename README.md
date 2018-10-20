## Potoroo-API
---
The backend API for the [Potoroo-Front-End](https://github.com/kd112/Potorroo-Front-End)
The API runs on an express server and connects to a [Mongo DB](https://www.mongodb.com/).

#### Requirements
---

- Node (version:8.11.1 or higher)
- Mongo Database : This can be either on your local machine or on a cloud.



#### Get Started
---

To start, clone the repository
```
    git clone https://github.com/kd112/Potoroo-2.0.git
```
```
    cd Potoroo-2.0
```
To install dependencies
```
    npm install 
```
```
    cd server/
    mkdir environments && mkdir environments/configs
    cd environements/configs
    touch development.json
```
The API is expecting the **development.json** to be in the following structure

```json
    {
            "app":{},
    "database":{
        "authentication":{
            "user":"username",
            "password":"password"
        },
        "url":"database url" ,
        "name":"database name"
    },
    "session":{
        "jwt":{
            "token":"secret"
        }
    }
    }
```

**NOTE: The API's express server doesnot start until it can connect to the mongo db**

On first start up , the api will create an **admin** user. The password for the admin user can be changed by changing the params in the `server/config/potorro.js`

To start the API 
```
    node server.js
```

