require('dotenv').config()
const axios = require('axios');

const livepeerAPI = process.env.REACT_APP_LP_API_KEY;
console.log(livepeerAPI);

export const generateURL = async (video) => {
    const response = await axios.post(
      "https://livepeer.studio/api/asset/request-upload", {name: "Example name"},
      {
        headers: {
          Authorization: "Bearer eb325b5e-2b20-4e87-8880-fc62cc75cb49",
          "Content-Type": "application/json",
        },
        // data: JSON.stringify({
        //   name: "Example name",
        // }),
      }
    );
    console.log(response.data.asset.playbackId)
   return await uploadAsset(response.data.url, video, response.data.asset.playbackId)
    
  };

  const exportAsset = async () => {
    const response = await axios.post(
      "https://livepeer.studio/api/asset/$ASSET_ID/export", {ipfs: {}},
      {
        headers: {
          Authorization: `Bearer ${process.env.LP_API_KEY}`,
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          ipfs: {},
        }),
      }
    );
    const taskId = response.data.task.id;
    //https://livepeer.studio/api/task/$TASK_ID
  };

  export const uploadAsset = async (url, file, id) => {

    const response = await axios
      .put(`${url}`, file,
        {headers: {
          Authorization: `Bearer ${livepeerAPI}`,
          "Content-Type": "video/mp4"
        }}
      );
      console.log(response)
        return id;
      };