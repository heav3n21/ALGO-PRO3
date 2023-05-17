const router = require('express').Router();

require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);
router.post("/find-complexity", async (req, res) => {

  try{
    const { prompt } = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt:` Pretend you are a programming teacher.  Only answer programming questions. Do not answer or engage if it is not programming related
      Algorithm Type: ${prompt}
      
     `,
      max_tokens: 50,
      temperature: 0.5,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })
    const responseData = response.data.choices[0].text.trim().replace(/\n/g, "");
    return res.status(200).json({
      success: true,
      data: responseData
    });
  } catch(error){
    return res.status(400).json({
      success: false,
      error: error.response
      ? error.response.data
      : "There was an issue on the server"
    });

  }
})
// const port = process.env.PORT || 5000;
// app.listen(port, ()=> console.log(`Server listening on port ${port}`));

module.exports = router;