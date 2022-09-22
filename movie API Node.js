https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
//create a project directory
mkdir movieTutorial && cd movieTutorial
//Set up a new npm package by writing the command below on your terminal
npm init -y
//Install the the following dependecies from the command below
npm  install express path body-parser ejs request --save
//Let’s install nodemon globally to monitor changes on our source and save us some time during development by running the code below.
npm install -g nodemon


//initialize the modules
//Depending on how you will name your entry point of your web application, initialize the modules with the code below
//index.js
const express = require('express');
const path = require('path');
const request = require('request');

const app = express();

//EJS as the template engine, add the code below to set and use EJS as the default template engine.
//index.js
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//server static file
mkdir public
//Likewise on index.js file add the code below to enable the server to gain access of the the public directory assets
app.use(express.static('public'));
//On our home directory, write the command below to create a views directory where our EJS templates will reside.

mkdir views

// makiing the express JS Routes
//index.js
app.get('/', (req, res)=>{
    res.render('search');
})


const port = process.env.PORT || 8080;
app.get(port, ()=>{
    console.log(`Server started on port: ${port}`);
})
/*Inside the views directory create a file. I will call mine search.ejs then copy and paste the code below.

or you can run the command cd views && touch search.ejs on your terminal then paste the code below into search.ejs*/

<!-- Save this file with .ejs extension -->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>movieTutorial</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/bootstrap-4.5.2-dist/css/bootstrap.min.css">  
</head>
<body class="bg-dark">
    <!-- Navbar begins here -->
    
        <nav class="nav navbar-expand-sm bg-secondary navbar-secondary">
            <span class="container">
                <a class="navbar-brand" href="/">
                    <img src="/images/n.png" alt="Logo" style="width: 40px;">
                </a>
            </span>
            
        </nav>
    

    <!-- container begins here-->
    <div class="container pt-5">
        <!-- Jumbotron begins here -->
        <div class="pt-5">
            <div class="text-center text-warning p-3">
                <h2>Search for movies, actors and directors</h2>
            </div>
            <div class="">
                <form action="/result" method="GET" class="justify-content-center d-flex">
                    <input type="text" name="search" class="form-control w-25 bg-dark text-white" value="Avengers">
                    <input type="submit" class="btn btn-warning ml-2" value="Search">
                </form>
            </div>
        </div>
        <!-- jumbotron ends here -->
    </div>
    <!-- container ended here -->
 
<!-- scripts begin here -->
    <script src="/bootstrap-4.5.2-dist/js/bootstrap.min.js"></script>
</body>
</html>
