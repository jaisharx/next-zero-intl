const getTranslatedText = async (str, locale) => {
  const postData = {
    text: str,
    toTranslate: locale,
  }

  const data = await fetch('/api/translate', {
    method: 'POST',
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
    body: JSON.stringify(postData),
  })

  const text = await data.json()
  const translatedText = await text.translatedText
  return translatedText
}

export { getTranslatedText }
