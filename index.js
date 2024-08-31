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

const APIS = {quote:{API_URL : "https://programming-quotesapi.vercel.app/api/random", Auth : "No" , API_Key:null, userName: null, password:null},
            "evilInsult":{API_URL : "https://evilinsult.com/generate_insult.php?lang=en&type=json", Auth : "No" , API_Key:null, userName: null, password:null}
}

function getAuthVars (API_Data){
    const currentAPI_URL = API_Data["API_URL"];
    const authMethod = API_Data["Auth"];
    const APIKey = API_Data["API_Key"];
    const APIUserName = API_Data["userName"];
    const APIPassword = API_Data["password"];
    return [currentAPI_URL,authMethod,APIKey,APIUserName,APIPassword]
}

//setting up the home page
app.get("/", (req , res) => {
    res.render("index.ejs");
})
//This is the get method to render the programming quote API
app.get("/quotes", async (req , res) => {
    const API_Data = APIS["quote"]
    const [API_URL, APIAuth, APIKey,APIUserName,APIPassword] = getAuthVars(API_Data);
    if (APIAuth === "No") {
        try {
            const response = await axios(API_URL);
            const result = response.data;
            console.log(result)
            res.render("quotes.ejs",{"quote":result.quote, "author":result.author});
        } catch (error) {
            res.render("quotes.ejs",{"error":error});
        }
        
    }
})

app.get("/evil-insult-generator", async (req , res) => {
    const API_Data = APIS["evilInsult"]
    const [API_URL, APIAuth, APIKey,APIUserName,APIPassword] = getAuthVars(API_Data);
    if (APIAuth === "No") {
        try {
            const response = await axios(API_URL);
            const result = response.data;
            console.log(result)
            res.render("evil-insult-generator.ejs",{createdby:result.createdby, "insult":result.insult});
        } catch (error) {
            res.render("evil-insult-generator.ejs",{"error":error});
        }
        
    }
})



app.listen(port , ()=>{
    console.log(`Server running on Port ${port}.`);
    
})

