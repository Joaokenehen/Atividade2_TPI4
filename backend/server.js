const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const cors = require("cors");

app.use(cors());

const createUploadDirectory = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Diretório ${dir} criado automaticamente.`);
  }
};

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(
      new Error("Tipo de arquivo inválido. Apenas JPG e PNG são permitidos."),
      false
    );
  }
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_FILES = 10;

const uploadDir = "uploads/";
createUploadDirectory(uploadDir);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = "uploads/";
    createUploadDirectory(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE,
    files: MAX_FILES,
  },
});

app.get("/", (req, res) => res.send("Servidor de upload funcionando!"));

app.post("/upload", (req, res) => {
  upload.array("meusArquivos", MAX_FILES)(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_COUNT")
        return res
          .status(400)
          .json({ error: "Too many files. Máximo de 10 permitidos." });
      if (err.code === "LIMIT_FILE_SIZE")
        return res
          .status(400)
          .json({ error: "Arquivo excede o limite de 5MB." });
      return res.status(400).json({ error: `Erro do Multer: ${err.code}` });
    } else if (err) {
      return res.status(400).json({ error: err.message });
    }

    if (!req.files || req.files.length === 0)
      return res.status(400).json({ error: "Nenhum arquivo enviado." });

    res.json({
      message: "Upload realizado com sucesso!",
      arquivos: req.files.map((f) => f.filename),
    });
  });
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
