const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, Util } = require("discord.js");
const fs = require("fs");
const db = require('quick.db'); 
require("./util/eventLoader")(client);

client.ayarlar = { 
"token": "NzkxNzk0Nzc1NTAxMDQ1ODEz.X-UWWQ.mErcRF44joknVszQCSFzruKb3ZU", // token
"prefix": "s+", // prefix
"sahip": "689789901000278088",// sahip  
}
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  const data = require('quick.db');
  console.log('')
  console.log(`${files.length} kadar komut yüklenecek.`)
 files.forEach(async f => {
    let props = require(`./commands/${f}`);
    console.log(`Yüklendi: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
  console.log('')

});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.permissions.has("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.permissions.has("BAN_MEMBERS")) permlvl = 2;
  if (message.member.permissions.has("ADMINISTRATOR")) permlvl = 2;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g

client.login(client.ayarlar.token);
const moment = require('moment');
moment.locale('tr');
const { S_IFREG } = require("constants");
const data = require('quick.db');


client.on('', async () => {
client.user.setStatus('online');
console.log(`${client.user.username} ismiyle bağlandım.`);
})

client.on('message', async message => {
if(message.channel.type !== 'text') return;
const datas = await data.fetch(`tag.${message.guild.id}`);
if(message.content.toLowerCase().toString().includes('tag')) {
if(datas) return message.channel.send('`'+datas+'`');
};
});

client.on('message', async message => {
if(message.channel.type !== 'text') return;
if(message.author.bot) return;
if(message.content.startsWith(client.ayarlar.prefix+'afk')) return;
if(message.mentions.members.first()) {
let mention = message.mentions.members.first();
const est = await data.fetch(`kullanıcı.${mention.id}.${message.guild.id}`);
if(est) {
message.channel.send(new Discord.MessageEmbed().setThumbnail(mention.user.avatarURL() ? mention.user.avatarURL({dynamic: true}) : '')
.setTitle('Tıkladığın Kullanıcı AFK').setDescription(` \n**• __Sebep;__ \`${est}\`**`));
}
}
const stat = await data.fetch(`name.${message.author.id}.${message.guild.id}`);
if(stat) {
message.member.setNickname(stat);
data.delete(`kullanıcı.${message.author.id}.${message.guild.id}`);
data.delete(`name.${message.author.id}.${message.guild.id}`);
message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} **Cihaz üzerine tekrardan hoş geldin!**`));
}
})

client.on('message', async message => {
  if(message.channel.type !== 'text') return;  const küfür = await data.fetch(`küfür.${message.guild.id}`);
  if(!küfür) return;
  const blacklist = ["ananın amı","oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];
  const uyarılar = [
  'İt is Haram bRo! 🤥',
  'Az düzgün konuş günaha girme! 🤧',
  'Aaaa ayıp dostum! 🥴',
  'Vayy ahlaksız çocuk! 🙀',
  'Tövbesteyşin! 🤫'];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  let content = message.content.split(' ');
  
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(message.member.permissions.has('BAN_MEMBERS')) return;
  message.delete();
  message.channel.send(new Discord.MessageEmbed().setTitle('Küfür Kısıtlı').setDescription(`${message.author} ${uyarımesaj}`));
  }
  })
  
  });
  client.on('roleDelete', async role => {
  const sistem = await data.fetch(`korumalar.${role.guild.id}`);
  if(!sistem) return;
  
  let guild = role.guild;
  const entry = await guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());
  let member = entry.executor;
  
  if(member.id == guild.owner.user.id) return;
  let yetkili = guild.members.cache.get(member.id);
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('MANAGE_ROLES')) return member.roles.remove(s.id);
  })
  });
  
  client.on('roleUpdate', async (oldRole, newRole) => {
  const sistem = await data.fetch(`korumalar.${newRole.guild.id}`);
  if(!sistem) return;
  
  let guild = newRole.guild;
  const entry = await guild.fetchAuditLogs({ type: "ROLE_UPDATE" }).then(audit => audit.entries.first());
  let member = entry.executor;
  
  if(oldRole.permissions.has('ADMINISTRATOR') && newRole.permissions.has('ADMINISTRATOR')) {
  if(member.id == guild.owner.user.id) return;
  let yetkili = guild.members.cache.get(member.id);
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('ADMINISTRATOR')) return member.roles.remove(s.id);
  })
  }
  });
  
  client.on('guildBanAdd', async member => {
  const sistem = await data.fetch(`korumalar.${member.guild.id}`);
  if(!sistem) return;
  
  let guild = member.guild;
  const entry = await guild.fetchAuditLogs({ type: "MEMBER_BAN_ADD" }).then(audit => audit.entries.first());
  let yetkili = entry.executor;
  
  if(yetkili.id == guild.owner.user.id) return;
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('BAN_MEMBERS')) return yetkili.roles.remove(s.id);
  })
  guild.members.unban(member.id);
  })
  client.on('channelDelete', async channel => {
  const sistem = await data.fetch(`korumalar.${channel.guild.id}`);
  if(!sistem) return;
  
  let guild = channel.guild;
  const entry = await guild.fetchAuditLogs({ type: "CHANNEL_DELETE" }).then(audit => audit.entries.first());
  let member = entry.executor;
  
  if(member.id == guild.owner.user.id) return;
  let yetkili = guild.members.cache.get(member.id);
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('MANAGE_CHANNELS')) return yetkili.roles.remove(s.id);
  })
  
  channel.clone({ name: channel.name });
  })
  
  client.on('emojiDelete', async emoji => {
  const sistem = await data.fetch(`korumalar.${emoji.guild.id}`);
  if(!sistem) return;
  
  let guild = emoji.guild;
  const entry = await guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
  let member = entry.executor;
  
  if(member.id == guild.owner.user.id) return;
  let yetkili = guild.members.cache.get(member.id);
  yetkili.roles.cache.forEach(s => {
  if(s.permissions.has('MANAGE_EMOJIS')) return yetkili.roles.remove(s.id);
  })
  
  guild.emojis.create(emoji.url, emoji.name);
  })

  client.on('message', async message => {
    if(message.channel.type !== 'text') return;
  const reklam = await data.fetch(`reklam.${message.guild.id}`);
  if(!reklam) return;
  const blacklist = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg"];
  const uyarılar = [
  'Kesinlikle yapma bunu okey? ♿',
  'Seni gidi çakal seni hıı! 🍌',
  'Ooo sanırım kendisini uyanık sandı? 🐍',
  'Şşş reklam kötü bir şey dostum! 🎭',
  'Haddini bil ya da çık git sunucudan! ⚰️'
  ];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  if(blacklist.some(a => message.content.includes(a)))  {
  if(message.member.permissions.has('BAN_MEMBERS')) return;
  message.delete();
  message.channel.send(new Discord.MessageEmbed().setTitle('Reklam Kısıtlı').setDescription(`${message.author} ${uyarımesaj}`));
  }
  
  });

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.length >= 5) {

const caps = await data.fetch(`caps.${message.guild.id}`);
if(!caps) return;

let kontrol = message.content.toUpperCase()
if(message.content === kontrol) {

if(message.member.permissions.has('BAN_MEMBERS')) return;
if(message.mentions.users.first()) return;

return message.delete();

}}});

client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.toLocaleLowerCase() === 'sa') {
const selamlar = await data.fetch(`selams.${message.guild.id}`);
if(!selamlar) return;

return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} **<a:pikachu:743866375918845993> ve Aleyküm selam, Hoş Geldin!**`));
}});
client.on('guildMemberAdd', async member => {
let user = member.user;
let guild = member.guild;

const systemTagData = await data.fetch(`ototag.${guild.id}`);
const systemChannelData = await data.fetch(`ototag.log.${guild.id}`);
const systemNameData = await data.fetch(`otoisim.${guild.id}`);
if(!systemNameData) return;

let systemChannel;
if(systemChannelData) systemChannel = guild.channels.cache.get(systemChannelData);

let systemTag;
if(systemTagData) systemTag = String(systemTagData);

let replacedName;
if(systemTag) {
replacedName = systemNameData.replace('+kullanıcı', user.username).replace('+tag', systemTag);
} else {
replacedName = systemNameData.replace('+kullanıcı', user.username);
};

member.setNickname(replacedName);
if(systemChannel) systemChannel.send(`${member} giriş yaptı. Değişiklik: ${user.username} -> ${replacedName}`);
});

