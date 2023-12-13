import axios from "axios";

export const generateRandomTask = (setRandomTask) => {
  axios(`https://dummyjson.com/todos/random`,
    {
      contentType: 'application/json'
    })
    .then(result => {
      console.log(result.data)
      setRandomTask(result.data)
    }).catch((error) => {
    console.log(error)
  })
}