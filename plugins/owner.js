const { command, isPrivate } = require("../lib/");
command(
  {
    pattern: "owner",
    fromMe: isPrivate,
    desc: "developer vcard",
    type: "user",
  },
  async (message, match, m, client) => {
  const zeta = {
  'contacts': {
    'displayName': "𝘼𝙉𝙅𝘼𝙉-𝐗𝐃",
    'contacts': [{
      'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:𝘼𝙉𝙅𝘼𝙉-𝐗𝐃\nORG:Zeta-XD;\nTEL;type=CELL;type=VOICE;waid=919747257996:919747257996\nEND:VCARD"
    }]
  },
  'contextInfo': {
    'externalAdReply': {
      'title': "𝘼𝙉𝙅𝘼𝙉-𝐗𝐃",
      'body': "𝐌𝐫.𝐚𝐧𝐣𝐚𝐧👀🦋",
      'thumbnailUrl': "https://i.imgur.com/xJV2r3g.jpeg",
      'mediaType': 0x1,
      'mediaUrl': "http://wa.me/+919883457657?text=Hi+Anjan-Ser+Im+From+Anjan-XD+Git",
      'sourceUrl': "http://wa.me/+919883457657?text=Hi+Anjan-Ser+Im+From+Anjan-XD+Git",
      'showAdAttribution': false
    }
  }
};
message.client.sendMessage(message.jid, zeta, {
  quoted: message
});
}
);
