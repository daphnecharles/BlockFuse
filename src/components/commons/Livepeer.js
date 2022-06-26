const axios = require('axios');

const generateURL = async (video) => {
    const response = await axios.post(
      "https://livepeer.studio/api/asset/request-upload",
      {
        headers: {
          Authorization: `Bearer ${process.env.LP_API_KEY}`,
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          name: "Example name",
        }),
      }
    );
    console.log();
    uploadAsset(JSON.stringify(response.data))
  };



  const uploadAsset = async (url) => {

    const response = await axios
      .put("${url}", {
        headers: {
          Authorization: `Bearer ${process.env.LP_API_KEY}`,
          "Content-Type": "video/mp4"
        },
        data: fs.createReadStream(path)
      });
        console.log(JSON.stringify(response.data));
      };