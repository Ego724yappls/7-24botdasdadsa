const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let slm = ['2 Bune Len Az Süt İçir', '4 Büyüyor Büyüyor', '8 Hava Yolları Kalkıyor', '12 Bune Len Az daha büyüt', '15 İyi İyi Büyüyor', '20 Aferim len', '24 iyi iyi', '26 Hava Yolları Kalkıyor', '32 Oha Len', '38 yuh dedden', '41 oha abe büyüksün', '54 ohe abi bune aw', '60 Birşey Sorcam bunu pantoluna Nasıl Sığdırıyosun'];
message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${message.author} **Hemen ölçüyoruz 1 saniye...**`)).then(m => {
setTimeout(() => {
m.edit(new Discord.MessageEmbed().setDescription(`${message.author} **Malafatın ${slm.random()}  🍆**`).setImage('https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2Feggplant-transparent-animated-gif-3.gif'))
}, 4500)
})

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kaçcm'
};