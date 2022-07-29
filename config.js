

const fs = require('fs')
const chalk = require('chalk')

global.mess = {
    admin: 'Membro comum não tem autoridade para usar este comando 🤣',
    botAdmin: 'Me dê admin primeiro 🙏',
    owner: '❗Somente meu criador pode usar este comando 📌',
    group: 'Este recurso só funciona em grupos 😕',
    private: 'Desculpe o anti-pv está ativado terei que te bloquear 😕',
	bot: '❌Este recurso só pode ser usado pelo whatsapp do bot 📌',
    wait: '⌛Aguarde um instante⏰',
	lockCmd: 'Este comando foi bloqueado pelo meu criador ☝🏻',
	example1: 'a',
	sucesso: '✅ Pronto',
	mxm10s: 'o vídeo precisa ter no maximo 10 segundos :/',
	marqueimgsticker: 'marque algum vídeo ou imagem/gif e digite o comando #s ou #f para fazer a figu',
	errofigu: 'Marque uma imagem/gif ou um vídeo que tenha pelo menos 10 segundos de duração',
	marqueoarquivo: 'marque o arquivo é use:',
  convertmsgimg: 'figurinha convertida para imagem',
  convertmsgvideo: 'figurinha convertida para vídeo',
  convertmsggif: 'figurinha convertida para gif',
  marquest: 'marque a figurinha',
  erro: 'ops deu algum erro interno😢',
  formatoerr: '*「❌ERROR❌」*\n\n*Formato errado ou o texto esta em branco!!*',
  jarg: 'vocé já se registrou',
  rg: 'registre se primeiro\nuse: #rg nome|idade',
  limitesgoto: `*Desculpe más Seu limit acabou*\n*Para conseghir mais limit compre ou passe de nível*`,
  erro_c: 'insira a pesquisa'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
