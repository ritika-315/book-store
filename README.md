# build-full-stack-book-store-mern-app
![full-stack-book-store-mern-project](/frontend/src/assets/github-cover.png)

## How to run this project:

### For Frontend 
Follow the below steps to run the project: 
- Firstly clone or unzip the project folder.
* Go to the frontend directory by using the following command ``` cd frontend ```.
* * create a **.env.local** file in the frontend root directory as the same level where the **package.json** is located and keep the following environment variables there:
```
>>> Stepup firebase app and configure the environment

VITE_API_KEY = "...."
VITE_Auth_Domain = "...."
VITE_PROJECT_ID = "...."
VITE_STORAGE_BUCKET = "...."
VITE_MESSAGING_SENDERID = "...."
VITE_APPID = "...."
```
+ Then run `` npm install `` commend to install node dependencies.
- Finally, to run the project, use ``npm run dev`` command.
- Frontend deployed on vercel="https://book-store-eight-lac.vercel.app"
- For Admin = "https://book-store-eight-lac.vercel.app/admin"


### For Backend
Follow the below steps to run the project: 
- Firstly clone or unzip the project folder.
* Go to the backend directory by using the following command ``` cd backend```.
+ Then run `` npm install `` commend to install node dependencies.
* create a **.env** file in the backend root directory as the same level where the **package.json** is located and keep the following environment variables there: 
```
DB_URL="mongodb+srv://username:password@cluster.example.mongodb.net/database"

JWT_SECRET_KEY="replace-with-a-long-random-secret"
```

- Finally, to run the project, use ``npm run start:dev`` command.
- Backend deployed on render="https://book-store-htqx.onrender.com/"

### Credentials and deployment

Copy `backend/.env.example` to `backend/.env` and replace the placeholders locally.
Real credentials belong only in local environment files and hosting-provider environment settings.
Never commit secrets or real environment files. Frontend `VITE_*` variables are bundled into the browser; never put backend secrets there.

Set `JWT_SECRET_KEY` to a long cryptographically random value (at least 32 random bytes),
using a trusted cryptographic generator or password manager. Changing this secret invalidates
all existing admin tokens, so administrators must sign in again. The backend requires both
`DB_URL` and `JWT_SECRET_KEY` at startup; `PORT` is optional and defaults to 4000.

A JWT value previously published in this README must be treated as compromised, including
copies in Git history. Removing it from the current README does not rotate the deployed secret.
In the Render dashboard, select the backend whose URL is
`https://book-store-htqx.onrender.com/`, open **Environment**, replace `JWT_SECRET_KEY`
with a newly generated secret, and choose **Save, rebuild, and deploy**. Wait until the
new deployment is live, then verify the backend responds and sign in again.
