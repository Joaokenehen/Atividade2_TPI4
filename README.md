Projeto: Upload Múltiplo de Arquivos com Node.js e Vanilla JS
Desenvolvido por João Gustavo Quennehen.

Este é um projeto full-stack simples que implementa uma funcionalidade robusta de upload de múltiplos arquivos. A aplicação consiste em um backend construído com Node.js e Express, responsável por processar e armazenar os arquivos, e um frontend interativo feito com HTML, Tailwind CSS e JavaScript puro (Vanilla JS).

Tecnologias Utilizadas
Backend:
Node.js
Express.js
Multer (para manipulação de uploads multipart/form-data)
CORS
Frontend:
HTML5
Tailwind CSS
JavaScript (ES6+), utilizando Fetch API e FormData

Funcionalidades Implementadas
Backend (server.js)
API RESTful: Um endpoint POST /upload foi criado para receber os arquivos.
Upload de Múltiplos Arquivos: O servidor está configurado para aceitar um array de até 10 arquivos por requisição.
Validação de Arquivos: Regras de validação robustas foram implementadas no lado do servidor:
Tipo de Arquivo: Permite apenas imagens do tipo .jpeg e .png.
Tamanho Máximo: Limita cada arquivo a um tamanho máximo de 5MB.
Quantidade Máxima: Restringe o número de arquivos por upload a 10.
Armazenamento Seguro: Os arquivos são salvos no diretório uploads/ com nomes únicos, gerados a partir da data atual e de um número aleatório para evitar conflitos e sobreposições.
Criação Automática de Diretório: A pasta uploads/ é criada automaticamente se não existir, garantindo que o servidor funcione corretamente na primeira execução.
Tratamento de Erros: O backend retorna mensagens de erro claras e códigos de status HTTP apropriados para cada tipo de falha (ex: tipo de arquivo inválido, tamanho excedido, etc.).

Frontend (frontend_atividade_incompleto.html)
Interface Intuitiva: Uma interface limpa e moderna, estilizada com Tailwind CSS, que permite ao usuário selecionar múltiplos arquivos de imagem.
Comunicação Assíncrona: Utiliza a Fetch API para enviar os arquivos ao backend de forma assíncrona, sem a necessidade de recarregar a página.
Feedback em Tempo Real: O usuário recebe feedback visual instantâneo sobre o status do upload:
O botão de envio é desabilitado e seu texto muda para "Enviando..." durante o processo.
Mensagens de sucesso (verde) ou erro (vermelho) são exibidas dinamicamente com base na resposta do servidor.







