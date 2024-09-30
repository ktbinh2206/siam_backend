const express = require('express');
const { addFood, listFood, removeFood } = require('../controllers/foodController.js');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const foodRouter = express.Router();

const uploadDir = path.join(__dirname, 'tmp/uploads');

// Kiểm tra và tạo thư mục nếu nó không tồn tại
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Image Storage Engine (Lưu trữ hình ảnh vào thư mục tạm thời và đổi tên)
const storage = multer.diskStorage({
    destination: uploadDir,  // Thay đổi đường dẫn đến thư mục tạm
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

foodRouter.get("/list", listFood);
foodRouter.post("/add", upload.single('image'), addFood);
foodRouter.post("/remove", removeFood);

module.exports = foodRouter;
