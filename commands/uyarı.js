const Discord = require('discord.js')
const data = require('quick.db')

exports.run = async (client, message, args) => {
let prefix = 's+'// botun prefixi

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Yetkin yok.`)
if(!args[0]) return message.channel.send(`**Sistemi kullanmak için, ${prefix}uyarı ekle/sil/bilgi komutlarını kullanın <a:tik23:774018707785252884> **`)


if(args[0] === 'ekle') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(`<:no:791807339007180820> **Bir kişiyi etiketlemelisin.**`)
if(!kullanıcı) return message.channel.send(`<:no:791807339007180820> ${args[1]}, **kullanıcısını sunucuda bulamıyorum.**`)
if(kullanıcı.bot) return message.channel.send(`<:no:791807339007180820> **Botları uyaramam.**`)
if(kullanıcı.id === message.author.id) return message.channel.send(`<:no:791807339007180820> **Kendini uyaramazsın.**`)
let reason = args.slice(2).join(' ')

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(!reason) {
await message.channel.send(`${kullanıcı}, **Uyarıldı!** <:tik:791804621181419532> \n**<:uyarisayisi:791809242742259712> Toplam uyarı sayısı:** ${syı}`)
await kullanıcı.send(`<a:pikachu:743866375918845993> ${kullanıcı}, **Merhaba!** ${message.guild.name} **sunucusunda sebepsiz bir şekilde uyarıldın. Dikkatli ol!<a:lilu_unlem:767673398276390922>**`) 
return}

if(reason) {
await message.channel.send(`${kullanıcı}, **uyarıldı!** <:tik:791804621181419532> \n**<:uyarisayisi:791809242742259712> Toplam uyarı sayısı:** ${syı}`)
await kullanıcı.send(` ${kullanıcı}, **Merhaba!** ${message.guild.name} **sunucusunda ${reason} sebebiyle uyarıldın. Dikkatli ol! <:tik:791804621181419532>**`) 
return} }

if(args[0] === 'sil') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(`<:no:791807339007180820> **Bir kişiyi etiketlemelisin.**`)
if(!kullanıcı) return message.channel.send(`<:no:791807339007180820> ${args[1]}, **kullanıcısını sunucuda bulamıyorum.**`)
if(kullanıcı.id === message.author.id) return message.channel.send(`Kendini uyaramazsın.`)

let sayı = args[2]
if(!sayı) return message.channel.send(`<:no:791807339007180820> **Silinecek uyarı sayısını yazmadın!**`)
if(isNaN(sayı)) return message.channel.send(`<:no:791807339007180820> **Silinecek uyarı sayısını yazmadın!**`)
if(sayı === '0') return message.channel.send(`<:no:791807339007180820> **Beni mi kandırmaya çalışıyorsun sen?**`)
const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(syı2 < sayı) return message.channel.send(`<<:no:791807339007180820> **${kullanıcı}, kullanıcısının uyarı sayısı: ${syı2}! Sadece bu kadar silebilirsin.**`)

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, -sayı)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
await message.channel.send(`${kullanıcı}, **Uyarısı Silindi!** <:kabul:791807339212308520>\n <:uyarisayisi:791809242742259712> **Toplam uyarı sayısı:** ${syı ? syı : '0'}`)
await kullanıcı.send(` ${kullanıcı}, **Merhaba!** ${message.guild.name} **sunucusunda uyarın silindi.** **Daha dikkatli ol!** <:kabul:791807339212308520>`) }

if(args[0] === 'bilgi') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(`<:no:791807339007180820> **Bir kişiyi etiketlemelisin.**`)
if(!kullanıcı) return message.channel.send(`<:no:791807339007180820> ${args[1]}, **kullanıcısını sunucuda bulamıyorum.**`)

const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(!syı2) return message.channel.send(`<:no:791807339007180820> ${kullanıcı}, **kullanıcısının hiç uyarısı yok.**`)
await message.channel.send(`${kullanıcı}:\n**<:kufur:791799587978477578> Toplam uyarı sayısı:** ${syı2 ? syı2 : '0'}`) }
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['warn'],
permLevel: 0,
}

exports.help = {
name: 'uyarı'
}