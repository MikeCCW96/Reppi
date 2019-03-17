/*const valkyrieDB = require('../database/equipmentdb.json').valkyrie;
const emoji = require('../database/emoji.json').emoji;
const Reppi = require('../reppi.js');
const reactionNumberArrayValkyrie = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣'];
let Discord = null;
let client = null;

function valkyrieSelectedClass(valkyrieNum, valkyrieChosenClass, msg) {
  let valkyrie = '';
  if (valkyrieNum === 1) {
    if (valkyrieChosenClass === 1) {
      valkyrie = 'Kiana Kaslana - White Comet';
    }
    if (valkyrieChosenClass === 2) {
      valkyrie = 'Kiana Kaslana - Ranger'; 
    }
    if (valkyrieChosenClass === 3) {
      valkyrie = 'Kiana Kaslana - Divine Prayer';
    }
    if (valkyrieChosenClass === 4) {
      valkyrie = 'Kiana Kaslana - Knight Moonbeam';
    }
  }

  if (valkyrieNum === 2) {
    if (valkyrieChosenClass === 1) {
      valkyrie = 'Mei Raiden - Crimson Impulse';
    }
    if (valkyrieChosenClass === 2) {
      valkyrie = 'Mei Raiden - Shadow Dash';
    }
    if (valkyrieChosenClass === 3) {
      valkyrie = 'Mei Raiden - Blade Strike';
    }
    if (valkyrieChosenClass === 4) {
      valkyrie = 'Mei Raiden - Lightning Empress';
    }
  }

  if (valkyrieNum === 3) {
    if (valkyrieChosenClass === 1) {
      valkyrie = 'Bronya Zaychik - Chariot';
    }
    if (valkyrieChosenClass === 2) {
      valkyrie = 'Bronya Zaychik - Yamabuki Armor';
    }
    if (valkyrieChosenClass === 3) {
      valkyrie = 'Bronya Zaychik - Snowy Sniper';
    }
    if (valkyrieChosenClass === 4) {
      valkyrie = 'Bronya Zaychik - Dimensional Break';
    }
    if (valkyrieChosenClass === 5) {
      valkyrie = 'Bronya Zaychik - Wolf Dawn';
    }
    if (valkyrieChosenClass === 6) {
      valkyrie = 'Bronya Zaychik - Black Nucleus';
    }
  }

  if (valkyrieNum === 4) {
    if (valkyrieChosenClass === 1) {
      valkyrie = 'Himeko Murata - Battlestorm';
    }
    if (valkyrieChosenClass === 2) {
      valkyrie = 'Himeko Murata - Triumph';
    }
    if (valkyrieChosenClass === 3) {
      valkyrie = 'Himeko Murata - Scarlet Fusion';
    }
    if (valkyrieChosenClass === 4) {
      valkyrie = 'Himeko Murata - Blood Rose';
    }
  }

  if (valkyrieNum === 5) {
    if (valkyrieChosenClass === 1) {
      valkyrie = 'Sakura Yae - Miko';
    }
    if (valkyrieChosenClass === 2) {
      valkyrie = 'Sakura Yae - Flame Sakitama';
    }
    if (valkyrieChosenClass === 3) {
      valkyrie = 'Sakura Yae - Goushinnso Memento';
    }
  }

  if (valkyrieNum === 6) {
    if (valkyrieChosenClass === 1) {
      valkyrie = 'Theresa Apocalypse - Pledge';
    }
    if (valkyrieChosenClass === 2) {
      valkyrie = 'Theresa Apocalypse - Sakuno Rondo';
    }
    if (valkyrieChosenClass === 3) {
      valkyrie = 'Theresa Apocalypse - Violet Executer';
    }
    if (valkyrieChosenClass === 4) {
      valkyrie = 'Theresa Apocalypse - Celestial Hymn';
    }
    if (valkyrieChosenClass === 5) {
      valkyrie = 'Theresa Apocalypse - Luna Kindred';
    }
  }

  if (valkyrieNum === 7) {
    if (valkyrieChosenClass === 1) {
      valkyrie = 'Kallen Kaslana - Imayoh Ritual'
    }
    if (valkyrieChosenClass === 2) {
      valkyrie = 'Kallen Kaslana - Black Wing Nocturne'
    }
  }

  if (valkyrieNum === 8) {
    if (valkyrieChosenClass === 1) {
      valkyrie = 'Fu Hua - Accipiter';
    }
    if (valkyrieChosenClass === 2) {
      valkyrie = 'Fu Hua - Shadow Knight';
    }
    if (valkyrieChosenClass === 3) {
      valkyrie = 'Fu Hua - Phoenix';
    }
    if (valkyrieChosenClass === 4) {
      valkyrie = 'Fu Hua - White Night Herald';
    }
  }

  replyPage(msg, getValkyrieDetail(valkyrie));
}

function valkyrieSelected(valkyrieNum, msg) {
  const currentValkyrieNum = valkyrieNum;
  let embed = '';
  let total = 0;
  if (currentValkyrieNum === 1) {
    embed = {
      color: 6332693,
      title: 'Kiana Kaslana',
      footer: {
        icon_url: 'attachment://attentionicon.PNG',
        text: 'Please press the number below (reaction) to select',
      },
      fields: [{
        name: '----------------',
        value: '1. White Comet\n2. Ranger\n3. Divine Prayer\n4. Knight Moonbeam',
      }],
    };
    total = 4;
  } else if (currentValkyrieNum === 2) {
    embed = {
      color: 6332693,
      title: 'Mei Raiden',
      footer: {
        icon_url: 'attachment://attentionicon.PNG',
        text: 'Please press the number below (reaction) to select',
      },
      fields: [{
        name: '----------------',
        value: '1. Crimson Impulse\n2. Shadow Dash\n3. Bladestrike\n4. Lightning Empress',
      }],
    };
    total = 4;
  } else if (currentValkyrieNum === 3) {
    embed = {
      color: 6332693,
      title: 'Bronya Zaychik',
      footer: {
        icon_url: 'attachment://attentionicon.PNG',
        text: 'Please press the number below (reaction) to select',
      },
      fields: [{
        name: '----------------',
        value: '1. Chariot\n2. Yamabuki Armor\n3. Snowy Sniper\n4. Dimensional Break\n5. Wolf Dawn\n6. Black Nucleus',
      }],
    };
    total = 6;
  } else if (currentValkyrieNum === 4) {
    embed = {
      color: 6332693,
      title: 'Himeko Murata',
      footer: {
        icon_url: 'attachment://attentionicon.PNG',
        text: 'Please press the number below (reaction) to select',
      },
      fields: [{
        name: '----------------',
        value: '1. Battle Storm\n2. Triumph\n3. Scarlet Fusion\n4. Blood Rose',
      }],
    };
    total = 4;
  } else if (currentValkyrieNum === 5) {
    embed = {
      color: 6332693,
      title: 'Sakura Yae',
      footer: {
        icon_url: 'attachment://attentionicon.PNG',
        text: 'Please press the number below (reaction) to select',
      },
      fields: [{
        name: '----------------',
        value: '1. Miko\n2. Fire Sakitama\n3. Goushinnso Memento',
      }],
    };
    total = 3;
  } else if (currentValkyrieNum === 6) {
    embed = {
      color: 6332693,
      title: 'Theresa Apocalypse',
      footer: {
        icon_url: 'attachment://attentionicon.PNG',
        text: 'Please press the number below (reaction) to select',
      },
      fields: [{
        name: '----------------',
        value: '1. Pledge\n2. Sakuno Rondo\n3. Violet Executer\n4. Celestial Hymn\n5. Luna Kindred',
      }],
    };
    total = 5;
  } else if (currentValkyrieNum === 7) {
    embed = {
      color: 6332693,
      title: 'Kallen Kaslana',
      footer: {
        icon_url: 'attachment://attentionicon.PNG',
        text: 'Please press the number below (reaction) to select',
      },
      fields: [{
        name: '----------------',
        value: '1. Imayoh Ritual\n2. Black Wing Nocturne',
      }],
    };
    total = 2;
  } else if (currentValkyrieNum === 8) {
    embed = {
      color: 6332693,
      title: 'Fu Hua',
      footer: {
        icon_url: 'attachment://attentionicon.PNG',
        text: 'Please press the number below (reaction) to select',
      },
      fields: [{
        name: '----------------',
        value: '1. Accipiter\n2. Shadow Knight\n3. Phoenix\n4. White Night Herald',
      }],
    };
    total = 4;
  }

  const reactionNumberArrayValkyrie = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣'];

  msg.reply({
    embed,
    files: [{
      attachment: 'src/images/attentionicon.PNG',
      name: 'attentionicon.PNG',
    }],
  }).then(async (newMessage) => {
    const filter = (reaction, user) =>
      user.id === msg.author.id &&
      reaction.emoji.name === '◀' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '1⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '2⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '3⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '4⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '5⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '6⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '7⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '8⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '9⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '▶' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '❌';
    const collector = newMessage.createReactionCollector(filter, {
      time: 30000
    });
    newMessage.delete(30000).catch(() => {});
    collector.once('collect', async (reaction) => {
      const chosen = reaction.emoji.name;
      for (let i = 0; i < total; i++) {
        const emoji = reactionNumberArrayValkyrie[i];
        const valkyrieChosenClass = i;
        if (chosen === await emoji) {
          newMessage.delete();
          valkyrieSelectedClass(valkyrieNum, valkyrieChosenClass + 1, msg);
        }
      }
      if (chosen === '❌') {
        newMessage.delete();
      }
      collector.stop();
    });
    for (let i = 0; i < total; i++) {
      const emoji = reactionNumberArrayValkyrie[i];
      await newMessage.react(emoji).catch(() => {});
    }
    await newMessage.react('❌').catch(() => {});
  });
}

function valkyrieList(msg) {

  const embed = {
    color: 6332693,
    title: 'Valkyrie List',
    footer: {
      icon_url: 'attachment://attentionicon.PNG',
      text: 'Please press the number below (reaction) to select',
    },
    fields: [{
      name: '----------------',
      value: '1. Kiana Kaslana\n2. Mei Raiden\n3. Bronya Zaychik\n4. Himeko Murata\n5. Sakura Yae\n6. Theresa Apocalypse\n7. Kallen Kaslana\n8. Fu Hua',
    }],
  };
  msg.reply({
    embed,
    files: [{
      attachment: 'src/images/attentionicon.PNG',
      name: 'attentionicon.PNG',
    }],
  }).then(async (newMessage) => {
    const filter = (reaction, user) =>
      user.id === msg.author.id &&
      reaction.emoji.name === '1⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '2⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '3⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '4⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '5⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '6⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '7⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '8⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '❌';
    const collector = newMessage.createReactionCollector(filter, {
      time: 30000
    });
    newMessage.delete(30000).catch(() => {});
    collector.once('collect', async (reaction) => {
      const chosen = reaction.emoji.name;
      for (let i = 0; i < 8; i++) {
        const emoji = reactionNumberArrayValkyrie[i];
        if (chosen === await emoji) {
          newMessage.delete();
          valkyrieSelected(i + 1, msg);
        }
      }

      if (chosen === '❌') {
        newMessage.delete();
      }
      collector.stop();
    });
    await newMessage.react('1⃣').catch(() => {});
    await newMessage.react('2⃣').catch(() => {});
    await newMessage.react('3⃣').catch(() => {});
    await newMessage.react('4⃣').catch(() => {});
    await newMessage.react('5⃣').catch(() => {});
    await newMessage.react('6⃣').catch(() => {});
    await newMessage.react('7⃣').catch(() => {});
    await newMessage.react('8⃣').catch(() => {});
    await newMessage.react('❌').catch(() => {});
  });
}

function valkyrieSearch(msg) {
  const query = msg.content.substr(msg.content.indexOf(' ') + 1);
  if (query.length <= 2) {
    msg.reply('Please search with atleast 3 characters!');
  } else {
    const queryConvertedEscapes = query.replace(/[^a-zA-Z0-9]/g, ' ');
    const queryConvertedSpace = queryConvertedEscapes.replace(/ /g, ')(?=.*');
    const queryConvertedBeginningEnd = `${queryConvertedSpace.replace(/^/g, '(?=.*')})`;

    const regex = new RegExp(queryConvertedBeginningEnd, 'i');
    const indexes = [];
    for (let i = 0; i < valkyrieDB.length; i++) {
      if (JSON.stringify(valkyrieDB[i].name).match(regex)) {
        indexes.push(i);
      }
    }
    const result = [];
    for (let i = 0; i < indexes.length; i++) {
      result.push(valkyrieDB[indexes[i]]);
    }

    if (result.length < 2 && result.length > 0) {

      replyPage(msg, valkyrieDB[indexes[0]]);

    } else if (result.length > 1 && result.length < 10) {
      const reactionNumberArray = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣'];
      let embedValkyrieNames = '';

      for (let i = 0; i < result.length; i++) {
        embedValkyrieNames += `${i + 1}. ${valkyrieDB[indexes[i]].name}\n`;
      }

      const embed = {
        author: {
          name: 'Valkyrie search result',
        },
        color: 6332693,
        title: 'Select a valkyrie',
        footer: {
          icon_url: 'attachment://attentionicon.PNG',
          text: 'Please press the number below (reaction) to select',
        },
        fields: [{
          name: '----------------',
          value: `${embedValkyrieNames}`,
        }],
      };

      msg.reply({
        embed,
        files: [{
          attachment: 'src/images/attentionicon.PNG',
          name: 'attentionicon.PNG',
        }],
      }).then(async (newMessage) => {
        const filter = (reaction, user) =>
          user.id === msg.author.id &&
          reaction.emoji.name === '1⃣' ||
          user.id === msg.author.id &&
          reaction.emoji.name === '2⃣' ||
          user.id === msg.author.id &&
          reaction.emoji.name === '3⃣' ||
          user.id === msg.author.id &&
          reaction.emoji.name === '4⃣' ||
          user.id === msg.author.id &&
          reaction.emoji.name === '5⃣' ||
          user.id === msg.author.id &&
          reaction.emoji.name === '6⃣' ||
          user.id === msg.author.id &&
          reaction.emoji.name === '7⃣' ||
          user.id === msg.author.id &&
          reaction.emoji.name === '8⃣' ||
          user.id === msg.author.id &&
          reaction.emoji.name === '9⃣' ||
          user.id === msg.author.id &&
          reaction.emoji.name === '❌';
        const collector = newMessage.createReactionCollector(filter, {
          time: 30000
        });
        newMessage.delete(30000).catch(() => {});
        collector.once('collect', async (reaction) => {
          const chosen = reaction.emoji.name;
          for (let i = 0; i < result.length; i++) {
            const emoji = reactionNumberArray[i];
            if (chosen === emoji) {
              newMessage.delete();
              if (result.length < 1) {
                msg.reply('please do not add reaction by yourself.');
              } else {
                replyPage(msg, valkyrieDB[indexes[i]]);
              }
            }
          }

          if (chosen === '❌') {
            newMessage.delete();
          }
          collector.stop();
        });

        for (let i = 0; i < result.length; i++) {
          await newMessage.react(reactionNumberArray[i]).catch(() => {});
        }

        await newMessage.react('❌').catch(() => {});

      });

    } else if (result.length > 9) {
      msg.reply('Too many results! Be specific with your search!');
    } else if (result.length < 1) {
      msg.reply('No valkyrie found.');
    }
  }
}

function setDiscordClient(DiscordGet, clientGet) {
  Discord = DiscordGet;
  client = clientGet;
}

function getEmojiId(emojiName) {
  for (let i = 0; i < emoji.length; i++) {
    if (emoji[i].name === emojiName) {
      return emoji[i].id;
    }
  }
}

function getValkyrieDetail(valkyrieName) {
  for (let i = 0; i < valkyrieDB.length; i++) {
    if (valkyrieDB[i].name === valkyrieName) {
      return valkyrieDB[i];
    }
  }
}

function getValkyrieType(valkyrieName) {
  const getValk = getValkyrieDetail(valkyrieName);
  return getValk.type;
}

function replyPage(msg, valkyrie, page = 'weapon') {
  const equipment = valkyrie.equipment;
  const team = valkyrie.team;
  let embedField = [];

  if (page == 'weapon') {
    for (let i = 0; i < equipment.length; i++) {
      embedField.push({
        name: `\u200b`,
        value: `\n\n<:weapon${valkyrie.weapontype}:${getEmojiId('weapon' + valkyrie.weapontype)}> ${equipment[i].weapon}
         <:stigmatatop:${getEmojiId('stigmatatop')}> ${equipment[i].stigmatatop}
         <:stigmatamiddle:${getEmojiId('stigmatamiddle')}> ${equipment[i].stigmatamiddle}
         <:stigmatabottom:${getEmojiId('stigmatabottom')}> ${equipment[i].stigmatabottom}
         <:reppidescription:${getEmojiId('reppidescription')}> ${equipment[i].description}`,
        inline: true
      });
    }
  } else {
    for (let i = 0; i < team.length; i++) {
      embedField.push({
        name: `\u200b`,
        value: `\n\n<:valkyrie${getValkyrieType(team[i].valk1)}:${getEmojiId('valkyrie' + getValkyrieType(team[i].valk1))}> ${team[i].valk1}
         <:valkyrie${getValkyrieType(team[i].valk2)}:${getEmojiId('valkyrie' + getValkyrieType(team[i].valk2))}> ${team[i].valk2}
         <:valkyrie${getValkyrieType(team[i].valk3)}:${getEmojiId('valkyrie' + getValkyrieType(team[i].valk3))}> ${team[i].valk3}
         <:reppidescription:${getEmojiId('reppidescription')}> ${team[i].description}`,
        inline: true
      });
    }
  }

  const embed = {
    color: 0x00AE86,
    title: `<:valkyrie${valkyrie.type}:${getEmojiId('valkyrie' + valkyrie.type)}> ` + valkyrie.name,
    footer: {
      icon_url: 'attachment://attentionicon.PNG',
      text: 'Please press the number below (reaction) to select',
    },
    thumbnail: {
      url: valkyrie.thumbnail,
    },
    fields: embedField,
    footer: {
      text: 'Click the button below for team formation. (Expires in 30 seconds)',
    },
  };

  msg.reply({
    embed
  }).then(async (newMessage) => {
    const filter = (reaction, user) =>
      user.id === msg.author.id &&
      reaction.emoji.name === '1⃣';
    const collector = newMessage.createReactionCollector(filter, {
      time: 30000
    });
    collector.once('collect', async (reaction) => {
      const chosen = reaction.emoji.name;

      if (chosen === reactionNumberArrayValkyrie[0]) {
        newMessage.delete();
        if (page == 'weapon'){
          replyPage(msg, valkyrie, 'team');
        } else {
          replyPage(msg, valkyrie, 'weapon');
        }
      }
      collector.stop();
    });

    await newMessage.react(reactionNumberArrayValkyrie[0]).catch(() => {});

    setTimeout(function() {
      if (newMessage.deleted == false) {
        newMessage.clearReactions().catch(() => {});
      }
    }, 30000);

  });;
}

exports.valkyrieList = valkyrieList;
exports.valkyrieSearch = valkyrieSearch;
exports.setDiscordClient = setDiscordClient;*/