client.on("message",async msg =>{
if(msg.author.bot) return
if(!msg.guild) return
if(msg.content == "lilu kızlara yürüyenlere napalım") {
msg.channel.send("Anasını Şikita Şikita Muz...")
}


})
client.on("guildMemberAdd", async member => {
  let girenKisi = client.users.cache.get(member.id);
  let girisKanal = client.channels.cache.get(db.fetch(`hgK_${member.guild.id}`));
  let Güvenli = `${member} **Güvenli!** <a:tik09:791819481508610079>`;
  let Şüpheli = `${member} **Tehlikeli!** <a:carpi09:791819481802211338>`;

   var ce1 = ['**Umarım Çay Getirmişsindir.**', '**Sen Geldiğine Göre Parti Başlıyabilir.**', '**Geldiğine Çok Sevindik.**', '**Merhaba desene!**', '**Hepimiz Seni Bekliyorduk.**']

   var mesaj = ce1[Math.floor((Math.random() * ce1.length))];

  var ce2 = ['https://cdn.discordapp.com/attachments/778664970686038087/780099520067272734/19.gif','https://media.giphy.com/media/3o6ZtluYTKJeXXqt8s/giphy.gif','https://media.discordapp.net/attachments/766342468576608318/766343451994226778/af8039261a387be71514bb4c2e5e54b5.gif','https://cdn.discordapp.com/attachments/606802945820065795/609028769893842944/hg.gif','https://cdn.discordapp.com/attachments/778664970686038087/780099509106769950/4.gif', 'https://cdn.discordapp.com/attachments/778664970686038087/780099446016311306/10.gif', 'https://cdn.discordapp.com/attachments/740643026019287201/758065112644059249/1.gif','https://i.pinimg.com/originals/dc/76/30/dc76307fd5ccd15e33e56f48f98da2e7.gif','https://media2.giphy.com/media/YO5e7gmuBuwFygt3g9/source.gif','https://data.whicdn.com/images/316564249/original.gif','https://i.pinimg.com/originals/76/0d/f8/760df8abd511e95a817ac1058e030c8f.gif','https://i.pinimg.com/originals/ca/fb/43/cafb4356cba075434bd5bdfd7be4a819.gif','https://media.giphy.com/media/3HCuWL0Ox0Q3C/giphy.gif']

   var mesajresim = ce2[Math.floor((Math.random() * ce2.length))];

let yetkilirole = db.fetch(`yetkilirole_${member.guild.id}`)

  const ktarih = new Date().getTime() - girenKisi.createdAt.getTime();

  var kontrol;
  if (ktarih > 2629800000) kontrol = Güvenli;
  if (ktarih < 2629800001) kontrol = Şüpheli;
  let kanal = await db.fetch(`hgK_${member.guild.id}`);
  if (!kanal) return;



const giris = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`

                    **<a:hello:791804625690689536> Sunucumuza Hoş Geldiniz! <a:hello:791804625690689536> **

<a:zipzip:791804624117432381>・${member} ${mesaj} 

<a:zipzip2:791804622092238920>・**Teyit için ismini ve yaşını yazarak ses teyiti vermen yeterlidir. **

<a:sinirsiz2:791818407280115752>・**Bu Kullanıcıyla Birlikte** **${member.guild.memberCount}** **Kişi Olduk! **

<a:guvenlik:791818408857174027>・**Register rolünde ki arkadaşlar senin ile ilgilenecektir.** <:tik:791804621181419532>

<a:renkli:791804621215367180>・**Kullanıcı ID >**  **\`${member.user.id}\`** 

<a:duyuru:791810991087943690>・**Sunucu Kurallarını Okumayı Unutma**

<a:kalp2:791818406814285856>・**Güvenlik Durumu;**
      ${kontrol}

`)
      .setImage(mesajresim)
      
.setThumbnail(member.user.avatarURL());
  client.channels.cache.get(kanal).send(giris);
});

