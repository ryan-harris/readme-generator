const axios = require("axios");

require("dotenv").config();

const api = {
  getUser(username) {
    const url = `https://api.github.com/users/${username}`;
    const header = process.env.TOKEN
      ? {
          headers: { Authorization: `token ${process.env.TOKEN}` }
        }
      : {};
    return axios.get(url, header).then(response => response.data);
  }
};

module.exports = api;
