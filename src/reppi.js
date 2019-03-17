const Discord = require('discord.js');

const client = new Discord.Client();
const standardGacha = require('./commands/standardGacha.js');
const valkyrie = require('./commands/valkyrie.js');
const weapon = require('./commands/weapon.js');
const stigmata = require('./commands/stigmata.js');

const talkedRecently = new Set();

client.login(process.env.DISCORD_API_KEY);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {

  if (msg.content === '!gacha') {
    msg.reply("Gacha is no longer available")
    /*
    if (talkedRecently.has(msg.author.id)) {
      msg.reply("slow down!")
    } else {
      talkedRecently.add(msg.author.id);
      setTimeout(() => {
        talkedRecently.delete(msg.author.id);
      }, 7000);
      standardGacha.gachaStart(msg);
    }*/
  }


  if (msg.content.startsWith('!v')) {
    msg.reply("Valkyrie list is no longer available")
    /*
    const message = msg.content.substr(msg.content.indexOf(' ') + 1);
    if (message.startsWith('!v')) {
      valkyrie.setDiscordClient(Discord, client);
      valkyrie.valkyrieList(msg);
    } else {
      valkyrie.setDiscordClient(Discord, client);
      valkyrie.valkyrieSearch(msg);
    }*/
  }

  if (msg.content.startsWith('!w')) {
    const message = msg.content.substr(msg.content.indexOf(' ') + 1);
    if (message.startsWith('!w')) {
      weapon.weaponList(msg);
    } else {
      weapon.weaponSearch(msg);
    }
  }

  if (msg.content.startsWith('!s')) {
    const message = msg.content.substr(msg.content.indexOf(' ') + 1);
    if (message.startsWith('!s')) {
      stigmata.stigmataMenu(msg);
    } else {
      stigmata.stigmataSearch(msg);
    }
  }
});