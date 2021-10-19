#### Pre-requisites

- python >= 3.8 is installed on your machine and available at your command line.
- [npm](https://www.npmjs.com/get-npm)
- If using Windows, a command line utility capable of running basic Unix shell commands

#### 1. Running the backend

Once started with one of the commands below, the web app will be running on http://localhost:8000 for the backend. Enter the additional commands in step 2 to run the frontend of the web app which will run on http://localhost:3000.

##### Python

**:warning: As `python2` has reached its end of life, only `python3` is supported.**

```
$ cd ./python

# If you use virtualenv
# virtualenv venv
# source venv/bin/activate

$ pip install -r requirements.txt
$ ./start.sh
```
Now the backend of the web app is running on one terminal.
If you get this error message:

```
ssl.SSLError: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed (_ssl.c:749)
```

You may need to run the following command in your terminal for your particular version of python in order to install SSL certificates:

```
# examples:
open /Applications/Python\ 3.9/Install\ Certificates.command
# or
open /Applications/Python\ 3.6/Install\ Certificates.command
```


Open another terminal and run the following commands to run the frontend at http://localhost:3000
#### 2. Running the frontend

```
$ cd ./frontend
$ npm install
$ npm start

Now frontend is running on another terminal. Next go to your browser and hit "http://localhost:3000" to access the app.

