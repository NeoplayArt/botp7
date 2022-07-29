#!/usr/bin/bash
GRE='\033[0;32m'

apt-get update
apt-get upgrade
apt-get install -y python nodejs-lts libwebp ffmpeg wget 
npm install

echo "${GRE}[*] Todas as dependências foram instaladas, por favor execute o comando \"sh start.sh\" para iniciar o script imediatamente"