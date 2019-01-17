# Exercise 1: Contacts List
Hello, awesome people! In this exercise we are building a list with contacts. The only thing you need to do in order to achieve the goal is to remember all we were talking about during our _intro_ sessions and *fill* or *fix* missed or broken parts of code. 

I used comments in the code so pay attention 👀 

### Note: As a part of homework I assume you will figure out how to get data from the server. Styles and class names are provided so you don't need to design anything, but keep in mind if you wish to add something of your own, like another component, more style or somehow improve this project, feel free to do so 🎉🎉🎉
#### *If you stuck and about to give up:* I suggest you to look into `basic-react` branch in the same repository.
#### Avoid using `master` branch, since it contains working example of the project.

## What you need to achieve
This is how the app was looking before I ruined everything ...

#### Step 1.  
App starts with a list of available contacts:
![List of Contacts Step 1](https://raw.githubusercontent.com/voogieJames/react-101/exercise1/snapshots/step1.png)

#### Step 2. 
When user clicks to contact, second screen is rendered with more detailed information, pay attention to the "Back" button in the bottom of the page. Which must return you back to the first page.
![List of Contacts Step2](https://raw.githubusercontent.com/voogieJames/react-101/exercise1/snapshots/step2.png)


## Available setup

After cloning the repo you need to start npm project, meaning, download all dependencies(`npm install`) and then you can run following scripts:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### server or dev-server

Contacts list app is fetching data from the glitch server app here: [https://voogie.glitch.me/contacts](https://voogie.glitch.me/contacts)
If by some reason data isn't available, I encourage you to use local *dev-server*
To start local *dev-server* run `npm run dev-server` from the project root folder and make sure that in your application
you're using the following URL: *http://localhost:8686/people*.

#### HAPPY HACKING! 🙌
