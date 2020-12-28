const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://api.creavite.co/out/4c6d451a-3d93-4a1b-b52f-3073e5373a46_standard.gif', 'https://api.creavite.co/out/4c6d451a-3d93-4a1b-b52f-3073e5373a46_standard.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`\`\`\`Lilu Diğer Kullanabileceğin Komutlar Aşağıda Yer Almakta.\`\`\`
<:uplilu:791812029131390996> \`${client.ayarlar.prefix}up\`
**Botun İstatistiklerini Gösterir**

<:avatar:791810990906802248> \`${client.ayarlar.prefix}av\`
**Kullanıcının profilinde ki fotoğrafı gösterir**

<a:duyuru:791810991087943690> \`${client.ayarlar.prefix}duyuru\`
**Yazı içeriğini oluşturabilirsin**

<:afk:791812557902970910> \`${client.ayarlar.prefix}afk\`
**Cihaz başında olmadığınız süre için kullanırsın**

<:davet:791810991146401802> \`${client.ayarlar.prefix}davet\`
**Lilu bağlantılarını gönderir**

<:kurallar:791810989963345930> \`${client.ayarlar.prefix}kurallar\`
**Lilu hazır tema ile kurallarınızı yerleştirir**

<:yavamod:791810989245988905> \`${client.ayarlar.prefix}yavaş-mod\`
**Lilu üyelerinizin belirlediğiniz sürede bir mesaj yazmasını sağlar**

`).setThumbnail('https://api.creavite.co/out/4c6d451a-3d93-4a1b-b52f3073e5373a46_standard.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y5','h5','help5'],
  permLevel: 0
}

exports.help = {
  name: 'yardım5'
};