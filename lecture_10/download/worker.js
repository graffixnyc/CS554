const redisConnection = require("./redis-connection");
const axios = require("axios");

const gistUrl =
  "https://gist.githubusercontent.com/philbarresi/5cf15393d245b38a2d86ce8207d5076c/raw/d529fb474c1af347702ca4d7b992256237fa2819/lab5.json";
let computedResults = null;

redisConnection.on("showResults", (data, channel) => {
  const sendResults = () => {
    if (computedResults === null) {
      console.log("Results not computed yet!!!")
      setTimeout(sendResults, 5000);
    } else {
      console.log (computedResults)
      redisConnection.emit("results-completed", { results: computedResults });
    }
  };

  sendResults();
});

redisConnection.on("computeResults", async (data, channel) => {
  
  
  console.log ("In compute");
  if (computedResults !== null) return;

  const gist = await axios.get(gistUrl);
  const gistResults = gist.data;
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const alphabet = [];
  for (const index in letters) {
    alphabet.push(letters[index]);
  }

  const countOfLettersStartingName = {};
  alphabet.forEach(letter => {
    countOfLettersStartingName[letter] = 0;
  });

  gistResults.forEach(result => {
    const { first_name } = result;
    const lowerFirstName = first_name.toLowerCase();
    const firstLetter = lowerFirstName[0];
    countOfLettersStartingName[firstLetter]++;
  });

  computedResults = countOfLettersStartingName;
});
