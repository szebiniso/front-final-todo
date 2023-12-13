import axios from "axios";

export const getEmoji = (name, setEmoji) => {
  axios(`https://api.api-ninjas.com/v1/emoji?name=${name}`,
    {
      headers: {'X-Api-Key': 'SkpLSII47np9og6apK/+9A==bnHcp6L6YkwmhNrs'},
      contentType: 'application/json'
    })
    .then(result => {
      console.log(result.data)
      setEmoji(result.data)
    }).catch((error) => {
    console.log(error)
  })
}