client.on('message', msg => {
  if (msg.content === '<@!791794775501045813>') {
    msg.channel.send(`<:suticiom:791806095211233280> | <@!${msg.author.id}> **Hey! Merhaba Ben Lilu** 
<:kalp:791806095215689748> | **Sunucunu Daha Kullanışlı Hale Getirmek İçin Burdayım!**
<:uwu:791806095173746698> | **Prefixlerim s+, w! , .**
<:kalem:791801114177437748> | **Yardım Menüsü İçin s+yardım**
<:kayit:791814243129360384> | **Beni Sunucuna Almak İstermisin ? **
**Davet Etmek İçin : s+davet** `)

  }
})
client.on('guildMemberAdd', async member => {
  
let kanal1 = await db.fetch(`otorolkanal_${member.guild.id}`);
let kanal2 = member.guild.channels.cache.get(kanal1)

let rol1 = await db.fetch(`otorolrol_${member.guild.id}`);
let rol2 = member.guild.roles.cache.get(rol1)

if (!kanal2) return;
if (!rol2) return;
  
const embed = new Discord.MessageEmbed()

.setTitle('Lilu - Otorol')

.setColor("GREEN")

.setDescription(`Sunucuya Katılan **${member}** Adlı Kullanıcıya Başarıyla \`${rol2.name}\` Rolü Verildi.`)

kanal2.send(embed)
  
member.roles.add(rol2)
});
client.on("message", async message => {
  if (!message.guild) return;

  if (db.has(`sayac_${message.guild.id}`) === true) {
    if (db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Tebrikler ${message.guild.name}!`)
        .setDescription(`Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
        .setColor("RANDOM");
      message.channel.send(embed);
      message.guild.owner.send(embed);
      db.delete(`sayac_${message.guild.id}`);
    }
  }
});
client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`**${member.user.tag}** Sunucudan ayrıldı! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});
client.on("guildMemberAdd", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`**${member.user.tag}** Sunucuya Katıldı ! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});
