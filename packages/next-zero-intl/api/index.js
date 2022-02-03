const translate = require('@vitalets/google-translate-api')

const handleTranslation = async (req, res) => {
  if (req.method === 'POST') {
    // Process a POST request
    const text = req.body.text
    const toTranslate = req.body.toTranslate

    const data = await translate(text, { to: toTranslate })
    const translatedText = await data.text

    res.status(200).json({ translatedText })
  } else {
    // Handle any other HTTP method
    res.status(200).json({ error: 'this route is POST only' })
  }
}

module.exports = { handleTranslation }
