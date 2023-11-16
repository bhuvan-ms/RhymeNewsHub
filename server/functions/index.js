const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const fetch = require("node-fetch");
const { OpenAIAPI } = require('openai');
require('dotenv').config();

const openai = new OpenAIAPI({ key: process.env.OPENAI_API_KEY });

exports.getRandomData = functions.https.onRequest(async (request, response) => {
  try {
    const headline  = request.query.headline;
    if (!headline) {
      response.status(400).json({ error: 'Headline is required.' });
      return;
    }
    const openaiResponse = await openai.chat.completions.create({
      messages: [{ role: "system", content: `Create a mini rhymes to the following sentence: ${headline}` }],
      model: "gpt-3.5-turbo",
    });

    const rhymedText = openaiResponse.choices[0].message;

    response.status(200).json({ headline, rhymedText });
  } catch (error) {
    logger.error("Error fetchig data:", error);
    console.error("Error fetching data:", error);
    response.status(500).send("Internal Server Error");
  }
});
