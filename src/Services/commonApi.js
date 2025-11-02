import axios from "axios";

const commonApi = async (method, url, reqBody) => {
  let configObj = {
    method: method,
    url: url,
    data: reqBody,
  };

  return await axios(configObj)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default commonApi;
