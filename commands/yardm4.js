const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }


message.channel.send(new Discord.MessageEmbed().setColor('#000001').setFooter('s+yardım5 Yazarak Devamına Ulaşabilirsin.') .setDescription(`\`\`\`Lilu Diğer Kullanabileceğin Komutlar Aşağıda Yer Almakta.\`\`\`

<:emoji:791810989925335050> \`${client.ayarlar.prefix}emoji\`
**Lilu sunucunda ki emoji ismini yaz sana indirme bağlantısı verir**

🎲 \`${client.ayarlar.prefix}oyunlar\`
**Eğlenceye kendini kaptırma**

🔒 \`${client.ayarlar.prefix}kanal-kilit\` **&** \`${client.ayarlar.prefix}kilit-aç\`
**Kanalı kilitlemenize yarar**

❕ \`${client.ayarlar.prefix}çek [@etiket]\` **|** \`${client.ayarlar.prefix}kes [@etiket]\` **|** \`${client.ayarlar.prefix}git [@etiket]\`
**Belirli sesli kanalda ki kullanıcıyı yanına çekmeni sağlar ve kişiyi sesten atmanı sağlar. Seste yanına gitmeni sağlar**

<:rolrenk:791810989645365258> \`${client.ayarlar.prefix}rol-renk\`
**Lilu Telefon kullananlar için Rol Renk değiştirme**

<:sil:791801550376927293> \`${client.ayarlar.prefix}sil [100]\`
**Lilu bot kanaldaki mesajları siler**

<:cikis:791810989829128192> \`${client.ayarlar.prefix}sunucudan-ayrıl\`
Lilu ile kurmuş olduğunuz ayarlarınızı sıfırlayarak sunucundan çıkar`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y4','h4','help4'],
  permLevel: 0
}

exports.help = {
  name: 'yardım4'
};