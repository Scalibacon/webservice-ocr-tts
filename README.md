# Web Service OCR + Client TTS
<img align="left" alt="javascript" src="https://img.shields.io/badge/-javascript-F7DF1E?logo=javascript&logoColor=3e3e3e&style=for-the-badge" />
<img align="left" alt="react" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
<img align="left" alt="node.js" src="https://img.shields.io/badge/-node.js-339933?logo=node.js&logoColor=white&style=for-the-badge" />

<br>
<br>

Este projeto foi feito como parte do meu TCC da faculdade, tendo como principal função auxiliar a leitura de deficientes visuais (além de me ajudar a concluir a faculdade, claro 🤭)

## Detalhes

A aplicação possui fundamentalmente 2 partes:
- Uma web service feito para receber imagens e extrair o texto presente nelas por meio de um Optical Character Recognition (OCR), que no caso foi o [Tesseract](https://github.com/naptha/tesseract.js).
- Um protótipo de cliente para consumir esse web service e utilizar uma ferramenta Text To Speech (TTS) para ler o texto extraído da imagem. A ferramenta usada foi o [SpeechSynthesis](https://developer.mozilla.org/pt-BR/docs/Web/API/SpeechSynthesis), da Web Speech API.

Por intermédio dessas 2 partes a aplicação é capaz de ler o texto presente em imagens para o usuário, não havendo a necessidade do usuário saber ou conseguir ler.

Visto que o protótipo de aplicação cliente é apenas um protótipo (jura?) para demonstrar como seria a utilização de um TTS com o web service OCR, não foram aplicadas técnicas de acessibilidade para permitir a utilização por parte de pessoas com deficiências.

# 🎉🎊🎈 TIRAMO 10!!! 🎈🎊🎉
<img alt="ganhamo" src="./client/public/assets/ganhamo.PNG" />
<br>
