Este é um projeto full-stack que implementa duas funcionalidades principais em um backend Node.js: upload robusto de múltiplos arquivos e um sistema de cadastro de usuários com autenticação segura. O frontend é construído com HTML, Tailwind CSS e JavaScript puro.

Tecnologias Utilizadas:
Backend: Node.js, Express.js, Multer (para uploads), Bcrypt.js (para hashing de senhas), CORS.
Frontend: HTML5, Tailwind CSS, JavaScript (ES6+) com Fetch API.
Funcionalidades Implementadas:
Backend (server.js):



Cadastro (Atividade 2): Implementação de um endpoint POST /register. Ele utiliza bcryptjs para hashear as senhas recebidas antes de salvá-las em um userModel (simulado em memória), garantindo que senhas puras não sejam armazenadas.

Upload de Arquivos: Endpoint POST /upload que aceita até 10 arquivos por requisição.
Validação Robusta: O servidor valida o tipo de arquivo (apenas PNG/JPEG), o tamanho (máx. 5MB) e a quantidade.
Armazenamento e Erros: Salva arquivos com nomes únicos no diretório uploads/ e retorna mensagens de erro claras.
Frontend (frontend_atividade_incompleto.html):
Interface Unificada: Uma página única que agora contém dois módulos: o formulário de Cadastro de Usuário e a interface de Upload de Arquivos.
Interatividade: Usa a Fetch API para comunicação assíncrona com o backend e exibe feedback em tempo real (sucesso ou erro) para ambas as operações.
