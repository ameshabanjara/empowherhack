require('dotenv').config();
const cors = require('cors');
const express = require('express');
const axios = require('axios');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = process.env.port || 5001;

//Middleware
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post('/api/submit-quiz', async (req, res) => {
    const { answers } = req.body;
    console.log(answers);
    const prompt = `
    
    Determine the best career path based on these answers from our user:
     ${JSON.stringify(answers)}. 


     Below is a list of the different career paths you can choose from, start in quotation marks: "
     1. ui/ux design
     2. software development
     3. quantitative finance
     4. cybersecurity
     5. tech consulting
     6. cloud
     7. information technology
     8. game development
     9. ai/ml development"
    Analyse the answers of the user and determine what career path is most likely their favorite. 
    Please return the number associated with the career path and nothing more. No whitespace, no symboles, just 
    the career itself such as "1" for ui/ux design or "2" for software development. Thank you!
     `;
    console.log(JSON.stringify(answers));

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.json({ careerPath: text });
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).send('Error generating content');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});