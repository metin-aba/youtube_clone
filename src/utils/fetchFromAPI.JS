import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
    maxResults:50
  },
  headers: {
    "X-RapidAPI-Key": "a19e947183msh876dad8b76bb545p1ba05ajsn8a24bde87fde",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
