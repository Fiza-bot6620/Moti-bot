const fs = requirerequire("fs");
module.exports.config = {
  name: "chawmeen",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("chawmin") ||
     react.includes("Chawmin") || react.includes("chowmin") || react.includes("Chowmin") ||
react.includes("chomin") ||
react.includes("Chomin") ||     
react.includes("Chawmeen")) {
    var msg = 
        body: `${name} 𝐋𝐨 𝐁𝐀𝐁𝐘  𝐁𝐈𝐑𝐘À𝐍𝐈 𝐊𝐇À𝐎💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/chawmeen.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }