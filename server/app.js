const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
const port = 3001;

const upload = multer({ dest: 'uploads/' });
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function getGeminiResponse(prompt) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();
  return text;
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', upload.single('resume'), async (req, res) => {
  const jd = req.body.jd;
  const resumePath = req.file.path;

  try {
    const dataBuffer = fs.readFileSync(resumePath);
    const pdfText = await pdfParse(dataBuffer);


    const atsPrompt = `
You are an experienced Application Tracking System (ATS) specializing in the technology field. Evaluate the following resume against the provided job description. Assign a percentage match and provide a rating comment like AMAZING, GOOD, WELL, WORST, NEED IMPROVEMENT (in brackets only).

Resume: ${pdfText.text}
Job Description: ${jd}

ATS Score: % (Comment)
JUST GIVE THE PERCENTAGE AND COMMENT ONLY NOTHING ELSE JUST ONE PERCENTAGE AND ONE WORD ONLY
`;

    const suggestionsPrompt = `
You are an experienced Application Tracking System (ATS) specializing in the technology field. Provide suggestions to improve the following resume based on the provided job description.

Resume: ${pdfText.text}
Job Description: ${jd}
(REMOVE ALL THE # and * STRICLTLY)
Suggestions for improvement:
1.
2.
IN ONLY 60 WORDS ONLY.
`;

    const summaryPrompt = `
You are an experienced Application Tracking System (ATS) specializing in the technology field. Provide a very short profile summary of the following resume based on the provided job description.

Resume: ${pdfText.text}
Job Description: ${jd}

Profile Summary:
IN ONLY 2 LINES MAXIMUM
`;


    const atsResponse = await getGeminiResponse(atsPrompt);
    const suggestionsResponse = await getGeminiResponse(suggestionsPrompt);
    const suggestionsResponse = response.replace(/\*\**/g, '').replace(/##/g, '-');
    const summaryResponse = await getGeminiResponse(summaryPrompt);
    const summaryResponse = response.replace(/\*\**/g, '').replace(/##/g, '-');
    

    res.json({
      atsScore: atsResponse,
      suggestions: suggestionsResponse,
      profileSummary: summaryResponse
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    fs.unlinkSync(resumePath);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
