import axios from 'axios';
const key = process.env.API_KEY;


function getLanguageVideos(req, res) {
axios.get(`https://www.googleapis.com/youtube/v3/search/?part=snippet&type=video&maxResults=5&q=${req.query.youtuber}+${req.query.language}&key=${key}`)
.then((response) => {
  res.send(response.data);
})
.catch((err) => console.log(err))
}

export default getLanguageVideos