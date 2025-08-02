# build-full-stack-book-store-mern-app
![full-stack-book-store-mern-project](/frontend/src/assets/github-cover.png)

## How to run this project:

### For Frontend 
Follow the below steps to run the project: 
- Firstly clone or unzip the project folder.
* Go to the frontend directory by using the following command ``` cd frontend ```.
* * create a **.env.local** file in the backend root directory as the same level where the **package.json** is located and keep the following environment variables there:
```
>>> Stepup firebase app and configure the environment

VITE_API_KEY = "AIzaSyCSo5GlDIM5bBKNvoiJDgNuX4eB7Ndp1_Y"
VITE_Auth_Domain = "book-store-8d9fd.firebaseapp.com"
VITE_PROJECT_ID = "book-store-8d9f"
VITE_STORAGE_BUCKET = "book-store-8d9fd.firebasestorage.app"
VITE_MESSAGING_SENDERID = "399144232503"
VITE_APPID = "1:399144232503:web:f3a8766e91232ba549c1b2"
```
+ Then run `` npm install `` commend to install node dependencies.
- Finally, to run the project, use ``npm run dev`` command.


### For Backend
Follow the below steps to run the project: 
- Firstly clone or unzip the project folder.
* Go to the backend directory by using the following command ``` cd backend```.
+ Then run `` npm install `` commend to install node dependencies.
* create a **.env** file in the backend root directory as the same level where the **package.json** is located and keep the following environment variables there: 
```
DB_URL = "mongodb+srv://username:password@cluster0.osx9ezh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

JWT_SECRET_KEY = 'bc992a20cb6706f741433686be814e3df45e57ea1c2fc85f9dbb0ef7df12308a669bfa7c976368ff32e32f6541480ce9ec1b122242f9b1257ab669026aeaf16'

Note: Please setup mongodb and change the MongoDB url and set your jwt secret key above.
```

- Finally, to run the project, use ``npm run start:dev`` command.
