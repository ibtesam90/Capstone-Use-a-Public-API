import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

//creating an app from the express.
const app = express();
const port = 3000;

//setting up the public folder for css and images
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

//setting up the home page
app.get("/", (req , res) => {
    res.render("index.ejs");
})
//This is the get method to render the programming quote API
app.get("/programming-quote", (req , res) => {
    res.render("programming-quote.ejs");
})



app.listen(port , ()=>{
    console.log(`Server running on Port ${port}.`);
    
})