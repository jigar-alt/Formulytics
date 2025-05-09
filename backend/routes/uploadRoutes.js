// routes/uploadRoutes.js
const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' }); // store uploads in /uploads

router.post('/', upload.single('excel'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.json({ message: 'File uploaded successfully', file: req.file });
});

module.exports = router;
