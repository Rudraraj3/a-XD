const { command } = require("../lib/");
const axios = require("axios");
command(
    {
        pattern: "script",
        fromMe: false,
        desc: "𝐌𝐫-𝐚𝐧𝐣𝐚𝐧 repo",
        type: "user",
    },
    async (message, match, m, client) => {
        let { data } = await axios.get('https://api.github.com/repos/Mranjan101/Mr.anjanbot')
        let cap = `\n*𝐌𝐫 𝐚𝐧𝐣𝐚𝐧*🔋

*𝐒͓ɪ͛ᴍ͛ᴩ͛ʟ͛ᴇ᷍ 𝐖ʜ͛ᴀ͛ᴛ͛ꜱ͛ᴀ͛ᴩ͛ᴩ᷍ 𝚳͓ᴜ̟̽ʟ̟ᴛ̽ɪ͛ 𝐃̟͛ᴇ͛ᴠ͛ɪ͛ᴄ͛ᴇ͛ 𝚩͓ᴏ͛ᴛ͛ 𝚩̟ᴀ͛ꜱ͛ᴇ͛ᴅ͛*🖥️

*𝚪⃯ᴇ͛ᴩ͛ᴏ͛ 𝐔͍ʀ͛ʟ͛* : ````https://github.com/Mranjan101/Mr.anjanbot````

❒ *𝐅͍ᴏ͛ʀ͛ᴋ͛ 𝚫ɴ͛ᴅ͛ 𝐒͓̽ᴛ͛ᴀ̟ʀ̟*

*𝐅ᴜ͛ʟ͛ʟ ͛𝚯ᴩ͛͢ᴇɴ͛ 𝐒ᴏ͛ᴜ͛ʀ͍͛ᴄ͛ᴇ͛*

➫ ```

*𝚻⃯͓ʜ⃯͛ᴀ͛ɴ⃯͛ᴋ͛ꜱ͛*🦋

*➫ 𝐒͍ᴜ͛ᴩ͛ᴩ͛ᴏ͛ʀᴛ̟᷍ 𝐆ʀ͛͢ᴏ͛ᴜ͛ᴩ͍͛*

````https://chat.whatsapp.com/CoCndi4zxwdAaSx3QfUEjW````\n`
        
        return await message.client.relayMessage(message.jid,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 699999000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: cap,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
          });
